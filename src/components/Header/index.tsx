import React from "react";
import { BackButton, BackIcon, Container, Logo, PhotoUser } from "./styles";

import photoUser from "@assets/photo.png";
import logoImage from "@assets/logo.png";
import { TouchableOpacityProps, View } from "react-native";

type Props = TouchableOpacityProps & {
    showBackButton?: boolean;
    
}

export function Header({ showBackButton = false, ...rest }: Props) {
    return (
        <View>
            {
                showBackButton ?
                    <Container>
                        <BackButton
                            {...rest}
                        >
                            <BackIcon />
                        </BackButton>
                    </Container> :
                    <Container>
                        <Logo
                            source={logoImage}
                        />
                        <PhotoUser
                            source={photoUser}
                        />
                    </Container>
            }
        </View>
    );
}