import React from "react";
import { BackButton, BackIcon, Container, Logo, PhotoUser } from "./styles";

import photoUser from "@assets/photo.png";
import logoImage from "@assets/logo.png";
import { View } from "react-native";

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return (
        <View>
            {
                showBackButton ?
                    <Container>
                        <BackButton>
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