export const defaultFade = '20s' // Color fade time
export const testFade = '1s' // Color fade time for testing
export const currentFade = defaultFade
export const defaultFont = 'Zilla Slab'
export const defaultFontSize = '36px'
export const defaultMargin = '0'
export const fullHeight = '100vh'

export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function ifXthenXElseY(x, y) {
  return x ? x : y
}
