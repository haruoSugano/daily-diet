import React from "react";
import { TextInput, TextInputProps } from "react-native";
import {
    AnswerButton, Container, InputDateHour, FooterButton,
    InputDescription, NameInput, SubContent, SubText, TypeStyleProps, Option
} from "./styles";
import { NewEditAddButton } from "@components/NewEditAddButton";

type Props = TextInputProps & {
    inputRef?: {
        name?: React.RefObject<TextInput>;
        description?: React.RefObject<TextInput>;
        hour?: React.RefObject<TextInput>;
        date?: React.RefObject<TextInput>;
    }

    onNameChange: (text: string) => void;
    onDescriptionChange: (text: string) => void;
    onDateChange: (text: string) => void;
    onHourChange: (text: string) => void;
    onSubmit: () => void;

    selectedValue: string;
    onRadioChange: (value: TypeStyleProps) => void;
}

export function Form({ inputRef, onNameChange, onDescriptionChange, onHourChange, onDateChange, selectedValue = "DEFAULT", onRadioChange, onSubmit, ...rest }: Props) {
    return (
        <Container>
            <SubText>
                Nome
            </SubText>
            <NameInput
                ref={inputRef?.name}
                onChangeText={onNameChange}
                {...rest}
            />

            <SubText>
                Descrição
            </SubText>
            <InputDescription
                multiline={true}
                numberOfLines={10}
                ref={inputRef?.description}
                onChangeText={onDescriptionChange}
                {...rest}
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
                    ref={inputRef?.date}
                    onChangeText={onDateChange}
                    {...rest}
                />
                <InputDateHour
                    ref={inputRef?.hour}
                    onChangeText={onHourChange}
                    {...rest}
                />
            </SubContent>

            <SubText>
                Está dentro da dieta?
            </SubText>

            <SubContent>
                <AnswerButton
                    type={selectedValue === "PRIMARY" ? "PRIMARY" : "DEFAULT"}
                    onPress={() => onRadioChange("PRIMARY")}
                >
                    <Option
                        type="PRIMARY"
                    />
                    <SubText>
                        Sim
                    </SubText>
                </AnswerButton>

                <AnswerButton
                    type={selectedValue === "SECONDARY" ? "SECONDARY" : "DEFAULT"}
                    onPress={() => onRadioChange("SECONDARY")}
                >
                    <Option
                        type="SECONDARY"
                    />
                    <SubText>
                        Não
                    </SubText>
                </AnswerButton>
            </SubContent>
            
            <FooterButton>
                <NewEditAddButton
                    onPress={onSubmit}
                    title="Cadastrar refeição"
                    type="SECONDARY"
                />
            </FooterButton>
        </Container>
    );
}
