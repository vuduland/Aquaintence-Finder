const friendsArr = [
  {
    name: 'Peter Smith',
    photo: 'https://media.giphy.com/media/YGfFY30VQNlHG/giphy.gif',
    scores: [1, 5, 3, 2, 5, 4, 3, 5, 2, 1]
  },
  // diff: |-3| + |3| + |-2| + |-1| + |0| = 9
  {
    name: 'Isaac Janzen',
    photo:
      'https://media2.giphy.com/media/MjOwkcD52GW4M/giphy.webp?cid=790b761153cdcb94c859f70fa220042e232c75527448e12f&rid=giphy.webp',
    scores: [4, 2, 5, 3, 5]
  },
  //dos - tres =>diff: |1| + |1| + |1| + |-1| + |3| = 7
  {
    name: 'Rico Quintanilla',
    photo: 'https://media.giphy.com/media/bb8KjXMZyVOgw/giphy.gif',
    scores: [3, 1, 4, 4, 2]
    //diff: |2| + |-4| + |1| + |2| + |-3| = 12
  },
  {
    name: 'Christopher',
    photo:
      'https://i5.walmartimages.com/asr/786fd296-0547-47a1-a35d-e69cbb693069_1.840bca2e64446371670ab1565d74c546.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
    scores: ['5', '1', '4', '4', '5', '1', '2', '5', '4', '1']
  },
  {
    name: 'Travis',
    photo: 'https://unsplash.com/photos/11hnchukldg',
    scores: ['4', '2', '5', '1', '3', '2', '2', '1', '3', '2']
  },
  {
    name: 'Bradley',
    photo:
      'https://media3.giphy.com/media/DVrK7tC5dHxYs/giphy.webp?cid=790b761183d002dd0ba2f05a1ee5f7208dd17483b5e71ae4&rid=giphy.webp',
    scores: ['5', '2', '2', '2', '4', '1', '3', '2', '5', '5']
  },
  {
    name: 'Victor Uland',
    photo: 'https://media.giphy.com/media/5yLgocytZ7P7jp5dhIc/giphy.gif',
    scores: ['3', '3', '4', '2', '2', '1', '3', '2', '2', '3']
  },
  {
    name: 'Rafi',
    photo: 'https://media.giphy.com/media/7fT95O84moKBO/source.gif',
    scores: ['4', '3', '4', '1', '5', '2', '5', '3', '1', '4']
    //https://media.giphy.com/media/Wy1SVQl9plAPe/giphy.gif
  },
  {
    name: 'April Ludgate',
    photo:
      'https://media1.giphy.com/media/hqBnzW5bwDtbW/200w.webp?cid=790b76119395cd8a54dd5a9e669808bcddc0c4bdee752290&rid=200w.webp',
    scores: ['4', '4', '2', '3', '2', '2', '3', '2', '4', '5']
  }
];

console.log(friendsArr);
module.exports = friendsArr;

// compareArrays: function(newFriendsObj) {
//   for (let i = 0; i < newFriendsObj.scores.length; i++) {
//     newFriendsObj.scores[i] = parseInt(newFriendsObj.scores[i]);
//   }
//   for (let i = 0; i < this.friendsArr[i].scores.length; i++) {
//     this.friendsArr[i].scores[i] = parseInt(this.friendsArr[i].scores[i]);
//   }

//   for (let i = 0; i < this.friendsArr.length; i++) {
//     for (let j = 0; j < this.friendsArr[i].scores.length; j++) {
//       this.diff = Math.abs(
//         newFriendsObj.scores[j] - this.friendsArr[i].scores[j]
//       );
//       this.totalDiff += this.diff /* Math.abs(this.diff) */;
//     }
//     if (this.totalDiff < this.maxDiff) {
//       this.userMatch = i;
//       this.maxDiff = this.totalDiff;
//     }
//   }

//   this.totalDiff = 0;
// }
