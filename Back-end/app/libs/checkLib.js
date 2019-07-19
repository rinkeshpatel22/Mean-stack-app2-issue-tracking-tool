/* Library to check null or empty value */
'use srict'

/* Private method to trim empty space */
let trim = (x) => {
  let value = String(x)
  return value.replace(/^\s+|\s+$/gm, '')
}
/* Methos to check null ot empty value */
let isEmpty = (value) => {
  if (value === null || value === undefined || trim(value) === '' || value.length === 0) {
    return true
  } else {
    return false
  }
}

module.exports = { isEmpty: isEmpty };
