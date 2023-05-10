import { StatusBar } from "react-native";
import { useFonts, NunitoSans_400Regular, NunitoSans_600SemiBold } from "@expo-google-fonts/nunito-sans";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";
import { Routes } from "@routes/index";
import 'react-native-get-random-values';
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_600SemiBold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
