
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
        this.root = this.buildTree(arr);
    }
 
         buildTree (arr) {

            let mySet = new Set (arr);

            let newArray = [...mySet];

            let sortArray = newArray.sort((a,b) => a-b);

            if (sortArray.length === 0) {
             return null;
             }

            let mid = Math.floor(sortArray.length / 2);

            let value = sortArray[mid];

            let node = new Node(value);

           node.left = this.buildTree(sortArray.slice(0, mid));

           node.right = this.buildTree(sortArray.slice(mid + 1));

           return node;
         
        }

        includes(value) {
            let actual = this.root;

            while (actual !== null) {

                if (value === actual.data) {
                    return true;
                }

                 if (value < actual.data) {
                    actual = actual.left;
                } else if (value > actual.data) {
                    actual = actual.right;
                } 
                

                             
            }
            return false;
        }

        insert(value) {
           
            let newNode = new Node(value);

            if (this.root === null) {
             this.root = newNode;
             return;
           }

            let actual = this.root;

            if (value === actual.data) {
                return null;
            }

            while (actual !== null) {

                if (value < actual.data) {
                    if (actual.left === null) {
                        actual.left = newNode;
                        return;
                    }

                     actual = actual.left; 

                } else {
                    if (actual.right === null) {
                        actual.right = newNode;
                        return;
                    }

                    actual = actual.right; 
                }


            }
        }




}

export { Node };
export { Tree };
