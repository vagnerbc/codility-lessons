// run `node index.js` in the terminal

const fizzBuzz = (n: number) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    result.push(output !== "" ? output : i);
  }
  return result.join("\n");
};

// console.log(fizzBuzz(15))

interface Rule {
  validate(n: number): boolean;
  getLabel(): string;
}

class Fizz implements Rule {
  validate(n: number): boolean {
    return n % 3 === 0;
  }

  getLabel() {
    return "Fizz";
  }
}

class Buzz implements Rule {
  validate(n: number): boolean {
    return n % 5 === 0;
  }

  getLabel() {
    return "Buzz";
  }
}

class Validator {
  constructor(private rules: Rule[]) {}

  exec(n: number) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      let output = "";
      for (let rule of this.rules) {
        if (rule.validate(i)) {
          output += rule.getLabel();
        }
      }

      result.push(output !== "" ? output : i);
    }

    return result.join("\n");
  }
}

function main() {
  const validator = new Validator([new Fizz(), new Buzz()]);

  console.log(validator.exec(15));
}

main();
