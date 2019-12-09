
let arrayMethods = {
  people:
    [
      {
        'name': 'Uno Smith',
        'photo': 'https://unsplash.com/photos/vMV6r4VRhJ8',
        'scores': [1, 5, 3, 2, 5]
      },
      //diff: |-3| + |3| + |-2| + |-1| + |0| = 9
      {
        'name': 'Dos Janzen',
        'photo': 'https://unsplash.com/photos/nM-_N9z33iM',
        'scores': [4, 2, 5, 3, 5]
      },
      //dos - tres =>diff: |1| + |1| + |1| + |-1| + |3| = 7
      {
        'name': 'Tres Ricos',
        'photo': 'https://unsplash.com/photos/t4LJHlTjCY8',
        'scores': [3, 1, 4, 4, 2]
        //diff: |2| + |-4| + |1| + |2| + |-3| = 12
      },
      // {
      //   "name": "Ahmed",
      //   "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
      //   "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
      // },
      // {
      //   "name": "Jacob Deming",
      //   "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
      //   "scores": ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
      // },
      // {
      //   "name": "Jeremiah Scanlon",
      //   "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
      //   "scores": ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
      // },
      // {
      //   "name": "Louis T. Delia",
      //   "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
      //   "scores": ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
      // },
      // {
      //   "name": "Lou Ritter",
      //   "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
      //   "scores": ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
      // },
      // {
      //   "name": "Jordan Biason",
      //   "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
      //   "scores": ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
      // }
    ],
  diff: 0,
  totalDiff: 0,

  compareArrays: function (scoresOne, scoresTwo) {
    for (let i = 0; i < scoresOne.length; i++) {
      this.diff = Math.abs(scoresOne[i] - scoresTwo[i]);
      this.totalDiff += this.diff /* Math.abs(this.diff) */;

      console.log(`Diff: ${this.diff}`);
    };

    // console.log(`Diff: ${this.diff}`);
    console.log(`TotalDiff: ${this.totalDiff}`);
    this.totalDiff = 0;
  }
};



arrayMethods.compareArrays(arrayMethods.people[0].scores, arrayMethods.people[1].scores);
arrayMethods.compareArrays(arrayMethods.people[1].scores, arrayMethods.people[2].scores);
arrayMethods.compareArrays(arrayMethods.people[2].scores, arrayMethods.people[0].scores);

module.exports = arrayMethods;






//figure out how foreach statements work sometime, because the below function should do the sae thing as the above, but it doesn't


// scoresOne.forEach(element => {
//   if (scoresOne[element] >= scoresTwo[element]) {
//     this.diff = scoresOne[element] - scoresTwo[element]; this.totalDiff += this.diff;
//   } else if (scoresTwo[element] >= scoresOne[element]) {
//     this.diff = Math.abs(scoresTwo[element] + scoresOne[element]); this.totalDiff += this.diff;
//   }

//   console.log(`Diff: ${this.diff}`);
// })


// this is a good idea, figure it out someday - VAU


// for (let i = 0; i < friendsArr.length; i++) {
//   var counter = (friendsArr.length + 1) - friendsArr.length;
//   switch () {           //friendsArr.length()
//     case :
//       var j = 0;
//       this.diff = Math.abs(newFriend.scores[j] - friendsArr[i]);
//       j++;
//       break;
//       case 1:
//         var j =

//     default:
//       break;
//   }
// }
