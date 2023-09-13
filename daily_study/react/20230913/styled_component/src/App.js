import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"

//태그드 템플릿 리터럴 기법
const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
.box {
  background: red;
}
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example/>
    </>
  );
}

export default App;