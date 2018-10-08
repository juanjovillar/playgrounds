import * as averageService from "./service";

const scores = [1, 5, 10, 20];
const totalScore = averageService.getTotalScore(scores);
const averageSCore = averageService.getAvg(scores);

const messageTotalScore = ` total score is: ${totalScore}`;
const messageAverageScore = ` average score is: ${averageSCore}`;

document.write(messageTotalScore);
document.write(messageAverageScore);