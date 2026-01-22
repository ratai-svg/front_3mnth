class Animal {
  #action;

  constructor(name) {
    this.name = name;
    this.#action = "ничего не делает";
  }

  doAction(action) {
    this.#action = action;
  }

  makeSound() {
    return "Животное издаёт звук";
  }

  getInfo() {
    return `${this.name} сейчас ${this.#action} и издаёт звук: ${this.makeSound()}`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Гав-гав";
  }

  run() {
    this.doAction("бежит");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Мяу";
  }

  sleep() {
    this.doAction("спит");
  }
}

class Bird extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Чирик-чирик";
  }

  fly() {
    this.doAction("летит");
  }
}
const dog = new Dog("Рекс");
const cat = new Cat("Мурка");
const bird = new Bird("Кеша");
dog.run();
cat.sleep();
bird.fly();

console.log(dog.getInfo());  
console.log(cat.getInfo());   
console.log(bird.getInfo());  

// for commit 