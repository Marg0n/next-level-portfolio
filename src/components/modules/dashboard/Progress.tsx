"use client"

import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  progress: number; // Progress as a percentage (0 to 100)
}

const Progress = () => {
  // Initialize the tasks list with progress values
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Complete portfolio redesign', progress: 45 },
    { id: 2, title: 'Add new projects to portfolio', progress: 20 },
    { id: 3, title: 'Fix bugs in client website', progress: 75 },
    { id: 4, title: 'Learn React hooks', progress: 90 },
    { id: 5, title: 'Start writing tech blog', progress: 10 },
  ]);

  // Handle updating progress for a task
  const updateProgress = (id: number, newProgress: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, progress: Math.min(Math.max(newProgress, 0), 100) } // Keep progress between 0 and 100
          : task
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-[#abc2d3] mb-6">
        Task Progress
      </h2>

      {/* List of tasks with progress bars */}
      <ul className="space-y-4">
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex flex-col gap-2 p-4 rounded-lg shadow-md hover:shadow-lg transition bg-white dark:bg-slate-800"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800 dark:text-white">
                {task.title}
              </span>
              <span className="text-gray-500 dark:text-[#abc2d3]">
                {task.progress}%
              </span>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs font-semibold inline-block py-1 uppercase">
                  <span className="text-slate-600 dark:text-[#abc2d3]">
                    Progress
                  </span>
                </div>
                <div className="text-right text-xs font-semibold inline-block py-1 uppercase">
                  <span className="text-slate-600 dark:text-[#abc2d3]">
                    {task.progress}%
                  </span>
                </div>
              </div>
              <div className="flex mb-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-indigo-500 h-2.5 rounded-full"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Button to update progress */}
            <input
              type="range"
              min="0"
              max="100"
              value={task.progress}
              onChange={(e) =>
                updateProgress(task.id, Number(e.target.value))
              }
              className="w-full mt-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;