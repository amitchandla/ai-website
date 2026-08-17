-- =========================================================================
-- Golden Pizza Cafe — Orders table schema (Supabase / Postgres)
-- Run this in the Supabase SQL editor before connecting checkout.html
-- =========================================================================

create table if not exists public.orders (
  id                uuid primary key default gen_random_uuid(),
  order_id          text unique not null,
  customer_name     text not null check (char_length(trim(customer_name)) between 2 and 50),
  phone             text not null check (phone ~ '^[6-9][0-9]{9}$'),
  email             text not null check (email ~ '^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$'),
  address           text not null check (char_length(trim(address)) between 10 and 250),
  city              text not null check (char_length(trim(city)) >= 2),
  pin_code          text not null check (pin_code ~ '^[1-9][0-9]{5}$'),
  landmark          text,
  latitude          double precision,
  longitude         double precision,
  distance_km       numeric(6,2),
  delivery_fee      numeric(10,2) not null default 0 check (delivery_fee >= 0),
  subtotal          numeric(10,2) not null check (subtotal >= 0),
  total             numeric(10,2) not null check (total >= 0),
  payment_method    text not null check (payment_method in ('UPI', 'COD')),
  payment_status    text not null default 'PENDING'
                       check (payment_status in ('PENDING', 'VERIFIED', 'FAILED', 'COD_PENDING')),
  order_status      text not null default 'NEW'
                       check (order_status in ('NEW','ACCEPTED','PREPARING','READY',
                                                'OUT FOR DELIVERY','DELIVERED','CANCELLED')),
  items             jsonb not null,          -- [{id,name,size,qty,price}, ...]
  created_at        timestamptz not null default now()
);

-- Grand total must equal subtotal + delivery fee (basic server-side sanity check;
-- true price trust still requires re-pricing `items` against your product table
-- in a Postgres function or edge function before insert/accept — see note below).
alter table public.orders
  add constraint orders_total_matches check (total = subtotal + delivery_fee);

create index if not exists idx_orders_created_at on public.orders (created_at desc);
create index if not exists idx_orders_status on public.orders (order_status);

-- -------------------------------------------------------------------------
-- Row Level Security
-- -------------------------------------------------------------------------
alter table public.orders enable row level security;

-- Public (anon) can create an order but never read/update/delete others'
-- orders directly — do admin status changes from a service-role context.
create policy "anon can insert orders"
  on public.orders for insert
  to anon
  with check (true);

-- -------------------------------------------------------------------------
-- IMPORTANT — price trust (see spec section 20)
-- The checkout page sends subtotal/total computed in the browser. Anyone
-- can edit those in devtools. Before treating an order as payable/acceptable:
--   1. Keep a `products` table with authoritative prices.
--   2. Add a Postgres trigger or edge function that, on insert, recomputes
--      subtotal from `items` against `products` and rejects/flags the row
--      if the client-sent subtotal/total don't match.
--   3. Only an authenticated admin/service role should ever update
--      payment_status to VERIFIED or change order_status.
-- This schema alone does not fetch live prices — wire step 2 in before
-- accepting real payments.
-- -------------------------------------------------------------------------
