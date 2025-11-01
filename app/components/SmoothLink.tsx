"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import { MouseEvent, PropsWithChildren } from "react";

type Props = {
  href: string;
  className?: string;
  title?: string;
};

export default function SmoothLink({ href, className, title, children }: PropsWithChildren<Props>) {
  const router = useRouter();

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Cmd/Ctrl+click, middle-click => nouvel onglet, on ne bloque pas
    if (e.metaKey || e.ctrlKey || e.button === 1) return;

    e.preventDefault();

    // Démarre la barre de chargement
    NProgress.start();

    const page = document.getElementById("page");
    if (page) {
      page.classList.remove("page-fading-in");
      page.classList.add("page-fading-out");
      setTimeout(() => {
        router.push(href);
      }, 180);
    } else {
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={onClick} className={className} title={title}>
      {children}
    </Link>
  );
}
