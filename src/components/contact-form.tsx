"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { brand } from "@/lib/site-data";

export type ContactOption = { id: string; name: string };

export function ContactForm({ options }: { options: ContactOption[] }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`KI-Anfrage: ${topic || "Allgemein"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nFirma: ${company}\nE-Mail: ${email}\n\nThema: ${topic || "Allgemein"}\n\n${message}`,
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-strong";

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-xs font-medium text-ink">
          Name *
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Vor- und Nachname"
          />
        </label>
        <label className="grid gap-1 text-xs font-medium text-ink">
          Firma
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
            placeholder="Firmenname"
          />
        </label>
      </div>
      <label className="grid gap-1 text-xs font-medium text-ink">
        E-Mail *
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="name@firma.de"
        />
      </label>
      <label className="grid gap-1 text-xs font-medium text-ink">
        Thema
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={inputClass}
        >
          <option value="">— Bitte wählen —</option>
          {options.map((o) => (
            <option key={o.id} value={o.name}>
              {o.name}
            </option>
          ))}
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </label>
      <label className="grid gap-1 text-xs font-medium text-ink">
        Nachricht
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          placeholder="Was wollt ihr automatisieren oder lösen?"
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-on-primary transition-colors duration-200 hover:bg-primary-strong"
      >
        Anfrage senden
      </button>
      <p className="text-xs text-muted">
        Die Anfrage öffnet dein E-Mail-Programm mit vorausgefüllter Nachricht.
        Deine Daten verwenden wir ausschließlich zur Beantwortung.
      </p>
    </form>
  );
}
