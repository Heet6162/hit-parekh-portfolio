import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import CosmicUniverse from "@/components/CosmicUniverse";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hitparekh.dev"),
  title: "Hit Parekh | Full-Stack Web Developer & AI Enthusiast",
  description:
    "Explore the portfolio of Hit Parekh, a Full-Stack Web Developer specializing in modern web applications, AI-powered platforms, interactive experiences, and database-driven solutions.",
  keywords: [
    "Hit Parekh",
    "Full-Stack Web Developer",
    "AI Enthusiast",
    "BCA CVM University",
    "Next.js Developer",
    "FastAPI",
    "Google Gemini API",
    "Three.js",
    "Web Developer Portfolio",
    "Gujarat India Developer",
  ],
  authors: [{ name: "Hit Parekh", url: "https://github.com/Heet6162" }],
  creator: "Hit Parekh",
  icons: {
    icon: "/images/hp-logo-dark.png",
    shortcut: "/images/hp-logo-dark.png",
    apple: "/images/hp-logo-dark.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hitparekh.dev",
    title: "Hit Parekh | Full-Stack Web Developer & AI Enthusiast",
    description:
      "Full-Stack Web Developer passionate about building modern web applications, AI-powered platforms, interactive experiences, and scalable digital solutions.",
    siteName: "Hit Parekh Portfolio",
    images: [
      {
        url: "/images/myphoto.jpeg",
        width: 1200,
        height: 630,
        alt: "Hit Parekh — Full-Stack Web Developer & AI Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hit Parekh | Full-Stack Web Developer & AI Enthusiast",
    description:
      "Building Digital Experiences Through Code, Creativity & Innovation. BCA @ CVM University.",
    images: ["/images/myphoto.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hit Parekh",
    alternateName: "HP",
    jobTitle: "Full-Stack Web Developer & AI Enthusiast",
    description:
      "BCA student at CVM University with expertise in Full-Stack Web Development, AI applications, and relational database systems.",
    url: "https://github.com/Heet6162",
    sameAs: [
      "https://github.com/Heet6162",
      "https://linkedin.com/in/hit-parekh-a34b6031b",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anand",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "CVM University",
    },
    knowsAbout: [
      "Full-Stack Development",
      "Next.js",
      "React",
      "FastAPI",
      "Google Gemini API",
      "Three.js",
      "MySQL",
      "PostgreSQL",
      "PHP",
      "TypeScript",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Inline script to prevent light/dark flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var t = localStorage.getItem('hp-theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
  } catch(e) { document.documentElement.setAttribute('data-theme', 'dark'); }
})();
          `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className="min-h-screen antialiased"
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <ThemeProvider>
          <CosmicUniverse />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
