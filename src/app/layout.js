import "./globals.css";

export const metadata = {
  title: "Global carnival Jeddah - Discover the World in One Place",
  description: "Step into a world of wonder, color, and culture at Global carnival Jeddah, a one-of-a-kind destination bringing the magic of global traditions, flavors, and festivals to the heart of our vibrant city.",
  keywords: "Global carnival Jeddah, cultural destination, global traditions, festivals, attractions, events, dining, shopping",
  authors: [{ name: "Global carnival Jeddah" }],
  openGraph: {
    title: "Global carnival Jeddah - Discover the World in One Place",
    description: "Step into a world of wonder, color, and culture at Global carnival Jeddah",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global carnival Jeddah - Discover the World in One Place",
    description: "Step into a world of wonder, color, and culture at Global carnival Jeddah",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Oswald, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
