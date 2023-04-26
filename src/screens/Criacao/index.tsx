import { useState } from "react";

import { AnswerButton, Container, Content, InputDateHour, InputDescription, NameInput, SubContent, SubText, Option, Form, TypeStyleProps, FooterButton } from "./styles";

import { Title } from "@components/Title";
import { TouchableOpacityProps } from "react-native";
import { NewEditAddButton } from "@components/NewEditAddButton";

type Props = TouchableOpacityProps & {
    name: string;
    description: string;
    date: string;
    type?: TypeStyleProps;
};

export function Criacao() {
    const [userOptions, setUserOptions] = useState<TypeStyleProps>("PRIMARY");

    return (
        <Container>
            <Title />
            <Content>
                <Form>
                    <SubText>
                        Nome
                    </SubText>
                    <NameInput
                  
                    />

                    <SubText>
                        Descrição
                    </SubText>
                    <InputDescription
                        multiline={true}
                        numberOfLines={10}
                 
                    />

                    <SubContent>
                        <SubText>
                            Data
                        </SubText>
                        <SubText>
                            Hora
                        </SubText>
                    </SubContent>

                    <SubContent>
                        <InputDateHour
                            
                        />
                        <InputDateHour />
                    </SubContent>

                    <SubText>
                        Está dentro da dieta?
                    </SubText>

                    <SubContent>
                        <AnswerButton
                        
                            type="DEFAULT"
                        >
                            <Option
                                type="PRIMARY"
                            />
                            <SubText>
                                Sim
                            </SubText>
                        </AnswerButton>

                        <AnswerButton
                            type="DEFAULT"
                       
                        >
                            <Option
                                type="SECONDARY"
                            />
                            <SubText>
                                Não
                            </SubText>
                        </AnswerButton>
                    </SubContent>
                </Form>

                <FooterButton>
                    <NewEditAddButton
                        title="Cadastrar refeição"
                        type="SECONDARY"
                    />
                </FooterButton>
            </Content>
        </Container>
    );
}
