import { MouseEvent } from "react"

export default function TestPage2() {
    
    const onClickBubble = (event: any) => {
        console.log(event.currentTarget)
        console.log(event.target)
    }
    
    return(
        <>
            <div onClick={onClickBubble}  id={"1"} style={{border: "3px solid black"}}>
                <button>확인</button> <br />
                <span>이벤트는 무엇?</span>
            </div>
        </>
    )
};