let strs = ["dog", "racecar", "car"];
var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      while (strs[i][j] == strs[i + 1][j] && strs[i][j] == strs[i + 2][j]) {
        j++;
      }
      if (!i && !j) {
        return console.log("");
      } else {
        return console.log(String(strs).substr(0, j));
      }
    }
  }
};

longestCommonPrefix(strs);
