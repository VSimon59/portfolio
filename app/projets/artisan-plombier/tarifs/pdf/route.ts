import type { NextRequest } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export const runtime = "nodejs"; // OK aussi en edge, mais on reste en nodejs

// Données (idem page Tarifs)
const LIGNES = [
  { t: "Déplacement (Calais)", p: "Offert si intervention réalisée" },
  { t: "Main d'œuvre (heure entamée)", p: "à partir de 60€ HT" },
  { t: "Débouchage standard (méca)", p: "dès 90€ HT" },
  { t: "Débouchage renforcé (hydro)", p: "sur devis" },
  { t: "Remplacement mitigeur", p: "dès 120€ HT (hors fourniture)" },
  { t: "Recherche de fuite", p: "dès 80€ HT" },
  { t: "Entretien chauffe-eau", p: "dès 110€ HT" },
];

const EXEMPLES = [
  { titre: "Fuite sous évier", delai: "intervention sous 24–48h", prix: "≈ 60–90€ HT", desc: "Resserage/étanchéité, petite pièce si nécessaire. Hors fourniture spécifique." },
  { titre: "WC bouché (standard)", delai: "le jour même selon créneau", prix: "≈ 90–120€ HT", desc: "Débouchage mécanique, contrôle évacuation. Hydrocureuse en option si besoin." },
  { titre: "Mitigeur défectueux", delai: "sous 48–72h", prix: "≈ 120–160€ HT", desc: "Remplacement du robinet. Fourniture au choix (client ou sélection pro)." },
];

export async function GET(_req: NextRequest) {
  const pdf = await PDFDocument.create();

  // A4 portrait: 595 x 842 points
  const page = pdf.addPage([595, 842]);

  const fontRegular = await pdf.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);

  // Helpers
  let x = 50;
let y = 792; // 842 - 50 margin top

// Remplace les caractères non encodables WinAnsi par des équivalents ASCII
const sanitize = (s: string) =>
  s
    .replace(/≈/g, "~")
    .replace(/–|—/g, "-")
    .replace(/•/g, "-")
    .replace(/’/g, "'")
    .replace(/«|»/g, '"');

const line = (text: string, size = 12, bold = false, color = rgb(0, 0, 0)) => {
  const font = bold ? fontBold : fontRegular;
  page.drawText(sanitize(text), { x, y, size, font, color });
  y -= size + 6;
};

const gap = (h = 10) => {
  y -= h;
};

const rule = () => {
  page.drawLine({
    start: { x, y },
    end: { x: 545, y },
    thickness: 1,
    color: rgb(0.9, 0.9, 0.9),
  });
  y -= 12;
};

  // Titre
  line("Tarifs plomberie — Indications", 20, true);
  gap(2);
  line("Les montants ci-dessous sont donnés à titre indicatif. Un devis clair est fourni avant toute intervention.", 10, false, rgb(0.33, 0.33, 0.33));
  gap(6);
  rule();

  // Tableau Interventions & tarifs
  line("Interventions & tarifs", 12, true);
  gap(2);

  LIGNES.forEach((l) => {
    // Intervention (colonne 1)
    page.drawText(l.t, { x, y, size: 11, font: fontRegular, color: rgb(0.1, 0.1, 0.1) });
    // Tarif (colonne 2)
    page.drawText(l.p, { x: 340, y, size: 11, font: fontBold, color: rgb(0, 0, 0) });
    y -= 17;
  });

  gap(6);
  rule();

  // Exemples
  line("Exemples d’interventions", 12, true);
  gap(4);

  EXEMPLES.forEach((e) => {
    line(e.titre, 11, true);
    line(`${e.delai} • ${e.prix}`, 10, false, rgb(0.35, 0.35, 0.35));
    line(e.desc, 10, false, rgb(0.4, 0.4, 0.4));
    gap(6);
  });

  // Mentions
  gap(4);
  line("Mentions : tarifs en HT, fourniture en sus sauf mention. Déplacement offert si intervention réalisée à Calais. Facture détaillée fournie.", 9, false, rgb(0.4, 0.4, 0.4));

  // Pied de page
  gap(8);
  line("Artisan plombier — Calais et alentours • Devis clair avant intervention", 9, false, rgb(0.5, 0.5, 0.5));

  const bytes = await pdf.save();

  return new Response(Buffer.from(bytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="tarifs-plomberie.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
