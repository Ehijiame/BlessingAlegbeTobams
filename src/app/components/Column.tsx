"use client";

import React from "react";
import type { Task } from "./Board";

export default function Column({
  title,
  tasks,
}: {
  title: string;
  tasks: Task[];
}): React.ReactElement {
  return (
    <div className="flex-1 bg-transparent">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          {title} ({tasks.length})
        </h2>
        <button className="text-xs text-gray-500 dark:text-gray-400">
          + Add new task
        </button>
      </div>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm"
          >
            {/* Title & menu */}
            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {task.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {task.project}
                </div>
              </div>
              <button className="text-gray-400 dark:text-gray-500">⋯</button>
            </div>

            {/* Progress */}
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Progress
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(task.progress / task.total) * 100}%`,
                    backgroundColor: task.color,
                  }}
                />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {task.progress}/{task.total}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3 flex items-center justify-between">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  task.color === "green"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : task.color === "red"
                    ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                }`}
              >
                {task.due}
              </span>

              <div className="flex items-center gap-2">
                {/* Avatars */}
                {task.assignees &&
                  task.assignees.slice(0, 2).map((a, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-200"
                    >
                      {a}
                    </div>
                  ))}
                {task.assignees && task.assignees.length > 2 && (
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs text-gray-700 dark:text-gray-200">
                    +{task.assignees.length - 2}
                  </div>
                )}
                {/* icons */}
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <span>💬</span>
                  <span>2</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <span>📎</span>
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Empty drag slot */}
        {tasks.length === 0 && (
          <div className="p-4 border border-dashed border-gray-300 dark:border-gray-600 text-sm text-gray-400 dark:text-gray-500 rounded-xl text-center">
            Drag your task here…
          </div>
        )}
      </div>
    </div>
  );
}
