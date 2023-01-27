export default function Test6({title, age}:any) {
// 스프레드 연산자를 사용해야하는 이유
// 객체 구조 분해를 시용하면 함수 내부로 변수 영역을 한정시킬 수 있다. 즉 변수로 뽑아낼 수 있다.
// 이렇게 하면 직접 title과 age를 사용할 수 있고, props를 덧붙여야 하는 번거로움을 줄일 수 있다.

    return(
        <>
            <div>{title}</div>
            <div>{age}</div>
        </>
    )
}