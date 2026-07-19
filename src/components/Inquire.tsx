"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function Inquire() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          project: data.get("project"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatus("success");
      setMessage(result.message || "Message received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to send right now.",
      );
    }
  }

  return (
    <section
      id="inquire"
      className="reveal border-t border-mist/60 bg-fog px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] text-glacier uppercase">
            Inquire
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-ink">
            Tell us where you&apos;re headed.
          </h2>
          <p className="mt-5 max-w-md text-base font-light leading-relaxed text-ink-soft md:text-lg">
            Share a few lines about your brand or project. This form hits a
            Vercel serverless API route — useful to see on your first deploy.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white p-6 md:p-8"
        >
          <label className="block">
            <span className="text-sm font-medium text-ink">Name</span>
            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              className="mt-2 w-full border border-mist bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-glacier"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-ink">Email</span>
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-full border border-mist bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-glacier"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-ink">Project notes</span>
            <textarea
              required
              name="project"
              rows={4}
              className="mt-2 w-full resize-y border border-mist bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-glacier"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center bg-ink px-6 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-glacier-deep disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
          >
            {status === "loading" ? "Sending…" : "Send inquiry"}
          </button>

          {message ? (
            <p
              role="status"
              className={`text-sm ${
                status === "success" ? "text-glacier-deep" : "text-ember"
              }`}
            >
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
