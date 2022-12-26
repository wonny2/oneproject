import { useRouter } from 'next/router'
import * as H from './header.styles'
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN , LOG_OUT_USER} from './header.queries';
import { useState } from 'react';
import { Badge } from 'antd';

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
    
    const MoveToBaskets = () => {
        router.push('/boards/baskets')
    }

    const Logout = async () => {
        try{
            await logoutUser()
            location.reload()
        } catch(error) {
            if(error instanceof Error){
                console.log(error.message)
            }
        }
    };

    const [show, setShow] = useState(true);


    return(
        <H.Wrapper>
            <H.TitleWrap>
                <H.LogoIcon src= '/images/icon.png' onClick={MoveToHome}/>
                <H.LogPart>
                    {!data
                        ? <H.Title onClick={MoveToLogin}>로그인</H.Title>
                        : <H.Title onClick={Logout}>{data.fetchUserLoggedIn.name}님 <br/>로그아웃</H.Title>
                    }
                    {!data
                        ? <H.Title onClick={MoveToSignUp}>회원가입</H.Title>
                        :
                        <H.BasketWrap>
                            <H.Title onClick={MoveToBaskets}>장바구니</H.Title>
                            <Badge count={show ? 2 : 0} />
                        </H.BasketWrap>
                        
                    }
                </H.LogPart>
            </H.TitleWrap>
        </H.Wrapper>
    )
};
