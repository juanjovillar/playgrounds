export function getAvg(scores){
    return getTotalScore(scores);
}

function getTotalScore(scores){
        return scores.reduce((totalScore, currentScore) => totalScore + currentScore);  
}