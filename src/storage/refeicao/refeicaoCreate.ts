import AsyncStorage from "@react-native-async-storage/async-storage";

import { REFEICAO_COLLECTION } from "@storage/storageConfig";
import { refeicoesGetAll } from "./refeicoesGetAll";
import { RefeicaoStorageDTO } from "./RefeicaoStorageDTO";

export async function refeicaCreate(newRefeicao: RefeicaoStorageDTO) {
    try {
        const storageRefeicoes = await refeicoesGetAll();

        const storage = JSON.stringify([...storageRefeicoes, newRefeicao]);
        await AsyncStorage.setItem(REFEICAO_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}
