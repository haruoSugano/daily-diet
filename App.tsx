import { Estatisticas } from "@screens/Estatisticas";
import { Home } from "@screens/Home";
import theme from "@theme/index";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
      {/* <Estatisticas /> */}
    </ThemeProvider>
  );
}

