var xuzechuan = (function () {
  
  function reduce(col, iteratee, acc) {
    //clt.reduce（iteratee，acc)怎么写？
    if (Array.isArray(col)) {
      let i = 0;
      if (arguments.length == 2) {
        acc = col[0];
        i = 1;
      }
      for (; i < col.length; i++) {
        acc = iteratee(acc, col[i], i, col);
      }
      return acc;
    } else {
      for (let key in col) {
        acc = iteratee(acc, col[key], key);
      }
      return acc;
    }
  }
  function chunk(array, size) {
    let result = [];
    let x = Math.floor(array.length / size);
    let i = 0;
    while (i < array.length) {
      result.push(array.slice(i, i + size));
      i += size;
    }
    if (i < array.length) {
      result.push(array.slice(i));
    }
    return result;
  }
  function compact(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i]);
      }
    }
    return result;
  }
  function drop(array, n = 1) {
    let result = [];
    return (result = array.slice(n));
  }
  function dropRight(array, n = 1) {
    if (n > array.length) return [];
    let result = [];
    for (i = 0; i < array.length - n; i++) {
      result.push(array[i]);
    }
    return result;
  }
  function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  }
  function fromPairs(pairs) {
    let result = {};
    for (let i = 0; i < pairs.length; i++) {
      result[pairs[i][0]] = pairs[i][1];
    }
    return result;
  }
  function head(array) {
    return (result = array[0]);
  }
  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) return i;
    }
    return -1;
  }
  function initial(array) {
    let result = [];
    for (let i = 0; i < array.length - 1; i++) {
      result.push(array[i]);
    }
    return result;
  }
  function join(array, separator = ",") {
    let string = "";
    for (let i = 0; i < array.length; i++) {
      string += "" + array[i] + separator;
    }
    string = string.slice(0, -1);
    return string;
  }
  function last(array) {
    return array[[array.length - 1]];
  }
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] == value) return i;
    }
    return -1;
  }
  function reverse(array) {
    let l = 0;
    let r = array.length - 1;
    while (l < r) {
      let temp = array[l];
      array[l] = array[r];
      array[r] = temp;
      l++;
      r--;
    }
    return array;
  }
  function uniq(array) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (!map.has(array[i])) {
        result.push(array[i]);
      }
      map.set(array[i]);
    }
    return result;
  }
  function filter(clt, predicate) {}
  function forEach(clt, iteratee) {
    if (Array.isArray(clt)) {
      for (let i = 0; i < clt.length; i++) {
        iteratee(clt[i], i, clt);
      }
    } else {
      for (let key in clt) {
        iteratee(clt[key], key, clt);
      }
    }
  }
  function sample(collection) {
    let a = Infinity;
    while (a > collection.length - 1) {
      a = Math.round(Math.random() * 10);
    }
    return collection[a];
  }
  function size(collection) {
    if (typeof collection == "string" || Array.isArray(collection)) {
      return collection.length;
    } else if (collection && typeof collection == "object") {
      let count = 0;
      for (let key in collection) {
        count++;
      }
      return count;
    }
  }
  function isBoolean(value) {
    if (value === null) return false;
    if (typeof value === "boolean") return true;
    if (Object.prototype.toString.call(value) === "[object Boolean]") {
      return true;
    }
    return false;
  }
  function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  function repeat(string, n = 1) {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += string;
    }
    return result;
  }
  function flatten(array) {
    return [].concat(...array);
  }
  function flattenDeep(array) {
    array.reduce((acc, cur) => {
      if (!Array.isArray(cur)) {
        return acc.concat(flattenDeep(cur));
      }
      return acc.concat(cur);
    }, []);
  }
  function flattenDepth(array, depth = 1) {
    return array.reduce((acc, cur) => {
      if (Array.isArray(cur)) {
        return acc.concat(flattenDepth(cur, depth - 1));
      } else {
        return acc.concat(cur);
      }
    }, []);
  }
  return {
    chunk,
    compact,
    drop,
    dropRight,
    fill,
    fromPairs,
    head,
    indexOf,
    initial,
    join,
    last,
    lastIndexOf,
    reverse,
    uniq,
    sample,
    size,
    isBoolean,
    sum,
    repeat,
    flatten,
    flattenDeep,
    flattenDepth,
    reduce,
  };
})();
