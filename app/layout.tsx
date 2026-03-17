// Root server layout: applies global styles and mounts client-only ErrorReporter.
import type { Metadata } from "next";
import Script from "next/script";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import ErrorReporter from "../components/ErrorReporter";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "LeadSync - Minimal CRM Next.js Starter",
  description: "LeadSync — A lightweight, production-grade Next.js boilerplate for internal CRM projects. Modern stack, ready-to-extend, no backend or auth bundled.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}
    >
      <head>
        <Script
          src="https://bfwqdadlcyndtaqmqtci.supabase.co/storage/v1/object/public/pandajs/panda-element-selection.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://bfwqdadlcyndtaqmqtci.supabase.co/storage/v1/object/public/pandajs/panda-branding.js"
          strategy="afterInteractive"
        />
        <meta name="theme-color" content="#172836" />
        <meta name="title" content="LeadSync - Minimal CRM Next.js Starter" />
        <meta
          name="description"
          content="LeadSync — A lightweight, production-grade Next.js boilerplate for internal CRM projects. Modern stack, ready-to-extend, no backend or auth bundled."
        />
        <meta property="og:title" content="LeadSync CRM Boilerplate" />
        <meta
          property="og:description"
          content="Launch your CRM fast with LeadSync — a modern Next.js starter, bulletproof design, zero lock-in, and room to evolve."
        />
        <meta property="og:url" content="https://leadsync.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeadSync" />
        {/* Place any favicon or manifest links here if needed */}
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ErrorReporter />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}