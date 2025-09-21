"use client";

import React, { useState } from "react";
import Sidebar from "../app/components/Sidebar";
import Header from "../app/components/Header";
import MenuBar from "../app/Menu";
import Board, { Task } from "../app/components/Board";

// 👇 initial tasks
const initialTasks: {
  todo: Task[];
  inprogress: Task[];
  done: Task[];
} = {
  todo: [
    {
      id: "t1",
      title: "Design new UI presentation",
      project: "Dribbble marketing",
      progress: 7,
      total: 10,
      due: "2022-08-24",
      color: "orange",
      assignees: ["VH", "AL"],
    },
    {
      id: "t2",
      title: "Add more ui/ux mockups",
      project: "Pinterest promotion",
      progress: 4,
      total: 10,
      due: "2022-08-25",
      color: "orange",
      assignees: ["JM"],
    },
    {
      id: "t3",
      title: "Design few mobile screens",
      project: "Dropbox mobile app",
      progress: 3,
      total: 10,
      due: "2022-08-27",
      color: "orange",
      assignees: ["AM"],
    },
    {
      id: "t4",
      title: "Create a tweet and promote",
      project: "Twitter marketing",
      progress: 1,
      total: 10,
      due: "2022-08-29",
      color: "red",
      assignees: ["JS", "PW"],
    },
  ],
  inprogress: [
    {
      id: "ip1",
      title: "Design system update",
      project: "Oreo website project",
      progress: 3,
      total: 10,
      due: "2022-11-12",
      color: "red",
      assignees: ["VC", "+2"],
    },
    {
      id: "ip2",
      title: "Create brand guideline",
      project: "Oreo branding project",
      progress: 7,
      total: 10,
      due: "2022-11-13",
      color: "orange",
      assignees: ["NB"],
    },
    {
      id: "ip3",
      title: "Create wireframe for ios app",
      project: "Oreo ios app project",
      progress: 5,
      total: 10,
      due: "2022-11-15",
      color: "orange",
      assignees: ["AD", "RS"],
    },
      {
      id: "d4",
      title: "Create ui kit for layout",
      project: "Crypto mobile app ",
      progress: 3,
      total: 10,
      due: "2022-15-11",
      color: "red",
      assignees: ["VL"],
    },
  ],
  done: [
    {
      id: "d1",
      title: "Add product to the market",
      project: "UI8 marketplace",
      progress: 10,
      total: 10,
      due: "2022-01-06",
      color: "green",
      assignees: ["MK"],
    },
    {
      id: "d2",
      title: "Launch product promotion",
      project: "Kickstarter campaign",
      progress: 10,
      total: 10,
      due: "2022-01-07",
      color: "green",
      assignees: ["KS", "TR"],
    },
    {
      id: "d3",
      title: "Make twitter banner",
      project: "Twitter marketing",
      progress: 10,
      total: 10,
      due: "2022-01-10",
      color: "green",
      assignees: ["VL"],
    },
     
  ],
};

export default function Page(): React.ReactElement {
  const [data, setData] = useState(initialTasks);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <MenuBar />
        <Board data={data} setData={setData} />
      </div>
    </div>
  );
}
