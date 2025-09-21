"use client";

import React from "react";
import Column from "./Column";

export type Task = {
  id: string;
  title: string;
  project?: string;
  progress: number;   // current steps
  total: number;      // total steps for progress bar
  due?: string;
  color: string;      // color indicator for progress bar
  assignees?: string[];
};

type BoardProps = {
  data: {
    todo: Task[];
    inprogress: Task[];
    done: Task[];
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      todo: Task[];
      inprogress: Task[];
      done: Task[];
    }>
  >;
};

export default function Board({ data, setData }: BoardProps): React.ReactElement {
  return (
    <main className="flex flex-1 bg-gray-50 dark:bg-gray-900 p-6 gap-6 overflow-auto">
      <Column title="To Do" tasks={data.todo} />
      <Column title="In Progress" tasks={data.inprogress} />
      <Column title="Done" tasks={data.done} />
    </main>
  );
}
