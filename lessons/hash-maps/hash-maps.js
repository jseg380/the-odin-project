import { LinkedList } from './linked-list.js';

class HashMap {
  static #LOAD_FACTOR = 0.75;
  static #BASE_CAPACITY = 16;
  static #INCREMENT_FACTOR = 1.25;
  #capacity
  #filledBuckets;
  #buckets;

  constructor() {
    this.clear();
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 59;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.#capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.#buckets[index];
    const bucketItem = {key: key, value: value};

    const previousValueIndex = bucket.find(key, (iter, key) => iter.key === key);

    // Add to the bucket, it didn't exist beforehand
    if (previousValueIndex === null)
      bucket.append(bucketItem);
    // Replace previous value
    else
      bucket.replaceAt(previousValueIndex, bucketItem);

    this.#filledBuckets++;

    if (this.#buckets.length * HashMap.#LOAD_FACTOR < this.#filledBuckets)
      this.#resize(this.#capacity * HashMap.#INCREMENT_FACTOR);
  }

  #resize(newCapacity) {
    const oldBuckets = this.#buckets;
    this.#capacity = Math.round(newCapacity);
    this.#filledBuckets = 0;
    this.#buckets = new Array(this.#capacity).fill(null).map(() => new LinkedList());

    for (let bucket of oldBuckets) {
      if (bucket === null)
        continue;

      for (let i = 0; i < bucket.length; i++) {
        const item = bucket.at(i).value;
        this.set(item.key, item.value);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.#buckets[index];
    const itemIndex = bucket.find(key, (iter, key) => iter.key === key);

    return (itemIndex === null) ? null : bucket.at(itemIndex).value.value;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.#buckets[index];
    const itemIndex = bucket.find(key, (iter, key) => iter.key === key);

    return (itemIndex === null) ? false : true;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.#buckets[index];
    const itemIndex = bucket.find(key, (iter, key) => {
      return iter.key === key;
    });

    if (itemIndex === null)
      return false;

    bucket.removeAt(itemIndex);

    return true;
  }

  length() {
    return this.#filledBuckets;
  }

  clear() {
    this.#capacity = HashMap.#BASE_CAPACITY;
    this.#buckets = new Array(this.#capacity).fill(null).map(() => new LinkedList());
    this.#filledBuckets = 0;
  }

  keys() {
    let keysArray = new Array();
    this.#buckets.forEach(bucket => {
      for (let i = 0; i < bucket.length; i++) {
        keysArray.push(bucket.at(i).value.key);
      }
    });

    return keysArray;
  }

  values() {
    let valuesArray = new Array();
    this.#buckets.forEach(bucket => {
      for (let i = 0; i < bucket.length; i++) {
        valuesArray.push(bucket.at(i).value.value);
      }
    });

    return valuesArray;
  }

  entries() {
    let entriesArray = new Array();
    this.#buckets.forEach(bucket => {
      for (let i = 0; i < bucket.length; i++) {
        const entry = bucket.at(i).value;
        entriesArray.push([entry.key, entry.value]);
      }
    });

    return entriesArray;
  }

  #bucketToString(linkedList) {
    let str = '';

    for (let i = 0; i < linkedList.length; i++) {
      const valueStr = '[' + linkedList.at(i).value.key + 
                      ', ' + linkedList.at(i).value.value + ']';
      str += '(' + valueStr + ') -> ';
    }

    str += 'null';

    return str;
  }

  toString() {
    let str = '';

    for (let i = 0; i < this.#buckets.length; i++) {
      const bucket = this.#buckets[i];
      str += i.toString().padStart(3) + ': ' + this.#bucketToString(bucket) + '\n';
    }

    return str;
  }
}

export { HashMap };
