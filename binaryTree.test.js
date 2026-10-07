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



});
