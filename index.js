import { getAvg } from "./service";

const scores = [1, 5, 10, 20];
const averageScore = getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);