//Usage: unsortedArrayOfObjects.alphaNumObjectSort("name");
//Test Case: var unsortedArrayOfObjects = [{name: "a1"}, {name: "a2"}, {name: "a3"}, {name: "a10"}, {name: "a5"}, {name: "a13"}, {name: "a20"}, {name: "a8"}, {name: "8b7uaf5q11"}];
//Sorted: [{name: "8b7uaf5q11"}, {name: "a1"}, {name: "a2"}, {name: "a3"}, {name: "a5"}, {name: "a8"}, {name: "a10"}, {name: "a13"}, {name: "a20"}]

// **Sorts in place**
Array.prototype.alphaNumObjectSort = function(attribute, caseInsensitive) {
  for (var z = 0, t; t = this[z]; z++) {
    this[z].sortArray = new Array();
    var x = 0, y = -1, n = 0, i, j;

    while (i = (j = t[attribute].charAt(x++)).charCodeAt(0)) {
      var m = (i == 46 || (i >=48 && i <= 57));
      if (m !== n) {
        this[z].sortArray[++y] = "";
        n = m;
      }
      this[z].sortArray[y] += j;
    }
  }

  this.sort(function(a, b) {
    for (var x = 0, aa, bb; (aa = a.sortArray[x]) && (bb = b.sortArray[x]); x++) {
      if (caseInsensitive) {
        aa = aa.toLowerCase();
        bb = bb.toLowerCase();
      }
      if (aa !== bb) {
        var c = Number(aa), d = Number(bb);
        if (c == aa && d == bb) {
          return c - d;
        } else {
          return (aa > bb) ? 1 : -1;
        }
      }
    }

    return a.sortArray.length - b.sortArray.length;
  });

  for (var z = 0; z < this.length; z++) {
    // Here we're deleting the unused "sortArray" instead of joining the string parts
    delete this[z]["sortArray"];
  }
}
