const sample: number[] = [6, 19, 29, 32, 1, 6, 67, 3, 9, 187];
const target: number = 38;

/**
 * Time Complexity = O(n²) - neeted fors
 * Space Complexity = O(¹)
 * Not performatic
 */
function brute_force_solve(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

/**
 * Time Complexity = O(n)
 * Space Complexity = O(n)
 */
function solve(numbers: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(numbers[i], i);
  }

  return [];
}

/**
 * Generate Pairs = o(k)
 * k = combinations found
 * Time Complexity = O(n + k)   -> can be O(n²) case has n combinations ([0,0,0,0] - target 0)
 * Space Complexity = O(n + k)
 */
function solveAll(numbers: number[], target: number): number[][] {
  const seen = new Map<number, number[]>();
  const result: number[][] = [];

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    const matches = seen.get(complement) ?? [];

    for (const index of matches) {
      result.push([index, i]);
    }

    const indexes = seen.get(numbers[i]) ?? [];
    indexes.push(i);
    seen.set(numbers[i], indexes);
  }

  return result;
}

function main() {
  const bruteForce = brute_force_solve(sample, target);
  const mapSolution = solve(sample, target);

  const mapSolutionAll = solveAll([6, 19, 29, 32, 1, 6, 67, 3, 9, 187], 38);

  console.log({ bruteForce, mapSolution, mapSolutionAll });
}

main();
