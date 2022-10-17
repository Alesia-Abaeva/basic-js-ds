/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(linkedList, k) {
  while (linkedList?.value === k) {
    linkedList = linkedList.next;
  }
  let number = linkedList;
  while (number?.next) {
    if (number.next.value === k) {
      number.next = number.next.next;
      continue;
    }
    number = number.next;
  }
  return linkedList;
}

module.exports = {
  removeKFromList,
};
