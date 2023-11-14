import styled from "styled-components"

const InfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  h3 {
    margin-bottom: 20px;
    padding: 10px 30px;
    width: fit-content;
    align-self: center;
    font-family: "Pretendard-Bold";
    font-size: 20px;
    border-bottom: 2px solid #1F1F1F;
  }
  label {
    text-align: left;
    display: flex;
    flex-direction: column;
    color: #29363D;
    font-size: 14px;
  }
  input {
    margin-top: 8px;
    padding: 0 10px;
    height: 48px;
    background-color: #fff;
    border-radius: 4px 4px 0px 0px;
    border-bottom: 1px solid #29363D;
    color: #29363D;
    font-size: 18px;
    &::placeholder {
      font-size: 14px;
      color: #999;
    }
    &:focus {
      outline: 2px solid #29363D; 
    }
  }
`

export default InfoForm
