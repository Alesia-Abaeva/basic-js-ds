class Node {
  constructor(data) {
    this.data = data;
    this.left = null; // Node
    this.right = null; // Node
    // this.parent = null; // Node
  }}

//   findChildDirection(node) {
//     if (!node.parent) {
//       return null;
//     }

//     if (node.data > node.parent.data) {
//       return "right";
//     }

//     return "left";
//   }

//   add(value) {
//     if (!this.data) {
//       this.data = value;
//       return this.data;
//     }

//     if (value < this.data) {
//       if (!this.left) {
//         this.left = new Node(value);
//         this.left.parent = this;
//         return this.left.data;
//       }

//       return this.left.add(value);
//     }

//     if (value > this.data) {
//       if (!this.right) {
//         this.right = new Node(value);
//         this.right.parent = this;
//         return this.right.data;
//       }

//       return this.right.add(value);
//     }
//   }

//   has(value) {
//     if (value === this.data) {
//       return true;
//     }

//     if (value > this.data) {
//       if (!this.right) {
//         return false;
//       }

//       return this.right.has(value);
//     }

//     if (value < this.data) {
//       if (!this.left) {
//         return false;
//       }

//       return this.left.has(value);
//     }

//     return false;
//   }

//   find(value) {
//     if (value === this.data) {
//       return this;
//     }

//     if (value > this.data) {
//       if (!this.right) {
//         return null;
//       }

//       return this.right.find(value);
//     }

//     if (value < this.data) {
//       if (!this.left) {
//         return null;
//       }

//       return this.left.find(value);
//     }

//     return null;
//   }

//   remove(data) {
//     // const removableNode = {...this.find(value)};

//     // if (!removableNode) {
//     //   return false;
//     // }


//     // const parent = this.find(removableNode.parent?.data);
//     // const direction = this.findChildDirection(removableNode);

//     // if (!removableNode.left && !removableNode.right) {
//     //   if (parent) {
//     //     parent[direction] = null;
//     //   } else {
//     //     clearRootNode();
//     //   }

//     //   return true;
//     // }

//     // if (removableNode.left && !removableNode.right) {
//     //   if (parent) {
//     //     removableNode.left.parent = parent;
//     //     parent[direction] = removableNode.left;
//     //   } else {
//     //     rootNode.data = removableNode.left.data;
//     //     rootNode.left = removableNode.left.left;
//     //     rootNode.right = removableNode.left.right;

//     //   }

//     //   return true;
//     // }

//     // if (!removableNode.left && removableNode.right) {
//     //   if (parent) {
//     //     removableNode.right.parent = parent;
//     //     parent[direction] = removableNode.right;
//     //   } else {
//     //     rootNode.data = removableNode.right.data;
//     //     rootNode.left = removableNode.right.left;
//     //     rootNode.right = removableNode.right.right;
//     //   }

//     //   return true;
//     // }

//     // if (!removableNode.right.left?.data) {   
//     //   if (parent) {
//     //     removableNode.left.parent = removableNode.right
//     //     removableNode.right.left = removableNode.left
//     //     removableNode.right.parent = parent
//     //     parent[direction] = removableNode.right;
        
//     //   } else {
//     //     rootNode.data = removableNode.right.data;
//     //     rootNode.left = removableNode.right.left;
//     //     rootNode.right = removableNode.right.right;
        
//     //   }
//     //   return true
//     // }

//     // const minNode = this.findMinNode(removableNode.right);

//     // removableNode.data = minNode.data;
//     // minNode.parent.left = minNode.right;

//     // return true;
//   }

//   findMinNode(node) {
//     return node.find(node.min());
//   }

//   min() {
//     if (!this.left) {
//       return this.data;
//     }

//     return this.left.min();
//   }

//   max() {
//     if (!this.right) {
//       return this.data;
//     }

//     return this.right.max();
//   }
// }

module.exports = {
  Node,
};
