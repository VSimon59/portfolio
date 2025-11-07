"use client";

import dynamic from "next/dynamic";

// charge la carte côté client uniquement (évite window is not defined au build)
const ZonesMap = dynamic(() => import("./ZonesMap"), { ssr: false });

export default function MapClient() {
  return <ZonesMap />;
}
