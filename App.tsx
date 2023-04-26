import { Estatisticas } from "@screens/Estatisticas";
import { Home } from "@screens/Home";
import { Criacao } from "@screens/Criacao";
import theme from "@theme/index";
import { StatusBar, ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, NunitoSans_400Regular, NunitoSans_600SemiBold } from "@expo-google-fonts/nunito-sans";
import { Feedback } from "@screens/Feedback";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_600SemiBold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Feedback /> : <ActivityIndicator />}
      {/* <Estatisticas /> */}
    </ThemeProvider>
  );
}
