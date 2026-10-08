import { Node,Tree } from './binaryTree.js';

describe('Binary Search Tree - Initial Setup & Root Building', () => {
  
  test('Node class should initialize with data and null pointers', () => {
    const node = new Node(10);
    expect(node.data).toBe(10);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  test('buildTree should remove duplicates, sort ascending, and return the correct root node', () => {
    const unsortedArray = [1, 7, 4, 20, 10, 15, 5, 5];
    
    const sortTree = new Tree(unsortedArray);
    
    const rootNode = sortTree.buildTree(unsortedArray);

    expect(rootNode).toBeInstanceOf(Node);
    expect(rootNode.data).toBe(7);
  });

    test('includes should return true if value is in the tree, and false if not', () => {
    const unsortedArray = [1, 7, 4, 20, 10, 15, 5, 5];
   
 
   const tree = new Tree(unsortedArray);
  
    expect(tree.includes(10)).toBe(true);  
    expect(tree.includes(7)).toBe(true);   
    expect(tree.includes(99)).toBe(false); 
  });


    test('insert a value in the tree', () => {
    const unsortedArray =[1, 7, 4, 20, 10, 15, 5, 5];
    const tree = new Tree(unsortedArray);

    tree.insert(12); 
    expect(tree.includes(12)).toBe(true);

    tree.insert(3);  
    expect(tree.includes(3)).toBe(true);
  });

    test('Delete value from tree (deleteItem)', () => {
    
    const unsortedArray =[1, 7, 4, 20, 10, 15, 5, 5];
    const tree = new Tree(unsortedArray);

    expect(tree.includes(7)).toBe(true);
    tree.deleteItem(7);
    expect(tree.includes(7)).toBe(false);

    expect(tree.includes(10)).toBe(true);
    tree.deleteItem(10);
    expect(tree.includes(10)).toBe(false);
  });

    test(' (levelOrder)', () => {
    const unsortedArray = [1, 7, 4, 20, 10, 15, 5, 5];
    const tree = new Tree(unsortedArray);

    const breadthList = tree.levelOrder();
    
    expect(breadthList[0]).toBe(7); 
    expect(breadthList.length).toBe(7); 
  });

    test('devrait executer les parcours DFS dans le bon ordre (pre, in, post)', () => {
    const unsortedArray = [1, 7, 4, 20, 10, 15, 5, 5];
    const tree = new Tree(unsortedArray);
    
    expect(tree.inOrder()).toEqual([1, 4, 5, 7, 10, 15, 20]);

    expect(tree.preOrder()[0]).toBe(7);
 
    const postList = tree.postOrder();
    expect(postList[postList.length - 1]).toBe(7);
  });

    test(' (height)', () => {
   
    const unsortedArray =[1, 7, 4, 20, 10, 15, 5, 5];
    const tree = new Tree(unsortedArray);

    
    expect(tree.height(tree.root)).toBeGreaterThanOrEqual(2);

   
    let leaf = tree.root.left;
    while (leaf.left !== null || leaf.right !== null) {
        leaf = leaf.left !== null ? leaf.left : leaf.right;
    }
    expect(tree.height(leaf)).toBe(0);
  });


  test(' (depth)', () => {
    
    const unsortedArray =[1, 7, 4, 20, 10, 15, 5, 5];
    const tree = new Tree(unsortedArray);

    
    expect(tree.depth(tree.root)).toBe(0);

    if (tree.root.left !== null) {
        expect(tree.depth(tree.root.left)).toBe(1);
    }
  });


    test('devrait verifier si l-arbre est equilibre (isBalanced)', () => {
    const unsortedArray =[1, 7, 4, 20, 10, 15, 5, 5];
    const tree = new Tree(unsortedArray);

    
    expect(tree.isBalanced()).toBe(true);

   
    tree.insert(30);
    tree.insert(40);
    tree.insert(50);


    expect(tree.isBalanced()).toBe(false);
  });



});
