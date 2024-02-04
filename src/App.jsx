import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";
import { FanLettersProvider } from './context/FanLettersContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <FanLettersProvider>
      <Router />
    </FanLettersProvider>
    </>
  );
}

export default App;
