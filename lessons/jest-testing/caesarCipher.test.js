const caesarCipher = require('./caesarCipher');

test('simple sentences', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('sentences with punctuation', () => {
  expect(caesarCipher('abcdef,ghijk[lmn`op]qrs.t;uvwxyz', 1)).toBe('bcdefg,hijkl[mno`pq]rst.u;vwxyza');
  expect(caesarCipher('defend, the east. wall []of ;the castle', 1)).toBe('efgfoe, uif fbtu. xbmm []pg ;uif dbtumf');
});

test('upper case sentences', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz'.toUpperCase(), 1)).toBe('bcdefghijklmnopqrstuvwxyza'.toUpperCase());
  expect(caesarCipher('defend the east wall of the castle'.toUpperCase(), 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf'.toUpperCase());
});

test('sentences with punctuation in upper case', () => {
  expect(caesarCipher('abcdef,ghijk[lmn`op]qrs.t;uvwxyz'.toUpperCase(), 1)).toBe('bcdefg,hijkl[mno`pq]rst.u;vwxyza'.toUpperCase());
  expect(caesarCipher('defend, the east. wall []of ;the castle'.toUpperCase(), 1)).toBe('efgfoe, uif fbtu. xbmm []pg ;uif dbtumf'.toUpperCase());
});

test('mixed upper and lower case sentences with punctuation', () => {
  expect(caesarCipher('ABCDEF,ghijk[lmn`op]qrs.T;uvwxyz', 1)).toBe('BCDEFG,hijkl[mno`pq]rst.U;vwxyza');
  expect(caesarCipher('DEFEnD, THE east. Wall []of ;the castle', 1)).toBe('EFGFoE, UIF fbtu. Xbmm []pg ;uif dbtumf');
});
