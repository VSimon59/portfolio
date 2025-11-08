import "app/projets/artisan-plombier/globals.css";
import Header from "@artisan-plombier/Header";
import Footer from "@artisan-plombier/Footer";

export default function ArtisanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="container-pro py-8 grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
