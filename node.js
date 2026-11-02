export default class Node {
  constructor(key, val, nextNode = null) {
    this.key = key;
    this.val = val;
    this.nextNode = nextNode;
  }
}
