class student {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let student1 = new student("Jenny", 2010);
console.log(student1.name + " was born in " + student1.year + ". And her age is " + student1.age());