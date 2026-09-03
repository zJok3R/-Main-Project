import { NextResponse } from "next/server";

// GET /api/health — Uptime-Check für Monitoring (UptimeRobot, Healthchecks o.ä.).
// Bewusst minimal: kein Status über Konfiguration/Secrets, nur "läuft".
export async function GET() {
  return NextResponse.json({ status: "ok", time: new Date().toISOString() });
}
