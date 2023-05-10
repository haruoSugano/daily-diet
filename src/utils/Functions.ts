import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";

type Refeicoes = RefeicaoStorageDTO[];

export function CalculatePercent(refeicoes: Refeicoes) {
    const refeicoesNegative = refeicoes.filter(refeicao => refeicao.healthyFood === false);

    const totalRefeicoes = refeicoes.length;
    const percentNegative = (100 * refeicoesNegative.length) / totalRefeicoes;
    const percent = 100 - percentNegative;

    const percentage = parseFloat(percent.toFixed(2));

    return isNaN(percentage) ? 0 : percentage;
}

export function Positive(refeicoes: Refeicoes) {
    const refeicoesPositive = refeicoes.filter(refeicao => refeicao.healthyFood === true);

    return refeicoesPositive.length;
}

export function Negative(refeicoes: Refeicoes) {
    const refeicoesNegative = refeicoes.filter(refeicao => refeicao.healthyFood === false);

    return refeicoesNegative.length;
}

export function SequenceDiet(refeicoes: Refeicoes) {

    let currentSequence = 0;
    let maxSequence = 0;

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

        return dateObjectA.getTime() - dateObjectB.getTime();
    });
  
    for (const refeicao of refeicoesSort) {
      if (refeicao.healthyFood) {
        currentSequence++;
        maxSequence = Math.max(maxSequence, currentSequence);
      } else {
        currentSequence = 0;
      }
    }
  
    return maxSequence;
}
