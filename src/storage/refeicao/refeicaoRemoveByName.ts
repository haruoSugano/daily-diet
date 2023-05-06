import AsyncStorage from "@react-native-async-storage/async-storage";

import { REFEICAO_COLLECTION } from "@storage/storageConfig";

import { refeicoesGetAll } from "./refeicoesGetAll";

export async function refeicaoRemoveByName(refeicaoDeleted: string) {
    try {
        const storedRefeicoes = await refeicoesGetAll();
        const refeicoes = storedRefeicoes.filter(refeicao => refeicao.name !== refeicaoDeleted);

        await AsyncStorage.setItem(REFEICAO_COLLECTION, JSON.stringify(refeicoes));
        await AsyncStorage.removeItem(`${REFEICAO_COLLECTION}-${refeicaoDeleted}`);
    } catch (error) {
        throw error;
    }
}
