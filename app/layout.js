import "./globals.css";

export const metadata = {
  title: "Brenda Pu | Design Portfolio",
  description:
    "Brenda Pu 的设计作品集 — 视觉设计与品牌创意",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
