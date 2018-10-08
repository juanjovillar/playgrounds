export function getAvg(scores){
    return getTotalScore(scores);
}

export function getTotalScore(scores){
        return scores.reduce((totalScore, currentScore) => totalScore + currentScore);  
}