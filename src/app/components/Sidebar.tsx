"use client";

import React, { useEffect, useState } from "react";

export default function Sidebar(): React.ReactElement {
  const [dark, setDark] = useState(false);

  // apply Tailwind dark mode globally
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6 dark:text-white">Projects</h2>
        <nav className="space-y-6">
          <div>
            <p className="font-semibold text-gray-600 dark:text-gray-300">Projects</p>
            <ul className="ml-2 mt-2 space-y-2 text-gray-700 dark:text-gray-400">
              <li>All projects (3)</li>
              <li className="font-bold text-black dark:text-white">Design system</li>
              <li>User flow</li>
              <li>UX research</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-600 dark:text-gray-300">Tasks</p>
            <ul className="ml-2 mt-2 space-y-2 text-gray-700 dark:text-gray-400">
              <li>All tasks (11)</li>
              <li>To do (4)</li>
              <li className="font-bold text-black dark:text-white">In progress (4)</li>
              <li>Done (3)</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-gray-600 dark:text-gray-300">{dark ? "Dark" : "Light"}</span>
        <button
          onClick={() => setDark((d) => !d)}
          className={`px-3 py-1 rounded-full text-sm transition ${
            dark ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-800"
          }`}
        >
          {dark ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
    </aside>
  );
}
