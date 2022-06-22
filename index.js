const arrMult         = (arrA, arrB) => arrA.map(a => arrB.map(b => [a, b] ) ).flat()
const arrDiff         = (arrA, arrB) => arrA.filter(a => !arrB.includes(a) )
const arrAdd          = (arrA, arrB) => arrA.concat( arrDiff(arrB, arrA) )
const arrIntersection = (arrA, arrB) => arrA.filter(a => arrB.includes(a) )
const arrIntersects   = (arrA, arrB) => 
  arrB.some( item => arrA.includes(item)) ? true : false
const arrIncludes     = (arrA, arrB) => 
  arrB.every( item => arrA.includes(item)) ? true : false
  
  
  
const arrDiffBoth_diff_add_inter = (arrA, arrB) => 
  arrDiff(arrAdd(arrA, arrB), arrIntersection(arrA, arrB) ) 
const arrDiffBoth_add_diff_diff  = (arrA, arrB) => 
  arrAdd(arrDiff(arrA, arrB), arrDiff(arrB, arrA) ) // ?



const setOfSubsets = (arr) =>
  arr.reduce((sets, item) => sets.concat(sets.map(set => [...set, item]) ), [[]])


// replacements
const getRandom = (from, to) => Math.floor(from + Math.random() * (to - from + 1))
const getRandomItem = (arr) => arr[getRandom(0, arr.length - 1) ]

const arrShuffled = (arr) => {
  let res = [...arr]
  res.forEach( (item, ind) => {
    const ind2 = getRandom(0, res.length - 1)
    ;([res[ind], res[ind2]] = [res[ind2], res[ind]])
  })
  return res
}
const strShuffled = (str, sep=' ') => arrShuffled(str.split(sep)).join(' ')
const shuffled = (arg) => Array.isArray(arg) ? arrShuffled(arg) : strShuffled(arg)

  // export
module.exports = 
{
  arrMult,
  arrDiff,
  arrAdd,
  arrIntersection,
  arrIntersects,
  arrIncludes,
  arrDiffBoth_diff_add_inter,
  arrDiffBoth_add_diff_diff,
}