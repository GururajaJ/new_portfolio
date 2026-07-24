"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setMessage("Thanks! Your message has been sent — I'll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-xl space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>
      {/* Honeypot: hidden from real users, catches bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell me about the role or project…"
          className="w-full resize-y rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {sending && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground/40 border-t-accent-foreground" />
        )}
        {sending ? "Sending…" : "Send message"}
      </button>

      {message && (
        <p
          role="status"
          className={`text-sm ${
            status === "success"
              ? "text-accent"
              : status === "error"
                ? "text-red-500"
                : "text-muted-foreground"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
