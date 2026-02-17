import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [],

  addTask: (task) => {
    const { tasks } = useTasksStore.getState();

    const newTask = {
      id: Date.now(),
      ...task,
      createdAt: new Date(Date.now()).toISOString().split("T")[0],
      isDone: false,
    };

    set({ tasks: [...tasks, newTask] });
    console.log(newTask);
  },
}));
