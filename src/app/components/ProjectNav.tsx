// components/ProjectNav.tsx
import React from "react";

export default function ProjectNav() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Projects</h2>
      <ul className="space-y-2 text-sm text-gray-300">
        <li className="flex items-center justify-between"><span>All projects</span><span className="text-xs text-gray-400">3</span></li>
        <li className="px-2 py-1 rounded-md bg-gray-700">Design system</li>
        <li className="px-2 py-1">User flow</li>
        <li className="px-2 py-1">UX research</li>
      </ul>

      <h3 className="text-sm font-medium mt-6 mb-2 text-gray-400">Tasks</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>All tasks (11)</li>
        <li>To do (4)</li>
        <li className="font-semibold">In progress (4)</li>
        <li>Done (3)</li>
      </ul>
    </div>
  );
}
