import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilState } from "recoil";
import { accessTokenState } from "../atom";

export const withAuth = (Component:any) => (props:any) => {

    // 이 부분에서는 권한검증 로직을 실행
    const router = useRouter();
    const [accessToken] = useRecoilState(accessTokenState)

        useEffect(() => {
            if(!accessToken){
                alert("로그인 후 볼 수 있습니다.")
                router.push('/boards/login')
            }
        },[])

    return <Component {...props} />
};