import { NextResponse } from "next/server";
import { getSupabaseContactClient } from "@/lib/supabase/contact-server";

const MAX = {
  name: 200,
  email: 320,
  phone: 50,
  subject: 200,
  message: 5000
} as const;

function trimField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const supabase = getSupabaseContactClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const name = trimField(raw.name).slice(0, MAX.name);
  const email = trimField(raw.email).slice(0, MAX.email);
  const phone = trimField(raw.phone).slice(0, MAX.phone);
  const subject = trimField(raw.subject).slice(0, MAX.subject);
  const message = trimField(raw.message).slice(0, MAX.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Name, email, subject, and message are required." },
      { status: 400 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    phone: phone.length > 0 ? phone : null,
    subject,
    message
  });

  if (error) {
    console.error("contact_submissions insert:", error.message);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
