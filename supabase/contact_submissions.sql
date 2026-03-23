-- Run once in Supabase: Dashboard → SQL → New query → Run
-- Stores messages from the site "Get In Touch" / contact form.

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null
);

comment on table public.contact_submissions is 'Website contact form submissions.';

alter table public.contact_submissions enable row level security;

-- No policies: the Next.js API route uses SUPABASE_SERVICE_ROLE_KEY (bypasses RLS).
-- View rows in Supabase Table Editor or add authenticated SELECT policies later.
