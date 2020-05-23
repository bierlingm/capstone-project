export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}
