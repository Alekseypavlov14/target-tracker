export class LocalStorage {
  private constructor () {}

  static save(field: string, data: any) {
    const stringifiedData = JSON.stringify(data)
    localStorage.setItem(field, stringifiedData)
  }

  static get(field: string, defaultValue: any = []) {
    const savedData = localStorage.getItem(field)
    return JSON.parse(savedData || JSON.stringify(defaultValue))
  }
}