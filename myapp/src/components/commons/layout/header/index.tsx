import { useRouter } from 'next/router'
import * as H from './header.styles'
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN , LOG_OUT_USER} from './header.queries';


export default function Header() {

    const {data} = useQuery(FETCH_USER_LOGGED_IN)
    const [logoutUser] = useMutation(LOG_OUT_USER)

    const router = useRouter();

    const MoveToHome = () => {
        router.push('/')
    }

    const MoveToLogin = () => {
        router.push(`/boards/login`)
    }

    const MoveToSignUp = () => {
        router.push('/boards/signup')
    }

    const Logout = async () => {
        try{
            await logoutUser()
            console.log("여기서 나는 것")
            location.reload()
        } catch(error) {
            if(error instanceof Error){
                console.log(error.message)
            }
        }
    };


    return(
        <H.Wrapper>
            <H.TitleWrap>
                <H.Title onClick={MoveToHome}>로고</H.Title>
                <H.LogPart>
                    {!data
                        ? <H.Title onClick={MoveToLogin}>로그인</H.Title>
                        : <H.Title onClick={Logout}>{data.fetchUserLoggedIn.name}님 <br/>로그아웃</H.Title>
                    }
                    <H.Title onClick={MoveToSignUp}>회원가입</H.Title>
                    </H.LogPart>
            </H.TitleWrap>
        </H.Wrapper>
    )
};
