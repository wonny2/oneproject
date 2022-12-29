import { Button,message } from "antd";
import { useEffect, useRef, useState } from "react"
import 'antd/dist/reset.css';



export default function TestPage() {
    const [messageApi, contextHolder] = message.useMessage();
    
    const [count, setCount] = useState(1);

    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        console.log( "렌더링 수 :" ,renderCount)
    },[])


    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'This is a success message',
        });
      };

    
    return(
        <div>
            <div>count : {count}</div>
            <Button onClick={success}>올려!</Button>
        </div>
    )
}