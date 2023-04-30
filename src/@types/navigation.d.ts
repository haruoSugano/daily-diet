import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            estatistica: undefined;
            criacao: undefined;
            edicao: undefined;
            positiveFeedback: undefined;
            negativeFeedback: undefined;
            refeicoes: {
                refeicao: RefeicaoStorageDTO;
            }
        }
    }
}