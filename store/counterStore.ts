import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CounterStore {
    count: number;
    increment: () => void;
    decrement: () => void;
    incrementBy: (value: number ) => void;
    reset: () => void;
}

const useCounterStore = create<CounterStore>()(
    persist(
    (set)=>({

    count:0,

    increment: ()=>{
        set((state)=> ({count: state.count + 1}))
    },
    
    decrement: () => {
        set((state) => ({count: state.count -1}))
    },

    incrementBy:(value) => {
        set((state) => ({count : state.count + value}))
    },

    reset:()=>{
        set((state) => ({ count:0}))
    }
 
}),{
    name:"counter",
    storage: createJSONStorage(()=> sessionStorage)
})

)

export default useCounterStore;