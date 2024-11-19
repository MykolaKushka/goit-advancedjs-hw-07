/*
  Ви створюєте гру, де є персонажі з різними ролями.
  Зараз ви працюєте над класом Wizard, який має реалізовувати два інтерфейси - ICharacter та ISpellCaster.

  Визначте інтерфейси ICharacter та ISpellCaster так, щоб вони відповідали вимогам класу Wizard. 
  Інтерфейс ICharacter повинен включати властивості name і level, і навіть метод introduce і levelUp. 
  Інтерфейс ISpellCaster повинен включати метод castSpell.
*/

// Define the ICharacter interface
interface ICharacter {
  name: string; // Character's name
  level: number; // Character's level
  introduce(phrase: string): void; // Method to introduce the character
  levelUp(): void; // Method to level up the character
}

// Define the ISpellCaster interface
interface ISpellCaster {
  castSpell(): void; // Method to cast a spell
}

// Implement the Wizard class using both interfaces
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(`${phrase}, ${this.name}`);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// Test the Wizard class
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard'); // Output: I am the mighty wizard, Merlin
wizard.castSpell(); // Output: Casting a spell, behold my power!
wizard.levelUp(); // Output: Level up! New level is 16

export {};
