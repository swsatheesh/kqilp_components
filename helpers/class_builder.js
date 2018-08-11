/**
 * The classBuilder helper make combining youe classes easier
 * @param  {[type]} args [description]
 * @return {[type]}      [description]
 */
export default (...args) => args.reduce((prev, cur) => {
  if (!cur) {
    return prev;
  }
  if (Array.isArray(prev)) {
    const comb = prev.reduce((p, c) => `${p} ${c}`);
    return `${comb} ${cur}`;
  }
  return `${prev} ${cur}`;
});
