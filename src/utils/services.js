export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function ifXThenXElseY(x, y) {
  return x ? x : y
}
