"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCounterStore from "@/store/counterStore";
import React, { useState } from "react";

const Counter = () => {
  // 2 Ways tp use
  /* 
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset); 
  const incrementBy = useCounterStore((state) => state.incrementBy);
  
*/

  const { count, increment, decrement, incrementBy, reset } = useCounterStore();
  const [inputCount, setinputCount] = useState<number>(0);

  const addCount = () => {
    incrementBy(inputCount);
  };

  return (
    <div className="flex  flex-col gap-10 justify-center items-center mt-[20vh]">
      <h2 className="text-2xl bg-amber-300 w-[80vw] md:w-[20vw] text-center py-2 rounded-2xl">
        Count: {count}
      </h2>

      <div className="flex flex-col gap-4">
        <Button className="w-[80vw] md:w-[20vw]" onClick={increment}>
          +
        </Button>
        <Button className="w-[80vw] md:w-[20vw]" onClick={decrement}>
          -
        </Button>
        <Button className="w-[80vw] md:w-[20vw]" onClick={reset}>
          Reset
        </Button>

        <Input
          type="number"
          value={inputCount ?? ""}
          onChange={(e) => setinputCount(Number(e.target.value))}
          placeholder="Enter a Value"
        />

        <Button className="w-[80vw] md:w-[20vw]" onClick={addCount}>
          Add Count
        </Button>
      </div>
    </div>
  );
};

export default Counter;
