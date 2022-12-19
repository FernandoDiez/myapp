export const fetchData = async (url) => {
  try {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
  } catch (error) {
    console.warn(error)
  }
}