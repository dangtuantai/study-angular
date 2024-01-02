export const deepClone = function <T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T;
};

export const simpleEqual = (a: any, b: any) => {
  if (a === b) return true;

  if (!a && !b) return true;

  if (a && b === undefined) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; ) if (!simpleEqual(a[i], b[i])) return false;
      return true;
    }

    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;

    for (i = length; i-- !== 0; ) {
      var key = keys[i];

      if (!simpleEqual(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
};
