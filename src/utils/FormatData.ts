import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";

type Refeicoes = RefeicaoStorageDTO[];

export function FormatData(refeicoes: Refeicoes) {
    const initialResult: { [key: string]: Refeicoes } = {};

    const refeicoesSort = refeicoes.sort((a, b) => {
        const dateStringA = a.date;
        const yearA = Number(dateStringA.substring(6));
        const monthA = Number(dateStringA.substring(3, 5)) - 1;
        const dayA = Number(dateStringA.substring(0, 2));
        const dateObjectA = new Date(yearA, monthA, dayA);

        const dateStringB = b.date;
        const yearB = Number(dateStringB.substring(6));
        const monthB = Number(dateStringB.substring(3, 5)) - 1;
        const dayB = Number(dateStringB.substring(0, 2));
        const dateObjectB = new Date(yearB, monthB, dayB);

        return dateObjectB.getTime() - dateObjectA.getTime();
    });

    const refeicoesByDate: { [key: string]: Refeicoes } = refeicoesSort.reduce((result, refeicao) => {
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
