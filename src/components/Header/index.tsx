import React from "react";
import { BackButton, BackIcon, ButtonTypeStyleProps, Container, Logo, PhotoUser } from "./styles";

import photoUser from "@assets/photo.png";
import logoImage from "@assets/logo.png";
import { TouchableOpacityProps, View } from "react-native";

type Props = TouchableOpacityProps & {
    showBackButton?: boolean;
    type?: ButtonTypeStyleProps;
}

export function Header({ showBackButton = false, type="PRIMARY", ...rest }: Props) {
    return (
        <View>
            {
                showBackButton ?
                    <Container>
                        <BackButton
                            {...rest}
                        >
                            <BackIcon
                                type={type}
                            />
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
