**쿠키 안에서 "aaa"라는 key의 value값을 가져와 보는 방법!**

    const onClickGetCookie = () => {
        const aaa = document.cookie
            .split(";")
            .filter((el) => el.startsWith("aaa="))[0]

        const result = aaa.replace("aaa=", "")
        console.log(result)
    }

## 1.쿠키에 저장해보기
    const onClickCookies = () =>{
        document.cookie = "aaa=철수"
    }

## 2.쿠키 조회해보기
    const onClickGetCookies = () => {
        const mycookie = document.cookie;
        console.log(mycookie)
    }

## 3.로컬스토리지에 저장해보기 (근데 얘는 어플리케이션에 안 보인다잉?)
    const onClickStorage = () => {
       localStorage.setItem("bbb", "영희");
        console.log("로컬")
    }


## 4.로컬스토리지에 조회해보기 (console.log에 적으면 "영희"라고 나온다.)
    const onClickGetLocal = () => {
        const bbb = localStorage.getItem("bbb");
        console.log(bbb);
      };


## 5.세션 스토리지 저장해보기
const onClickSaveSession = () => {
  sessionStorage.setItem("ccc", "훈이");
};


## 6.세션 스토리지 조회해보기
const onClickGetSession = () => {
  const ccc = sessionStorage.getItem("ccc");
  console.log(ccc);
};
