"use client"

import React, { useState } from 'react';

interface Goal {
  id: number;
  title: string;
  isCompleted: boolean;
}

const Goals = () => {
  // Initialize the goals list
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, title: 'Complete portfolio redesign', isCompleted: false },
    { id: 2, title: 'Add new projects to portfolio', isCompleted: false },
    { id: 3, title: 'Fix bugs in client website', isCompleted: false },
    { id: 4, title: 'Learn React hooks', isCompleted: false },
    { id: 5, title: 'Start writing tech blog', isCompleted: false },
  ]);

  // State to handle new goal input
  const [newGoal, setNewGoal] = useState<string>('');

  // Toggle goal completion status
  const toggleGoalCompletion = (id: number) => {
    setGoals(prevGoals =>
      prevGoals.map(goal =>
        goal.id === id
          ? { ...goal, isCompleted: !goal.isCompleted }
          : goal
      )
    );
  };

  // Handle adding a new goal
  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([
        ...goals,
        { id: Date.now(), title: newGoal, isCompleted: false },
      ]);
      setNewGoal(''); // Clear input field
    }
  };

  // Handle editing a goal
  const editGoal = (id: number, newTitle: string) => {
    setGoals(prevGoals =>
      prevGoals.map(goal =>
        goal.id === id ? { ...goal, title: newTitle } : goal
      )
    );
  };

  // Handle deleting a goal
  const deleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-[#abc2d3]">
        My Goals
      </h2>

      {/* Input to add new goal */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Add a new goal"
          className="px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-[#abc2d3] focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
        />
        <button
          onClick={addGoal}
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Add
        </button>
      </div>

      {/* List of goals */}
      <ul className="space-y-4">
        {goals.map(goal => (
          <li
            key={goal.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md hover:shadow-lg transition ${
              goal.isCompleted
                ? 'bg-green-100 dark:bg-green-700'
                : 'bg-white dark:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={goal.isCompleted}
                onChange={() => toggleGoalCompletion(goal.id)}
                className="h-4 w-4 rounded text-indigo-500"
              />
              <span
                className={`font-medium text-gray-800 dark:text-white ${
                  goal.isCompleted ? 'line-through text-gray-500' : ''
                }`}
              >
                {goal.title}
              </span>
            </div>

            {/* Edit and Delete buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const newTitle = prompt('Edit Goal:', goal.title);
                  if (newTitle && newTitle.trim() !== goal.title) {
                    editGoal(goal.id, newTitle);
                  }
                }}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => deleteGoal(goal.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;