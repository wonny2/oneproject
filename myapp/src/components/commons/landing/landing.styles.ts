import { Color, FontList } from './../../../commons/utils/utils';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";


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
  flex-direction: column;
  justify-content: space-between;
  animation: ${Fade} 2s;

	*{
    	font-family: "EarlyFontDiary";
	}

	${FontList.fonts[1]}

`

export const WholeWrap = styled.div`
	width:100%;
  	height: 100vh;
  	display:flex;
  	flex-direction: column;
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
  	color: ${Color.colors.lightGreen};

	.isActive {
    	animation: fadeInDown;
    	animation-duration: 2s;
  }
`

export const H1 = styled.h1`
	font-size: 45px;
	font-weight: 500;
	text-align:center;
`

export const Bold = styled.div`
	font-size: 100px;
	border-bottom: 10px double ${Color.colors.green};
`


export const Img = styled.img`	
	width:60%;
	height: 70vh;
	object-fit: cover;
	box-shadow: 5px 0px 5px -2px  gray;
`

export const ScrollWrap = styled.a`
	display:flex;
	flex-direction:column;
	align-items:center;
	position: relative;
	/* top: -150px; */
	font-weight: 800;
	height: 160px;
`

export const Text = styled.div`
  font-size: 18px;
  color: ${Color.colors.green};
`


export const Scroll = styled.div`
	width: 33px;
	height: 60px;
	border: 2px solid ${Color.colors.green};
	border-radius: 60px;

	&::before {
		content: '';
		width: 12px;
		height: 12px;
		position: absolute;
		top: 25px;
		left: 50%;
		transform: translateX(-50%);
		background-color: ${Color.colors.green};
		border-radius: 50%;
		opacity: 1;
		animation: wheel 2s infinite;
		-webkit-animation: wheel 2s infinite;
	}


@keyframes wheel {
	to {
		opacity: 0;
		top: 60px;
	}
}

@-webkit-keyframes wheel {
	to {
		opacity: 0;
		top: 60px;
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
		border-left: 1px solid ${Color.colors.lightGreen};
  		border-bottom: 1px solid ${Color.colors.lightGreen};
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

@-webkit-keyframes down {
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