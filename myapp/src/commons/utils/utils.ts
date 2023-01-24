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

export const checkFile = (file:File) => {
    
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

export const getDate = (value:any) => {
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


export function getMonthDay(value:any) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${month}/${day}`;
};

// 이메일 유효 검사
export const checkEmail = (email: string) => {
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regEmail.test(email);
  };
  
  // 영어 + 숫자 8자리 이상 비밀번호 유효 검사
  export const checkPassword = (password: string) => {
    const regPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
    return regPassword.test(password);
  };




// 오름차순 = 최신순
// export const New = (value) => {

//     const newDate = value.sort((a,b) => 
//         new Date(a.date) - new Date(b.date)
//     )

//     return newDate;


//     // const newDate = value.sort((a:any,b:any) => 
//     //     new Date(a.date).getTime() - new Date(b.date).getTime()
//     // )
//     // return newDate;
// };


// // 오름차순 = 최신순
// export const Old = (value) => {

//     const oldDate = value.sort((a,b) => 
//         new Date(b.createdAt) - new Date(a.createdAt)
//     )

//     return oldDate;

    
//     // const newDate = value.sort((a:any,b:any) => 
//     //     new Date(a.date).getTime() - new Date(b.date).getTime()
//     // )
//     // return newDate;
// };

// 내림차순 = 오래된 순
// export const Old = (value:any) => {
//     const oldDate = value.sort((a:any,b:any) => 
//         new Date(a.date).getTime() - new Date(b.date).getTime()
//     ).
// }




export function timeForToday(value: any) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
};

export const Color = {
    colors: {
        white: "#fff",
        green: "rgba(30, 130, 76)",
        lightGreen: "rgba(107, 182, 142)",
        green1: "#a3d5a3"
    }
}

export const FontList = {
    // fonts: {
    //     first: `@font-face {
    //                 font-family: 'KyoboHandwriting2021sjy';
    //                 src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KyoboHandwriting2021sjy.woff2') format('woff2');
    //                 font-weight: normal;
    //                 font-style: normal;}`,
    // }
    fonts: [
       ` @font-face {
        font-family: 'KyoboHandwriting2021sjy';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KyoboHandwriting2021sjy.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
        }`,
        `@font-face {
            font-family: "EarlyFontDiary";
            src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EarlyFontDiary.woff2")
              format("woff2");
            font-weight: normal;
            font-style: normal;
          }`
    ]
    };