import { useEffect, useRef, useState } from "react"

export default function TestPage() {

    const [count, setCount] = useState(1);

    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        console.log( "렌더링 수 :" ,renderCount)
    })
    
    return(
        <div>
            <div>count : {count}</div>
            <button onClick={() => setCount(count+1)}>올려!</button>
        </div>
    )
}