"use client";

type TaskCardProps = {
  title: string;
  project: string;
  progress: number;
  total: number;
  due: string;
  color: "red" | "orange" | "green" | "blue";
};

export default function TaskCard({
  title,
  project,
  progress,
  total,
  due,
  color,
}: TaskCardProps) {
  const colors = {
    red: "bg-red-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-2">
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500">{project}</p>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded">
        <div
          className={`${colors[color]} h-2 rounded`}
          style={{ width: `${(progress / total) * 100}%` }}
        />
      </div>
      <p className="text-xs text-gray-500">{progress}/{total}</p>
      <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
        {due}
      </span>
    </div>
  );
}
