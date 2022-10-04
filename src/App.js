import { ThemeProvider } from "styled-components";
import Header from "./Component/Header/Header";
import GlobalStyles from "./Styles/GlobalStyles";
import theme from './Styles/Theme/main';
import Main from "./Pages/Main/Main"







function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main/>
    </ThemeProvider>

  );
}

export default App;
