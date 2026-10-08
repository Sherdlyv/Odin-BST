# Odin-Binary Search Tree (BST) Implementation


A low-level, memory-efficient data structure architecture built from scratch in modern JavaScript. This project serves as a comprehensive study in algorithmic performance, focusing on pointer manipulation within the RAM and maintaining deterministic \(O(\log n)\) time complexities without relying on native array mutations.

##  Key Technical Milestones & Architecture Insights

Developing this architecture required a deep dive into computer science fundamentals, shifting away from high-level abstractions to master precise state evaluation and tree balancing.

* **Deterministic \(O(\log n)\) Search & Space Efficiency:** Designed an iterative traversal algorithm utilizing an autonomous lookup pointer (`actual`). By avoiding native array indexing operations, operations leverage binary partitioning to scale at optimal logarithmic speed.
* **Low-Level Memory State Mutations & Edge-Case Deletions:** Implemented a robust, multi-case recursive deletion matrix (`deleteItem`). Successfully engineered the geometric resolution for internal nodes with two active sub-trees, isolating the *in-order successor* (leftmost leaf of the right sub-tree) to preserve structural equilibrium during RAM release.
* **Algorithmic Chronology & Traversals:** Built comprehensive Depth-First Search (DFS) variants (`preOrder`, `inOrder`, `postOrder`) alongside a Breadth-First Search (BFS) mechanism (`levelOrder`). This unlocked a complete understanding of how memory stack lifecycles and FIFO queues dictate computational execution order.
* **Functional Flexibility via Decoupled Callbacks:** Abstracted data processing by implementing higher-order functions. The traversal engine supports decoupled callback triggers execution while fallback parameters systematically maintain clean data aggregation pipelines.
* **Dynamic Geometrical Analytics:** Engineered automated self-balancing checks (`isBalanced`) via absolute node height differentials (`Math.abs`), coupled with an automated structural restructuring system (`rebalance`) to correct depth skewed sub-trees.

##  Verification & Test-Driven Development (TDD)

Every structural rule and operational boundary condition is strictly enforced, validated, and kept isolated under an automated unit testing suite powered by **Jest** and **Babel**.

```bash
# Run the structural integration test matrix
npx jest
```

### Analytical Breakdown Example:
* **Raw Input Stream:** 1, 7, 4, 20, 10, 15, 5, 5
* **Deduplicated & Sorted Array:** 1, 4, 5, 7, 10, 15, 20
* **Calculated Midpoint Root:** 7 (Strict midpoint isolation using mathematical floor bounds)
* **In-Order Verification Vector:** 1, 4, 5, 7, 10, 15, 20 (Guaranteed monotonic ascending sort order)

##  Engineering Environment

* **Testing Framework:** Jest & Babel Presets (`@babel/preset-env`)


## Author
 Sherdly Verne