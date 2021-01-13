async function locateScalpel(nest) {
  // Your code here.
  let next,
    current = nest.name;
  for (;;) {
    next = await anyStorage(nest, current, "scalpel");
    if (next === current) {
      return current;
    } else {
      current = next;
    }
  }
}

function locateScalpel2(nest) {
  // Your code here.
  let current = nest.name;
  function loop(current) {
    return anyStorage(nest, current, "scalpel").then((next) => {
      if (next === current) {
        return current;
      }
      return loop(next);
    });
  }
  return loop(current);
}

locateScalpel(bigOak).then(console.log);
// → Butcher Shop
locateScalpel(bigOak).then(console.log);
// → Butcher Shop
