# HashMap
HashMap is one the most useful complex data structure in computer science. The idea of hashmap is to having logic and a real memory handle storage unlike a linked list and array that are fully memory-wise storage. HashMap or HashTable uses a memory-wise (buckets), which are usually an array or linked list and a logic (hash function) to create a data structure which has an average complexity of O(1) for search, access, insertion, and deletion. Isn't that exciting, let's implement it. This project is a milestone for the [TOP](https://www.theodinproject.com/lessons/javascript-hashmap) curriculum

## Requirement & Features
HashMap class should have at least two properties or variables for `load factor` and `capacity` of size 16. Then proceed to create the following methods

1. `hash(key)` takes a string key and produces a hash code with it.

2. `set(key, value)` takes two arguments: the first is a key and the seconf is a value to associated with the key. if the key already exists in the hash map, then the old value associated with it should be overwritten by the  new one.

3. `get(key)` takes a key as an argument and returns a boolean based on whether or not the key is in the hash map

4. `has(key)` takes a key as an argument and returns a boolean based on whether or not the key is in the hash map

5. `remove(key)` takes a key as an argument. if the given key is in the hash map, it should remove the entry with that key then return `true`. if the key isn't in the hash map, it should return `false`

6. `length()` returns the numbers of stored keys in the hash map

7. `clear()` removes all entries in the hash map

8. `keys()` returns an array containing all the keys (not values) inside the hash map

9. `values()` returns an array containing all the values (not keys) inside the hash map

10. `entries()` returns an array that contains each key-value pair in their own arrays, for example

## Getting Started

### Prerequisite
1. git
2. nodeJS

### Installation & Setup

1. clone this repository

```bash
git clone <repo_url>
cd commit
```

2. Install the necessary dependencies
```bash
npm install
```

4. Check package.json for other available commands

## Technologies Used
- JS & NodeJS
- Jest

## Credit & Contributions

- [Myself](https://github.com/topSimpa)
