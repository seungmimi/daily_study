import styled, {css} from "styled-components"

export const BasicInput = styled.input`
  height: 60px;
  padding: 0 5px;
  background: #fff;
  color: #000;
  border-bottom: 1px solid #C4C4C4;
  &::placeholder {
    color: #767676;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #21BF48;
  }
  /*fullwidth: width 100% 버튼일 경우*/
  ${(props) =>
    props.$fullwidth &&
    css`
      width: 100%;
    `
  }
`
export const LabelInput = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #C4C4C4;
  ${BasicInput} {
    border-radius: 5px;
    border: 1px solid #C4C4C4;
    height: 54px;
    &:focus {
    outline: 2px solid #21BF48;
    }
  }
`

export const LabelIconInput = styled(LabelInput)`
  ${BasicInput} {
    padding-right: 50px;
  }
`