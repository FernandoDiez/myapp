export const loadState = () => {
  try {
    const sessionStorageState = sessionStorage.getItem('state')
    if (sessionStorageState === null) {
      return undefined
    }
    return JSON.parse(sessionStorageState)
  } catch (error) {
    return undefined
  }
}
