// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

// You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

// {
//   'algebra': 6,
//   'history': 8,
//   'physics': 9,
//   'geography': 2,
//   'chemistry': 9
// }

// Return please :

// 'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

// 'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

// 'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.

// If two or three sons have the same highest marks, you need to choose the younger one. Use the ageTable object which is preloaded:

// ageTable = {
//             'firstSonAge': 14,
//             'secondSonAge': 9,
//             'thirdSonAge': 8
//            }

function whoseBicycle(diary1, diary2, diary3) {
  const diaries = [diary1, diary2, diary3];
  const ageTable = {
    firstSonAge: 14,
    secondSonAge: 9,
    thirdSonAge: 8,
  };

  const totalMarks = diaries.map((diary) =>
    Object.values(diary).reduce((sum, mark) => sum + mark, 0)
  );

  const maxMarks = Math.max(...totalMarks);

  const bestIndices = totalMarks
    .map((marks, index) => (marks === maxMarks ? index : -1))
    .filter((index) => index !== -1);

  const youngestSonIndex = bestIndices.reduce(
    (youngest, index) =>
      ageTable[Object.keys(ageTable)[index]] <
      ageTable[Object.keys(ageTable)[youngest]]
        ? index
        : youngest,
    bestIndices[0]
  );

  const sonNames = ['first', 'second', 'third'];
  return `I need to buy a bicycle for my ${sonNames[youngestSonIndex]} son.`;
}
