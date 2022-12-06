// 이미지 검증

// export const checkFile = (file?: File) => {
    
//     if(!file) {
//         alert("파일이 존재하지 않습니다.")
//         return false;
//     };

//     if(file?.size > 5 * 1024 * 1024) {
//         alert("파일 용량이 너무 큽니다. (제한: 5MB)")
//         return false;
//     }

//     if(!file.type.includes("png") && !file.type.includes("jpeg")) {
//         alert("png 또는 jpeg 파일만 업로드 가능합니다.")
//         return false;
//     }

//     return true;
// };

export const checkFile = (file) => {
    
    if(!file) {
        alert("파일이 존재하지 않습니다.")
        return false;
    };

    if(file?.size > 5 * 1024 * 1024) {
        alert("파일 용량이 너무 큽니다. (제한: 5MB)")
        return false;
    }

    if(!file.type.includes("png") && !file.type.includes("jpeg")) {
        alert("png 또는 jpeg 파일만 업로드 가능합니다.")
        return false;
    }

    return true;
};

export const getDate = (value) => {
    const date = new Date(value)
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, "0")
    const dd = String(date.getDate()).padStart(2, "0")
    return `${yyyy}-${mm}-${dd}`
};


// export const getDate = (value:string) => {
//     const date = new Date(value)
//     const yyyy = date.getFullYear()
//     const mm = String(date.getMonth() + 1).padStart(2, "0")
//     const dd = String(date.getDate()).padStart(2, "0")
//     return `${yyyy}-${mm}-${dd}`
// };


export function getMonthDay() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${month}/${day}`;
};


// 오름차순 = 최신순
export const New = (value) => {

    const newDate = value.sort((a,b) => 
        new Date(a.date) - new Date(b.date)
    )

    return newDate;


    // const newDate = value.sort((a:any,b:any) => 
    //     new Date(a.date).getTime() - new Date(b.date).getTime()
    // )
    // return newDate;
};


// 오름차순 = 최신순
export const Old = (value) => {

    const oldDate = value.sort((a,b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
    )

    return oldDate;

    
    // const newDate = value.sort((a:any,b:any) => 
    //     new Date(a.date).getTime() - new Date(b.date).getTime()
    // )
    // return newDate;
};

// 내림차순 = 오래된 순
// export const Old = (value:any) => {
//     const oldDate = value.sort((a:any,b:any) => 
//         new Date(a.date).getTime() - new Date(b.date).getTime()
//     ).
// }