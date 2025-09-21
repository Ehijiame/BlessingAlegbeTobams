// app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Kanban Board",
  description: "Kanban-style project board with dark/light themes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
