// Write a class called Group (since Set is already taken). 
// Like Set, it has add, delete, and has methods. 
// Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), 
// delete removes its argument from the group (if it was a member),
//  and has returns a Boolean value indicating whether its argument is a member of the group.


class Group {
  // Your code here.
  constructor() {
    this.values = [];
  }

  add(val) {
    if (!this.has(val)) {
      this.values.push(val);
    }
  }

  delete(val) {
    this.values = this.values.filter((ele) => ele !== val);
  }

  has(val) {
    return this.values.indexOf(val) > -1 ? true : false;
  }

  static from(values) {
    let group = new Group();
    for (let val of values) {
      group.add(val);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
