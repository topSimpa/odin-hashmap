import HashMap from "./hashmap.js";

describe("hash map test", () => {
  test("setting has the intended side effect for first input", () => {
    const hashMap = new HashMap();
    const key = "apple";
    const value = "red";

    hashMap.set(key, value);
    expect(hashMap.length()).toBe(1);
    expect(hashMap.has(key)).toBeTruthy();
    expect(hashMap.get(key)).toBe(value);
    expect(hashMap.keys()).toEqual([key]);
    expect(hashMap.entries()).toEqual([[key, value]]);
    expect(hashMap.values()).toEqual([value]);
  });

  test("setting a key that is already on the map overwrites it value", () => {
    const hashMap = new HashMap();
    const key = "apple";
    const valOne = "red";
    const valTwo = "1500";

    hashMap.set(key, valOne);
    hashMap.set(key, valTwo);

    expect(hashMap.length()).toBe(1);
    expect(hashMap.has(key)).toBeTruthy();
    expect(hashMap.get(key)).toBe(valTwo);
    expect(hashMap.keys()).toEqual([key]);
    expect(hashMap.entries()).toEqual([[key, valTwo]]);
    expect(hashMap.values()).toEqual([valTwo]);
  });

  test("removing key in map", () => {
    const hashMap = new HashMap();
    const key = "apple";
    const val = "1500";

    hashMap.set(key, val);

    expect(hashMap.remove(key)).toBeTruthy();
    expect(hashMap.length()).toBe(0);
    expect(hashMap.get(key)).toBeUndefined();
    expect(hashMap.has(key)).toBeFalsy();
  });

  test("clearing a map", () => {
    const hashMap = new HashMap();

    hashMap.set("apple", "red");
    hashMap.set("banana", "yellow");
    hashMap.set("carrot", "orange");
    hashMap.set("dog", "brown");

    expect(hashMap.length()).toBe(4);

    hashMap.clear();

    expect(hashMap.length()).toBe(0);
    expect(hashMap.entries()).toEqual([]);
  });

  test("methods void state", () => {
    const hashMap = new HashMap();

    expect(hashMap.get("apple")).toBeUndefined();
    expect(hashMap.has("apple")).toBeFalsy();
    expect(hashMap.remove("apple")).toBeFalsy();
  });

  test("testing growth response", () => {
    const hashMap = new HashMap();

    hashMap.set("apple", "red");
    hashMap.set("banana", "yellow");
    hashMap.set("carrot", "orange");
    hashMap.set("dog", "brown");
    hashMap.set("elephant", "gray");
    hashMap.set("frog", "green");
    hashMap.set("grape", "purple");
    hashMap.set("hat", "black");
    hashMap.set("ice cream", "white");
    hashMap.set("jacket", "blue");
    hashMap.set("kite", "pink");
    hashMap.set("lion", "golden");

    console.log(hashMap.entries());
    expect(hashMap.length()).toBe(12);
    expect(hashMap.capacity).toBe(16);

    hashMap.set("apple", "1500");
    expect(hashMap.length()).toBe(12);
    expect(hashMap.capacity).toBe(16);

    hashMap.set("moon", "silver");
    expect(hashMap.length()).toBe(13);
    expect(hashMap.capacity).toBeGreaterThan(16);
  });
});
