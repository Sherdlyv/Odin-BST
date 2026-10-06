
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        this.arr = arr;
        this.root = null;
    }
 
         buildTree (arr) {

            let mySet = new Set (arr);

            let newArray = [...mySet];

            let sortArray = newArray.sort((a,b) =>a-b);

            let mid = Math.floor(sortArray.length / 2);

            let value = sortArray[mid];


            return new Node(value);
            
        }



    }
}