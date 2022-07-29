type SuperPrint = <T, M>(a: T[], b: M) => T;

const superPrint: SuperPrint = (a) => a[0];

const a = superPrint([1, 2, 3, 4], false);
const b = superPrint([true, false, true], 1);
const c = superPrint(["a", "b", "c"], "hi");
const d = superPrint([1, 2, true, false, "hello"], 1);
c.toUpperCase();

// type Player<E> = {
//   name: string;
//   extraInfo: E;
// };
// type NicoExtra = {
//   favFood: string;
// };

// type NicoPlayer = Player<NicoExtra>;

// const nico: NicoPlayer = {
//   name: "nico",
//   extraInfo: {
//     favFood: "kimchi",
//   },
// };

// const a = "hello";
// const b = "bye";

// function myName(a: string, b: string): string[] {
//   return [a, b];
// }
