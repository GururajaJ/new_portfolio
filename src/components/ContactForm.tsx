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
      setMessage("Message sent successfully. I will get back to you shortly.");
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
    <form onSubmit={onSubmit} className="mt-8 space-y-6 text-left">
      <div className="grid gap-6 sm:grid-cols-2">
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
      {/* Honeypot for bot catches */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-widest"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          placeholder="Tell me about the role or project details..."
          className="w-full resize-none minimal-input py-2 text-sm text-foreground focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn-minimal inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer w-full sm:w-auto"
      >
        {sending && (
          <span className="h-3 w-3 animate-spin rounded-full border border-background/40 border-t-background" />
        )}
        {sending ? "Sending…" : "Send message"}
      </button>

      {message && (
        <p
          role="status"
          className={`text-xs font-bold ${
            status === "success"
              ? "text-green-600"
              : status === "error"
                ? "text-red-600"
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
        className="mb-1 block font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-widest"
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
        className="w-full minimal-input py-2 text-sm text-foreground focus:border-accent"
      />
    </div>
  );
}
