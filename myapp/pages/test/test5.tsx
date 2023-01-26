import { useEffect, useState } from "react"

export default function Text5() {

    const [scrollPosition, SetScrollPosition] = useState(0);

    const onScroll = () => {
        SetScrollPosition(window.scrollY)
        console.log(scrollPosition)
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    },[]) 
    
    return(
        <>
            
        </>
    )
}