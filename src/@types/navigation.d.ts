import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            estatistica: undefined;
            criacao: undefined;
            positiveFeedback: undefined;
            negativeFeedback: undefined;
            edicao: {
                refeicaoData: RefeicaoStorageDTO;
            };
            refeicoes: {
                refeicaoData: RefeicaoStorageDTO;
            };
        }
    }
}