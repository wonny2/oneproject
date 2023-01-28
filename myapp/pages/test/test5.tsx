import Test6  from "./test6"


export default function Text5() {

    const arr = [
        {
            title : "first",
            age: 1
        },
        {
            title: "second",
            age: 2,
        },
        {
            title : "third",
            age : 3
        },
        {
            "title":"fourth",
            "age":4,
        }
    ];

    return(
        <>
            {arr.map((el,i) => (
                <Test6 {...el} key={i} />
                // <div key={i}>
                //     <div>{el.title}</div>
                //     <div>{el.age}</div>
                // </div>
            ))}
        </>
    )
};