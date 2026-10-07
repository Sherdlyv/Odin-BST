import { act } from "react";

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


         deleteItem(value) {
              this.root = this._deleteNode(this.root, value);
        }

             _deleteNode(root, value) {
        
        if (root === null) return root;

        
        if (value < root.data) {
            root.left = this._deleteNode(root.left, value);
            return root;
        } else if (value > root.data) {
            root.right = this._deleteNode(root.right, value);
            return root;
        }
        
        if (root.left === null) {
            return root.right; 
        } else if (root.right === null) {
            return root.left;  
        }

        let succParent = root;
        let succ = root.right;
        while (succ.left !== null) {
            succParent = succ;
            succ = succ.left;
        }     
        root.data = succ.data;
     
        if (succParent !== root) {
            succParent.left = succ.right;
        } else {
            succParent.right = succ.right;
        }

        return root;
    }


    levelOrder(callBack) {

        if (actual === null) return actual ;

        let result = [];

        let queue = [];

        queue.push(this.root);

        while (queue.length > 0) {
            let actual = queue.shift();
             
            if (callBack) {
            callBack(actual.data);
            } else {
            result.push(actual.data); 
             }

             if (actual.left !== null) {
                queue.push(actual.left);
             }

             if (actual.right !== null) {
                queue.push(actual.right);

             }
        }

        if (!callBack) return result;       

        
    }








}

export { Node };
export { Tree };
