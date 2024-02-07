import { useEffect } from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

    const handlecount = () => {
        setCount((c) => c + 1)
    }
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={handlecount}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
}

export default Counter;