// Building Promise.all

function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    // Your code here.
    let results = [];
    let total = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          results[i] = res;
          total++;
          if (total === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    }
    if (promises.length === 0) {
      resolve(results);
    }
  });
}

// Test code.
function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    // Your code here.
    let results = [];
    let total = 0;

    if (promises.length === 0) {
      resolve(results);
    }

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          results[i] = res;
          total++;
          if (total === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    }
  });
}

// This should be []: []
// This should be [1, 2, 3]: [1, 2, 3]
