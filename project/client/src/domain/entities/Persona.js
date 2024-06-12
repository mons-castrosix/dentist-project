export class Persona {
    constructor(name) {
      this.name = name;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }

  