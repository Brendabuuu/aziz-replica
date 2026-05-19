import "./globals.css";

export const metadata = {
  title: "Brenda Pu | 卜晓冬 · Design Portfolio",
  description:
    "Brenda Pu（卜晓冬）的视觉设计作品集 — 12年品牌视觉与电商设计经验，专注视觉营销设计与产品界面设计。",
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
