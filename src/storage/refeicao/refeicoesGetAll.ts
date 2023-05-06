import AsyncStorage from "@react-native-async-storage/async-storage";

import { REFEICAO_COLLECTION } from "@storage/storageConfig";
import { RefeicaoStorageDTO } from "./RefeicaoStorageDTO";

export async function refeicoesGetAll() {
    try {
        const storage = await AsyncStorage.getItem(REFEICAO_COLLECTION);

        const refeicoes: RefeicaoStorageDTO[] = storage ? JSON.parse(storage) : [];

        return refeicoes;
    } catch (error) {   
        throw error;
    }
}
