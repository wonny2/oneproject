import { Color, FontList } from './../../../commons/utils/utils';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import 'animate.css';

const Fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity:1;
  }
`;



export const Wrapper = styled.div`
  width:100%;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  animation: ${Fade} 2s;

	*{
    	font-family: "EarlyFontDiary";
	}

	${FontList.fonts[1]}

`

export const WholeWrapFirst = styled.div`
	width:100%;
  	height: 100vh;
  	display:flex;
  	flex-direction: column;
	position: relative;
	z-index: 1;
	
	::after {
		content: "";
		width:100%;
		height:100%;
		background: url('/images/help1.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		opacity: 0.65;
		z-index: -1;
		position: absolute;
		top: 0;
  		left: 0;
	}
`

export const WholeWrapSecond = styled.div`
	width:100%;
  	height: 100vh;
  	display:flex;
  	flex-direction: column;
	position: relative;
	z-index: 1;
	
	::after {
		content: "";
		width:100%;
		height:100%;
		background: url('/images/help2.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		opacity: 0.65;
		z-index: -1;
		position: absolute;
		top: 0;
  		left: 0;
	}
`

export const WholeWrapThird = styled.div`
	width:100%;
  	height: 100vh;
  	display:flex;
  	flex-direction: column;
	align-items:center;
	justify-content:center;
	position: relative;
	z-index: 1;
	
	::after {
		content: "";
		width:100%;
		height:100%;
		background: url('/images/help6.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		opacity: 0.65;
		z-index: -1;
		position: absolute;
		top: 0;
  		left: 0;
	}
`

export const ThirdImg = styled.img`
	height:100%;
	opacity: 0.75;
`

export const Wrap = styled.div`
	display:flex;
	flex-direction:row;
	align-items: center;
	height:100%;
	/* border: 1px solid black; */
`

export const ColumnWrap = styled.div`
	display:flex;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	background-color: rgba(228, 240, 197, 0.4);
	border-radius: 200px;
	padding: 20px 0;
	width: 23rem;
	height: 22rem;
`


export const ContentsWrap = styled.div`
	width: 40%;
  	display:flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items:center;
  	font-size: 30px;

	.isActive {
    	animation: bounceIn;
    	animation-duration: 2s;
  };
`

export const H1 = styled.h1`
	font-size: 45px;
	font-weight: 500;
	text-align:center;
`

export const Bold = styled.div`
	font-size: 100px;
	border-bottom: 10px double ${Color.colors.blue};
`


export const Img = styled.img`	
	width:60%;
	height: 70vh;
	object-fit: cover;
	box-shadow: 5px 0px 5px -2px  gray;

	.isActive {
    	animation: fadeInLeft;
    	animation-duration: 2s;
  }
`

export const ScrollWrap = styled.a`
	display:flex;
	flex-direction:column;
	align-items:center;
	position: relative;
	bottom: -85%;
	font-weight: 800;
`

export const Text = styled.div`
  font-size: 18px;
  color: ${Color.colors.blue};
`


export const Scroll = styled.div`
	width: 35px;
	height: 70px;
	border: 2px solid ${Color.colors.blue};
	border-radius: 60px;
	position: relative;

	&::before {
		content: '';
		width: 12px;
		height: 12px;
		position: absolute;
		top: 8px;
		left: 50%;
		transform: translateX(-50%);
		background-color: ${Color.colors.blue};
		border-radius: 50%;
		opacity: 1;
		animation: wheel 2s infinite;
		-webkit-animation: wheel 2s infinite;
	}


	@keyframes wheel {
		to {
			opacity: 0;
			top: 50px;
		}
	}
`

export const Arrow = styled.div`
	width: 30px;
	height: 30px;
	position: relative;
	animation: down 2s infinite;
	-webkit-animation: down 2s infinite;  

	&::before {
		content: '';
		position: absolute;
		left: 25%;
		width: 15px;
		height: 15px;
		border-left: 1px solid ${Color.colors.blue};
  		border-bottom: 1px solid ${Color.colors.blue};
		transform: rotate(-45deg);
	}


	@keyframes down {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translateY(15px);
		}
		40% {
			transform: translate(0);
		}
	}
`

export const Linear = styled.img`
  /* position: absolute;
  bottom: 12%;
  left: -47%;
  z-index: -1; */
  animation: rotation3 15s linear infinite;

  @keyframes rotation3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
}
`;

export const ThirdContentsWrap = styled.div`
	display:flex;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	width: 900px;
`


export const Button = styled.div`
	width:300px;
	height:50px;
	line-height: 50px;
	text-align:center;
    background: linear-gradient(-45deg, #33ccff 0%, #ff99cc 100%);
    color: white;
    background-size: 400% 400%;
    animation: gradient1 3s ease infinite;
	position: relative;
    border: none;
    display: inline-block;
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;

	:hover::after {
		letter-spacing: 4px;
    	cursor: pointer;
		content: "";
		width: 30px;
		height: 30px;
		border-radius: 100%;
		border: 3px solid white;
		position: absolute;
		z-index: 1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: ring 2s ease infinite;
	};

	@keyframes gradient1 {
		0% {
        	background-position: 0% 50%;
    }
    	50% {
        	background-position: 100% 50%;
    }
    	100% {
        	background-position: 0% 50%;
    }
};

	@keyframes ring {
		0% {
        width: 30px;
        height: 30px;
        opacity: 1;
    }
    	100% {
        width: 300px;
        height: 300px;
        opacity: 0;
    }
}
`
