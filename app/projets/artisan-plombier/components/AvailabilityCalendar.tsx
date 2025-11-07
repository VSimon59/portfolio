"use client";
import { useMemo, useState } from "react";

// -----------------------------------------------
// Configuration du calendrier
// -----------------------------------------------
const OPEN_HOUR = 8; // 08:00
const CLOSE_HOUR = 19; // 19:00
const SLOT_MINUTES = 60; // pas de 1h
// Exemple de créneaux déjà pris (à compléter selon besoin)
const BOOKED: { date: string; hour: number }[] = [
  { date: "2025-11-10", hour: 10 },
  { date: "2025-11-11", hour: 14 },
  { date: "2025-11-13", hour: 16 },
];

// -----------------------------------------------
// Fonctions utilitaires
// -----------------------------------------------
function formatDateKey(d: Date) {
  return d.toISOString().slice(0, 10);
}

function startOfWeek(date: Date) {
  // semaine commençant le lundi
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(date: Date, n: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

// -----------------------------------------------
// Composant principal
// -----------------------------------------------
export default function AvailabilityCalendar() {
  const [weekOffset, setWeekOffset] = useState(0);

  const week = useMemo(() => {
    const base = startOfWeek(new Date());
    const start = addDays(base, weekOffset * 7);
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, [weekOffset]);

  const hours = useMemo(() => {
    const count = CLOSE_HOUR - OPEN_HOUR;
    return Array.from({ length: count }, (_, i) => OPEN_HOUR + i);
  }, []);

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500">
            Disponibilités
          </div>
          <div className="text-lg font-semibold">
            Semaine du {week[0].toLocaleDateString("fr-FR")} au{" "}
            {week[6].toLocaleDateString("fr-FR")}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setWeekOffset((v) => v - 1)}
            className="rounded-lg border border-gray-300 px-2 py-1 text-sm hover:bg-gray-50"
            aria-label="Semaine précédente"
          >
            ◀
          </button>
          <button
            onClick={() => setWeekOffset(0)}
            className="rounded-lg border border-gray-300 px-2 py-1 text-sm hover:bg-gray-50"
          >
            Aujourd’hui
          </button>
          <button
            onClick={() => setWeekOffset((v) => v + 1)}
            className="rounded-lg border border-gray-300 px-2 py-1 text-sm hover:bg-gray-50"
            aria-label="Semaine suivante"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Légende */}
      <div className="mt-3 flex items-center gap-3 text-xs text-gray-600">
        <div className="inline-flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded bg-gray-100 border border-gray-200" /> Libre
        </div>
        <div className="inline-flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded bg-gray-900" /> Occupé
        </div>
      </div>

      {/* Grille hebdomadaire */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-separate border-spacing-0 text-sm">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-white p-2 text-left text-xs font-medium text-gray-500">
                Heure
              </th>
              {week.map((d) => (
                <th
                  key={d.toISOString()}
                  className="whitespace-nowrap p-2 text-left text-xs font-medium text-gray-500"
                >
                  {d.toLocaleDateString("fr-FR", {
                    weekday: "short",
                    day: "2-digit",
                    month: "2-digit",
                  })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((h) => (
              <tr key={h}>
                <td className="sticky left-0 z-10 bg-white p-2 text-xs text-gray-600">
                  {String(h).padStart(2, "0")}:00
                </td>
                {week.map((d) => {
                  const key = formatDateKey(d);
                  const isBooked = BOOKED.some(
                    (b) => b.date === key && b.hour === h
                  );
                  return (
                    <td key={key + h} className="p-1">
                      <div
                        className={[
                          "h-8 rounded-lg border text-center leading-8 select-none",
                          isBooked
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-gray-100 border-gray-200 text-gray-700",
                          "hover:ring-2 hover:ring-gray-900/10 transition cursor-default",
                        ].join(" ")}
                        title={isBooked ? "Indisponible" : "Disponible"}
                      >
                        {isBooked ? "—" : ""}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="mt-4 flex justify-end gap-2 p-2">
        <LinkButton href="/projets/artisan-plombier/contact">
          Demander un devis
        </LinkButton>
        <a
          className="rounded-xl border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          href="tel:+33XXXXXXXXX"
        >
          Appeler
        </a>
      </div>
    </div>
  );
}

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="rounded-xl bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800"
    >
      {children}
    </a>
  );
}
