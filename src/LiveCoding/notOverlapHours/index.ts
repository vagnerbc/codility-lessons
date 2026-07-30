/**
 * Input = [[100,200], [200,350], [250,300], [320, 400]]
 *
 * Format: [start, end]
 *
 * Should return: n
 *
 * [[100,200], [250,300], [320, 400]]
 *
 */

type Interval = [number, number];
type Hours = Interval[];

function maxValidHours(n: Hours) {
  if (n.length === 0) return 0;

  const valids = [];
  let lastEnd = -Infinity;

  const orderedByEnd = n.sort((a, b) => a[1] - b[1]);

  for (let [start, end] of orderedByEnd) {
    if (start >= lastEnd) {
      valids.push([start, end]);
      lastEnd = end;
    }
  }

  return {
    total: valids.length,
    valids,
  };
}

console.log(
  maxValidHours([
    [100, 200],
    [200, 350],
    [250, 300],
    [320, 400],
  ]),
);
