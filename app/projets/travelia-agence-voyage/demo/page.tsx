"use client";
import Link from "next/link";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format } from "date-fns";
import { fr } from "date-fns/locale";
const destinations = [
  {
    slug: "santorin",
    name: "Santorin, Grèce",
    price: "À partir de 599 €",
    image: "/images/santorin.jpg",
  },
  {
    slug: "bali",
    name: "Bali, Indonésie",
    price: "À partir de 799 €",
    image: "/images/bali.jpg",
  },
  {
    slug: "maldives",
    name: "Maldives",
    price: "À partir de 999 €",
    image: "/images/maldives.jpg",
  },
  {
    slug: "barcelone",
    name: "Barcelone, Espagne",
    price: "À partir de 499 €",
    image: "/images/barcelone.jpg",
  },
];
export default function TraveliaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [destination, setDestination] = useState("");
 const [arrivalDate, setArrivalDate] = useState<Date>();
const [departureDate, setDepartureDate] = useState<Date>();
  const [travelers, setTravelers] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");

const handleSearch = () => {
  setSearchQuery(destination.trim().toLowerCase());
};
const handleReset = () => {
  setDestination("");
  setSearchQuery("");
};

const filteredDestinations = destinations.filter((item) =>
  item.name.toLowerCase().includes(searchQuery)
);
  return (
    <main className="bg-white text-slate-900">
      <section
        className="relative min-h-[900px] overflow-visible text-white lg:h-[760px] lg:min-h-0"
        style={{
          backgroundImage: "url('/images/santorin.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 via-blue-900/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-8 pt-8">
          <header className="flex items-center justify-between">
            <div className="text-3xl font-bold md:text-4xl">
              🌴 Travelia
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-xl bg-white/20 px-3 py-2 text-2xl backdrop-blur-md transition hover:bg-white/30 lg:hidden"
              aria-label="Ouvrir le menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>

            <nav className="hidden gap-10 text-lg font-medium lg:flex">
              <a href="#">Accueil</a>
              <a href="#destinations">Destinations</a>

              <Link href="/projets/travelia-agence-voyage/demo/favoris">
                ❤️ Favoris
              </Link>

              <a href="#">Offres</a>
              <a href="#">À propos</a>
              <a href="#">Contact</a>
            </nav>

            <button
              className="hidden rounded-xl bg-white/15 px-6 py-3 font-medium text-white backdrop-blur-lg transition hover:bg-white/25 md:block"
            >
              Mon compte
            </button>
          </header>
          
            <div
              className={`mt-4 overflow-hidden rounded-3xl border border-white/20 bg-blue-900/40 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
                isMenuOpen
                  ? "max-h-96 translate-y-0 opacity-100"
                  : "max-h-0 -translate-y-4 opacity-0"
              }`}
            >
              <nav className="flex flex-col gap-2 p-4 text-lg font-semibold">
                <a
                  className="rounded-2xl px-5 py-3 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-950"
                  href="#"
                >
                  Accueil
                </a>

                <a
                  className="rounded-2xl px-5 py-3 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-950"
                  href="#destinations"
                >
                  Destinations
                </a>
                
                <Link
                  href="/projets/travelia-agence-voyage/demo/favoris"
                  className="rounded-2xl px-5 py-3 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-950"
                >
                  ❤️ Favoris
                </Link>
                <a
                  className="rounded-2xl px-5 py-3 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-950"
                  href="#"
                >
                  Offres
                </a>

                <a
                  className="rounded-2xl px-5 py-3 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-950"
                  href="#"
                >
                  À propos
                </a>

                <a
                  className="rounded-2xl px-5 py-3 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-950"
                  href="#"
                >
                  Contact
                </a>
              </nav>
            </div>

          <div className="mt-24 lg:mt-20 max-w-3xl">
            <h1 className="text 6xl font-bold leading-[0.95] lg:text-8xl">
              Voyagez.
              <br />
              Explorez. Vivez.
            </h1>

            <p className="mt-10 text-lg leading-relaxed md:text-xl">
              Découvrez des lieux incroyables
              <br />
              et créez des souvenirs inoubliables.
            </p>

            <a
              href="#destinations"
              className="mt-10 inline-flex rounded-xl bg-yellow-400 px-6 py-4 text-lg font-semibold text-slate-950"
            >
              Découvrir nos destinations
            </a>
          </div>
        </div>

        {/* Barre de recherche */}
<div className="absolute bottom-[-75px] left-1/2 z-20 w-[calc(100%-2rem)] max-w-[1600px] -translate-x-1/2 rounded-3xl bg-white p-5 text-slate-900 shadow-2xl lg:bottom-[55px] lg:w-[calc(100%-7rem)] lg:p-4">
  <div className="grid gap-5 lg:grid-cols-[2fr_1fr_1fr_0.8fr_auto] lg:items-center lg:gap-3">

    {/* Destination */}
    <div className="flex items-center gap-4 border-b border-slate-200 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-3">
      <span className="text-xl lg:text-lg">📍</span>

      <div className="w-full">
        <p className="text-sm font-semibold lg:text-xs">Où allez-vous ?</p>

        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination, ville, pays"
          className="w-full bg-transparent text-xl text-slate-500 outline-none placeholder:text-slate-500 lg:text-base"
        />
      </div>
    </div>

    {/* Arrivée */}
    <div className="flex items-center gap-4 border-b border-slate-200 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-3">
      <span className="text-3xl lg:text-2xl">📅</span>

      <div className="w-full">
        <p className="text-sm font-semibold lg:text-xs">Arrivée</p>

        <Popover>
          <PopoverTrigger asChild>
            <button className="text-left text-lg text-slate-500 outline-none lg:text-base">
              {arrivalDate
                ? format(arrivalDate, "dd MMMM yyyy", { locale: fr })
                : "Choisir une date"}
            </button>
          </PopoverTrigger>

          <PopoverContent
            align="start"
            sideOffset={12}
            className="z-[9999] w-[320px] rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-2xl"
          >
            <Calendar
              mode="single"
              selected={arrivalDate}
              onSelect={setArrivalDate}
              locale={fr}
              className="w-full"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>

    {/* Départ */}
    <div className="flex items-center gap-4 border-b border-slate-200 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-3">
      <span className="text-3xl lg:text-2xl">📅</span>

      <div className="w-full">
        <p className="text-sm font-semibold lg:text-xs">Départ</p>

        <Popover>
          <PopoverTrigger asChild>
            <button className="text-left text-lg text-slate-500 outline-none lg:text-base">
              {departureDate
                ? format(departureDate, "dd MMMM yyyy", { locale: fr })
                : "Choisir une date"}
            </button>
          </PopoverTrigger>

          <PopoverContent
            align="start"
            sideOffset={12}
            className="z-[9999] w-[320px] rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-2xl"
          >
            <Calendar
              mode="single"
              selected={departureDate}
              onSelect={setDepartureDate}
              locale={fr}
              className="w-full"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>

    {/* Voyageurs */}
    <div className="flex items-center gap-4 border-b border-slate-200 pb-4 lg:border-b-0 lg:pb-0">
      <span className="text-3xl lg:text-2xl">👥</span>

      <div>
        <p className="text-sm font-semibold lg:text-xs">Voyageurs</p>

        <input
          type="number"
          min="1"
          value={travelers}
          onChange={(e) => setTravelers(Number(e.target.value))}
          className="w-20 bg-transparent text-xl font-semibold outline-none lg:w-14 lg:text-base"
        />
      </div>
    </div>

    {/* Bouton */}
    <div className="flex flex-col gap-3 lg:flex-row">
      <button
        onClick={handleSearch}
        className="rounded-2xl bg-yellow-400 px-8 py-5 text-lg font-semibold text-slate-950 transition hover:scale-105 hover:shadow-lg lg:px-7 lg:py-4 lg:text-base"
      >
        🔍 Rechercher
      </button>

    </div>

  </div>
</div>
      </section>
                
      <section
      
        id="destinations"
        className="px-6 pb-24 pt-40 lg:px-8 lg:pt-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-5xl font-bold">
                Destinations populaires
              </h2>

              <div className="mt-4 h-1 w-12 bg-yellow-400" />
            </div>
                
            <a
              href="#"
              className="text-lg font-medium text-slate-700 transition hover:text-yellow-500"
            >
              Voir toutes les destinations →
            </a>
          </div>
                {searchQuery && (
          <button
            onClick={handleReset}
            className="mb-6 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
          >
            ↺ Réinitialiser les filtres
          </button>
        )}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                {filteredDestinations.length === 0 && (
                  <p className="col-span-full text-center text-lg text-slate-500">
                    Aucune destination trouvée.
                  </p>
                )}

                {filteredDestinations.map((destination) => (
                  <Link
                      key={destination.slug}
                      href={`/projets/travelia-agence-voyage/demo/destinations/${destination.slug}`}
                      className="group relative block h-72 overflow-hidden rounded-2xl shadow-xl"
                    >
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">
                        📍 {destination.name}
                      </h3>

                      <p className="mt-2 text-xl">
                        {destination.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
        </div>
      </section>
    </main>
  );
}