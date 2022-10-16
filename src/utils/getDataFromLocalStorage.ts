export function getDataFromLocalStorage(field: string, defaultValue: any = []) {
  return JSON.parse(localStorage.getItem(field) || JSON.stringify(defaultValue))
}