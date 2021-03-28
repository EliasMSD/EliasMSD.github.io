function scoreExams(stdScore, rightAns) {
    let score = []
    for (let eachAnswer of stdScore) {
        let answer = 0
        for (let i = 0; i < eachAnswer.length; i++) {
            if (eachAnswer[i] === rightAns[i])
                answer++;
        }
        score.push(answer)
    }
    return score;
}
console.log(scoreExams( [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]],[3,1,2,4]))