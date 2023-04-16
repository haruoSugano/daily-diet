import { View } from "react-native";
import { Percent, Text } from "./styles";

type Props = {
    percent: number;
    text: string;
}

export function PercentText({ percent, text }: Props) {
    return (
        <View>
            <Percent>
                {percent}%
            </Percent>
            <Text>
                {text}
            </Text>
        </View >
    );
}
