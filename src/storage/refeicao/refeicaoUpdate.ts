import AsyncStorage from "@react-native-async-storage/async-storage";

import { REFEICAO_COLLECTION } from "@storage/storageConfig";
import { refeicoesGetAll } from "./refeicoesGetAll";
import { RefeicaoStorageDTO } from "./RefeicaoStorageDTO";

export async function refeicaoUpdate(refeicaoUpdate: RefeicaoStorageDTO) {
    try {
        const storedRefeicoes = await refeicoesGetAll();

        let refeicao = storedRefeicoes.find(refeicao => refeicao.id === refeicaoUpdate.id);

        refeicao = {
            id: refeicaoUpdate.id,
            name: refeicaoUpdate.name,
            description: refeicaoUpdate.description,
            date: refeicaoUpdate.date,
            hour: refeicaoUpdate.hour,
            healthyFood: refeicaoUpdate.healthyFood
        }

        const refeicoes = storedRefeicoes.filter(refeicao => refeicao.id !== refeicaoUpdate.id);

        const storage = JSON.stringify([...refeicoes, refeicao]);
        await AsyncStorage.setItem(REFEICAO_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}
