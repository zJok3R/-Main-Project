"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { brand } from "@/lib/site-data";
import type { Dictionary } from "@/lib/i18n";

type CancelFormStrings = Dictionary["cancel"];

export function CancelForm({ t }: { t: CancelFormStrings }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contract, setContract] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(t.subject);
    const body = encodeURIComponent(
      `${t.bodyName}: ${name}\n${t.bodyEmail}: ${email}\n${t.bodyContract}: ${contract || "-"}\n${t.bodyMessage}: ${message || "-"}`,
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-strong";

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <label className="grid gap-1 text-xs font-medium text-ink">
        {t.name}
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder={t.namePlaceholder}
        />
      </label>
      <label className="grid gap-1 text-xs font-medium text-ink">
        {t.email}
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder={t.emailPlaceholder}
        />
      </label>
      <label className="grid gap-1 text-xs font-medium text-ink">
        {t.contract}
        <input
          value={contract}
          onChange={(e) => setContract(e.target.value)}
          className={inputClass}
          placeholder={t.contractPlaceholder}
        />
      </label>
      <label className="grid gap-1 text-xs font-medium text-ink">
        {t.message}
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          placeholder={t.messagePlaceholder}
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-on-primary transition-colors duration-200 hover:bg-primary-strong"
      >
        {t.submit}
      </button>
      <p className="text-xs text-muted">{t.note}</p>
      {sent && (
        <p className="rounded-lg border border-line bg-surface px-3 py-2 text-xs text-ink">
          {t.sentA}{" "}
          <a
            href={`mailto:${brand.email}`}
            className="font-medium text-primary-strong hover:underline"
          >
            {brand.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
