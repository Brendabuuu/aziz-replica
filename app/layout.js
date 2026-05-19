import "./globals.css";

export const metadata = {
  title: "Aziz Khaldi | Software Engineer Portfolio",
  description:
    "Explore Aziz Khaldi's portfolio showcasing innovative software engineering projects, UI/UX designs, and creative web solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
