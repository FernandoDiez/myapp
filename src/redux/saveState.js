export const saveState = (state) => {
  try {
    const sessionStorageState = JSON.stringify(state)
    sessionStorage.setItem('state', sessionStorageState)
  } catch (error) {
    console.warn('Error session storage state')
  }
}
