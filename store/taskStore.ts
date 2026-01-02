import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export interface Task {
  id: string;
  title: string;
  tillDay: Day;
  completed: boolean;
}

interface TaskStore {
  tasks: Task[];

  addTask: (title: string, tillDay: Task["tillDay"]) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;

  totalTasks: () => number;
  completedTasks: () => number;
}

const useTaskStore = create<TaskStore>()(persist
(  
  (set, get) => ({

  tasks: [],

  addTask: (title, tillDay) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      tillDay,
      completed: false,
    };

    set({
      tasks: [...get().tasks, newTask]
    })
  },

  toggleTask: (id) => {

    set({
      tasks: get().tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )

    })
  },

  removeTask: (id) => {

    set({
      tasks: get().tasks.filter((task) => task.id !== id),
    })
  },

  totalTasks: () => get().tasks.length,

  completedTasks: () =>
    get().tasks.filter((task) => task.completed).length,


}),{
  name:"tasks-storage"
})

)

export default useTaskStore;



