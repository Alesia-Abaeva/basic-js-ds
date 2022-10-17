const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    if (!this.rootNode) {
      return null;
    }

    return this.rootNode;
  }

  clearRootNode() {
    this.rootNode = null;
  }

  add(value) {
    if (!this.rootNode) {
      this.rootNode = new Node(value);
    }

    return this.rootNode.add(value);
  }

  has(value) {
    return this.rootNode.has(value);
  }

  find(value) {
    return this.rootNode.find(value);
  }

  remove(value) {
    return this.rootNode.remove(value, this.rootNode, this.clearRootNode);
  }

  min() {
    if (!this.rootNode.data) {
      return null;
    }

    return this.rootNode.min();
  }

  max() {
    if (!this.rootNode.data) {
      return null;
    }

    return this.rootNode.max();
  }
}

module.exports = {
  BinarySearchTree,
};
