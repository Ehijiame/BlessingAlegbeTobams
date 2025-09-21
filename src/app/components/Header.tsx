"use client";

import React from "react";

export default function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      {/* left greeting */}
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Welcome back, Vincent 👋
      </h1>

      {/* right icons */}
      <div className="flex items-center gap-4 text-gray-500 dark:text-gray-300">
        <button aria-label="Search">🔍</button>
        <button aria-label="Notifications">🔔</button>
        <div className="flex items-center gap-2">
          <span>19 May 2022</span>
          <img
            src="/avatar.jpg" // replace with your avatar path
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
