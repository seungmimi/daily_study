import styled, {css} from "styled-components"

const BasicBtn = styled.button`
height: 60px;
font-family: 'Spoqa Han Sans Neo-Bold';
font-size: 18px;
background: #21BF48;
border-radius: 5px;
color: #fff;
padding: 19px 0;
text-align: center;
&:disabled {
  background: #C4C4C4;
}

/*dark: 어두운 버튼*/
${(props) =>
  props.$dark &&
  css`
    background: #767676;
  `
}

/*white: 밝은 버튼*/
${(props) =>
  props.$white &&
  css`
    background: #fff;
    color: #767676;
    border: 1px solid #C4C4C4;
    &:hover {
      color: #000;
      border: 1px solid #767676;
    }
  `
}

/*fullwidth: width 100% 버튼일 경우*/
${(props) =>
  props.$fullwidth &&
  css`
    width: 100%;
  `
}

/*textL: 텍스트 크기*/
${(props) => 
props.$textL &&
  css`
    height: 68px;
    font-size: 24px;
  `
}

/*textMs: 텍스트 크기*/
${(props) => 
props.$textMs &&
  css`
    font-family: 'Spoqa Han Sans Neo-Medium';
    height: 54px;
    font-size: 16px;
  `
}

/*textS: 텍스트 크기*/
${(props) => 
props.$textS &&
  css`
    font-family: 'Spoqa Han Sans Neo-Medium';
    padding: 10px 0;
    height: 40px;
    font-size: 16px;
  `
}

`

export default BasicBtn
