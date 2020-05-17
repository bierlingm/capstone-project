export const defaultFade = '90s' // Color fade time
export const testFade = '5s' // Color fade time for testing
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
