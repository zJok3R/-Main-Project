"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { brand } from "@/lib/site-data";
import type { Dictionary } from "@/lib/i18n";

export type ContactOption = { id: string; name: string };

type ContactFormStrings = Dictionary["contactForm"];

export function ContactForm({
  options,
  t,
}: {
  options: ContactOption[];
  t: ContactFormStrings;
}) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`${t.subject}: ${topic || t.general}`);
    const body = encodeURIComponent(
      `${t.bodyName}: ${name}\n${t.bodyCompany}: ${company}\n${t.bodyEmail}: ${email}\n\n${t.bodyTopic}: ${topic || t.general}\n\n${message}`,
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-strong";

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
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
          {t.company}
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
            placeholder={t.companyPlaceholder}
          />
        </label>
      </div>
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
        {t.topic}
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={inputClass}
        >
          <option value="">{t.topicPlaceholder}</option>
          {options.map((o) => (
            <option key={o.id} value={o.name}>
              {o.name}
            </option>
          ))}
          <option value={t.other}>{t.other}</option>
        </select>
      </label>
      <label className="grid gap-1 text-xs font-medium text-ink">
        {t.message}
        <textarea
          rows={5}
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
