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

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function minNode(node) {
      let currentNode = node;
      while (currentNode.left) {
        currentNode = currentNode.left;
      }
      return currentNode.data;
    }

    function removeNode(node, value) {
      if (node) {
        if (value < node.data) {
          node.left = removeNode(node.left, value);
        } else if (value > node.data) {
          node.right = removeNode(node.right, value);
        } else if (node.left && node.right) {
          node.data = minNode(node.right);
          // console.log(node.right.min());
          node.right = removeNode(node.right, node.data);
        } else {
          node = node.left || node.right;
        }
        return node;
      }
      return node;
    }

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

// values = [
//   43, 43, 79, 64, 98, 32, 1, 45, 114, 21, 122, 466, 322, 12, 54, 12, 64, 212,
//   133, 110, 111, 112, 113, 120, 44, 55, 8, 9,
// ];

// const values = [... new Set([...Array(5)].map(_=>Math.ceil(Math.random()*100)))]

const values = [72, 25, 22, 41, 13]
const sortedValues = [
  25, 41
]
const valuesToRemove = [
  22, 72, 13
]

console.log('initial',values)
const tree = new BinarySearchTree();
values.forEach((value) => tree.add(value));
// values.sort((a, b) => (a % 2) - (b % 2) || a - b);
// console.log('sorted values',values)
// const valuesToRemove = values.splice(0, 3);
// console.log('valuesToRemove',valuesToRemove)
valuesToRemove.forEach((value, index) => {
  // if (index > 1) {
  //   return
  // }

  tree.remove(value)
});

valuesToRemove.forEach((value) => {
  console.log(`has ${value}`, tree.has(value));
});
console.log("all false");
sortedValues.forEach((value) => {
  console.log(`has ${value}`, tree.has(value));
  tree.has(value);
});
console.log("all true");
console.log(tree)
module.exports = {
  BinarySearchTree,
};
