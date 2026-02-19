import toast from "react-hot-toast";
import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      deadline: "2022-01-01",
      developer: "Developer 1",
      createdAt: "2022-01-01",
      isDone: true,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      deadline: "2022-01-02",
      developer: "Developer 2",
      createdAt: "2022-01-02",
      isDone: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      deadline: "2022-01-03",
      developer: "Developer 3",
      createdAt: "2022-01-03",
      isDone: false,
    },
  ],

  getTaskById: (id) => {
    const { tasks } = useTasksStore.getState();
    return tasks.find((task) => task.id === id);
  },

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
  
  updatedTask: (updatedTask) => {
    // Тут має бути функція
   },

  deleteTask: (id) => {
    const { tasks } = useTasksStore.getState();
    const updatedTasks = tasks.filter((task) => task.id !== id);
    toast.success("Task deleted successfully!");
    set({ tasks: updatedTasks });
  },
}));
