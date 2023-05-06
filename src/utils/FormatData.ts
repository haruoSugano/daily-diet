import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";

type Refeicao = RefeicaoStorageDTO[];

export function FormatData(refeicao: Refeicao) {
    const initialResult: { [key: string]: Refeicao } = {};

    const refeicoesByDate: { [key: string]: Refeicao } = refeicao.reduce((result, refeicao) => {
        (result[refeicao["date"]] = result[refeicao["date"]] || []).push(
            refeicao
        );
        return result;
    }, initialResult);

    const formattedData = Object.entries(refeicoesByDate).map(([title, data]) => ({
        title,
        data
    }));

    return formattedData;
}
