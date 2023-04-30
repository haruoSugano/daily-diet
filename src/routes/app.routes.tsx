import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Criacao } from "@screens/Criacao";
import { EditarRefeicao } from "@screens/EditarRefeicao";
import { Estatisticas } from "@screens/Estatisticas";
import { Home } from "@screens/Home";
import { NegativeFeedback } from "@screens/NegativeFeedback";
import { PositiveFeedback } from "@screens/PositiveFeedback";
import { Refeicao } from "@screens/Refeicao";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name="home"
                component={Home}
            />

            <Screen 
                name="estatistica"
                component={Estatisticas}
            />

            <Screen 
                name="criacao"
                component={Criacao}
            />

            <Screen 
                name="edicao"
                component={EditarRefeicao}
            />

            <Screen 
                name="positiveFeedback"
                component={PositiveFeedback}
            />

            <Screen 
                name="negativeFeedback"
                component={NegativeFeedback}
            />

            <Screen 
                name="refeicoes"
                component={Refeicao}
            />
        </Navigator>
    );
}
