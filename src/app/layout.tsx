import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Nav from "../components/nav";
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Lumora Home V1 - Webflow HTML website template",
  description: "Lumora is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
  openGraph: {
    title: "Lumora Home V1 - Webflow HTML website template",
    description: "Lumora is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
    images: ["https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68c89b789a0f282a98136545_Ophen%20Graph.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumora Home V1 - Webflow HTML website template",
    description: "Lumora is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
    images: ["https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68c89b789a0f282a98136545_Ophen%20Graph.webp"],
  },
  icons: {
    icon: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a4535765980c07e93225b_Group%202942.png",
    apple: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a45115482c06bb38d0091_Group%202940.png",
  },
  other: {
    generator: "Webflow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/css/lumora-template.webflow.shared.4103d3182.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" strategy="beforeInteractive" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CInter:regular,600"
          media="all"
        />
        <Script id="webfont-loader" strategy="beforeInteractive">
          {`WebFont.load({ google: { families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Inter:regular,600"] } });`}
        </Script>
        <Script id="modernizr" strategy="beforeInteractive">
          {`!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);`}
        </Script>
      </head>
      <body>
        <div className="page-wrapper">
          <Nav />
          <main className="main-wrapper">
            {children}
            <Footer />
          </main>
        </div>
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=689e106364c67d5b5a78fbf4"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/js/webflow.schunk.36b8fb49256177c8.js" strategy="afterInteractive" />
        <Script src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/js/webflow.schunk.4866a9abdcad713f.js" strategy="afterInteractive" />
        <Script src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/js/webflow.c1e517dc.a12bfdc7474ad36d.js" strategy="afterInteractive" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.14.2/gsap.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.14.2/SplitText.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
