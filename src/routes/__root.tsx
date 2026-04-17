import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-light text-foreground">404</h1>
        <span className="mx-auto mt-6 block h-px w-16 bg-[var(--gold)]" />
        <p className="mt-6 font-sans text-sm uppercase tracking-luxury text-muted-foreground">
          The page you're looking for has moved.
        </p>
        <a
          href="/"
          className="group mt-8 inline-flex items-center gap-3 border-b border-foreground pb-1 font-sans text-[11px] uppercase tracking-luxury text-foreground"
        >
          Return Home <span className="text-[var(--gold)]">→</span>
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RADS — Architecture & Interior Design Studio · Vijayawada" },
      {
        name: "description",
        content:
          "RADS is a Vijayawada-based architecture and interior design studio offering turnkey residential and commercial projects, structural design and RERA consultations.",
      },
      { name: "author", content: "RADS — R Architecture Design Studio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300..900;1,6..96,300..900&family=Outfit:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useReveal();
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
