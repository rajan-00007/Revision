import { create } from "zustand";

interface CounterStore {
    count: number;
    increment: () => void;
    decrement: () => void;
    incrementBy: (value: number ) => void;
    reset: () => void;
}

const useCounterStore = create<CounterStore>((set)=>({

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
 
}))

export default useCounterStore;