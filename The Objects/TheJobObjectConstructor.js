// Come up with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class Contractor {
  constructor(name, skill) {
    (this._name = name), (this._skill = skill);
  }

  get name() {
    return this._name;
  }
  get skill() {
    return this._skill;
  }
  sayGotJob() {
    `Hello I am ${this._name} and I got a ${this._skill} that pays`;
  }
}

class Developer extends Contractor {
  constructor(name, skill, pay) {
    super(name, skill);
    this._pay = pay;
  }

  get pay() {
    return this._pay;
  }
  sayGotJob() {
    `Hello I am ${this._name} and I got a ${this._skill} that pays ${this._pay}`;
  }
}

class Backend extends Developer {
  constructor(name, skill, pay, role) {
    super(name, skill, pay);
    this._role = role;
  }

  get role() {
    return this._role;
  }
  sayGotJob() {
    `Hello I am ${this._name} and I got a ${this._skill} that pays ${this._pay}`;
  }
}
class Frontend extends Developer {
  constructor(name, skill, pay, role) {
    super(name, skill, pay);
    this._role = role;
  }

  get role() {
    return this._role;
  }
  sayGotJob() {
    `Hello I am ${this._name} and I got a ${this._skill} that pays ${this._pay}`;
  }
}
class Fullstack extends Developer {
  constructor(name, skill, pay, role, demand) {
    super(name, skill, pay);
    this._role = role;
    this._demand = demand;
  }

  get role() {
    return this._role;
  }
  get demand() {
    return this._demand;
  }
  sayGotJob() {
    `Hello I am ${this._name} and I got a ${this._skill} that pays ${this._pay} which has ${this._demand} demand`;
  }
}

const Umesh = new Backend('dev', 'Node', '$100,000', 'Backend');
const umeshSharma = new Frontend('dev', 'React', '$100,000', 'Frontend');
const umeshSharmaAll = new Fullstack(
  'dev',
  'React , Node',
  '$200,000',
  'Fullstack',
  'High'
);

let devType = [umeshSharma, Umesh, umeshSharmaAll];

for (dev of devType) {
  dev.sayGotJob();
}
