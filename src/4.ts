class Key {
  // Private property to store the signature
  private signature: number;

  constructor() {
    // Generate a random signature
    this.signature = Math.random();
  }

  // Method to get the signature
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  // Private property to store the key
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  // Method to get the person's key
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  // Properties for door status and house key
  protected door: boolean = false; // Closed by default
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  // Method to allow a person to enter if the door is open
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} entered the house.`);
    } else {
      console.log("The door is closed. Cannot enter.");
    }
  }

  // Abstract method for opening the door
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  // Implementation of the openDoor method
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is now open.");
    } else {
      console.log("Wrong key! The door remains closed.");
    }
  }
}

const key = new Key(); 
const house = new MyHouse(key); 
const person = new Person(key);

house.openDoor(person.getKey()); // Person uses their key to open the door
house.comeIn(person); // Person enters the house

export {};
