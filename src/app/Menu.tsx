"use client";

import React from "react";

export default function MenuBar(): React.ReactElement {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm">
      {/* left side */}
      <div className="flex items-center gap-6">
        <div className="font-medium text-gray-900 dark:text-gray-100">
          Board view
        </div>
        <button className="text-gray-500 dark:text-gray-400">Add view</button>
      </div>

      {/* right side */}
      <div className="flex items-center gap-4">
        <button className="text-gray-500 dark:text-gray-400">Filter</button>
        <button className="text-gray-500 dark:text-gray-400">Sort</button>
        <button className="text-gray-500 dark:text-gray-400">…</button>
        <button className="px-3 py-2 bg-indigo-600 text-white rounded">
          New template
        </button>
      </div>
    </div>
  );
}
