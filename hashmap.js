import Node from "./node.js";

export default class HashMap {
  #loadFactor = 0.75;
  #capacity = 16;
  #buckets;

  #getBucket(key) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.#buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    return this.#buckets[hashCode];
  }

  constructor() {
    this.#buckets = new Array(this.#capacity);
  }

  get capacity() {
    return this.#capacity;
  }

  clear() {
    this.#buckets = new Array(this.#capacity);
  }

  entries() {
    const entries = [];

    const pushEntries = (item) => entries.push([item.key, item.val]);
    this.#buckets.forEach((bucket) => {
      this.traverseList(bucket, pushEntries);
    });

    return entries;
  }

  traverseList(head, operation) {
    let nextNode = head;

    while (nextNode) {
      operation(nextNode);
      nextNode = nextNode.nextNode;
    }
  }

  get(key) {
    const bucket = this.#getBucket(key);
    let val;

    const findVal = (item) => {
      if (item.key === key) val = item.val;
    };

    this.traverseList(bucket, findVal);
    return val;
  }

  has(key) {
    const bucket = this.#getBucket(key);
    let foundKey = false;

    const hasKey = (item) => {
      foundKey = item.key === key;
    };

    this.traverseList(bucket, hasKey);

    return foundKey;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    hashCode = hashCode % this.#capacity;

    return hashCode;
  }

  keys() {
    const keys = [];

    const pushKey = (item) => keys.push(item.key);

    this.#buckets.forEach((bucket) => {
      this.traverseList(bucket, pushKey);
    });

    return keys;
  }

  length() {
    let count = 0;

    const listCount = () => {
      count++;
    };

    this.#buckets.forEach((bucket) => {
      this.traverseList(bucket, listCount);
    });

    return count;
  }

  remove(key) {
    if (this.has(key)) {
      const hashCode = this.hash(key);
      delete this.#buckets[hashCode];
      return true;
    }
    return false;
  }

  set(key, value) {
    const hashCode = this.hash(key);

    if (this.has(key)) {
      const bucket = this.#getBucket(key);
      bucket.val = value;
    } else if (this.length() < this.#capacity * this.#loadFactor) {
      const buffer = this.#buckets[hashCode];
      const node = new Node(key, value);
      if (buffer) {
        this.#buckets[hashCode] = node;
        node.nextNode = buffer;
      } else this.#buckets[hashCode] = node;
    } else {
      const entries = this.entries();

      entries.push([key, value]);

      //resizing map
      this.#capacity = 2 * this.#capacity;
      this.#buckets = new Array(this.#capacity);

      //copying it into new Array
      entries.forEach(([key, value]) => {
        this.set(key, value);
      });
    }
  }

  values() {
    const values = [];

    const pushValues = (item) => values.push(item.val);

    this.#buckets.forEach((bucket) => {
      this.traverseList(bucket, pushValues);
    });

    return values;
  }
}
