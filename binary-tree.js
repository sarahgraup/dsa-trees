"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    //start at the root count is 1
    //if the root doesnt have a either a left or right child
    //check left child first, see if left child has both left and right child
    //if child only has one child, return
    // console.log("this number is ", this.val,  "and their children: ", this.left, this.right);
    let leftDepth = this.left ? this.left.minDepthToIncompleteNode() : 0;
    let rightDepth = this.right ? this.right.minDepthToIncompleteNode() : 0;
    
    return Math.min(
      leftDepth,
      rightDepth 
    ) + 1;
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let leftDepth = this.left ? this.left.maxDepth() : 0;
    let rightDepth = this.right ? this.right.maxDepth() : 0;
    
    return Math.max(
      leftDepth,
      rightDepth 
    ) + 1;


  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth() {
    console.log("this val:", this.val);
    if(!this.left && !this.right){
      console.log("no children");
      return 1;
    }

    if(!this.left){
      return this.right.minDepth();
    }
    if(!this.right){
      return this.left.minDepth();
    }


    // console.log("left", this.left)
    // let leftDepth = this.left ? this.left.minDepth() : 0;
    // console.log("left depth: ", leftDepth);
    // console.log("right", this.right)
    // let rightDepth = this.right ? this.right.minDepth() : 0;
    // console.log("RIGHT depth: ", rightDepth, "right val", this.right, "this val", this.val);
    
    return Math.min(
      this.left.minDepth(),
      this.right.minDepth() 
    ) + 1;

  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if(this.root===null){
      return 0;
    }
    return this.root.minDepthToIncompleteNode();

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if(this.root===null){
      return 0;
    }
    return this.root.maxDepth();

  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if(this.root===null){
      return 0;
    }
    return this.root.minDepth();

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(this.root===null){
      return 0;
    }
    return this.root.nextLarger();

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
