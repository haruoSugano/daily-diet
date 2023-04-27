import { Estatisticas } from "@screens/Estatisticas";
import { Home } from "@screens/Home";
import { Criacao } from "@screens/Criacao";
import { PositiveFeedback } from "@screens/PositiveFeedback";
import { NegativeFeedback } from "@screens/NegativeFeedback";
import theme from "@theme/index";
import { StatusBar, ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, NunitoSans_400Regular, NunitoSans_600SemiBold } from "@expo-google-fonts/nunito-sans";
import { Refeicao } from "@screens/Refeicao";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_600SemiBold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Refeicao /> : <ActivityIndicator />}
      {/* <Estatisticas /> */}
    </ThemeProvider>
  );
}
