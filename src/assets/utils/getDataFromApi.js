export const getDataFromApi = async (endpoint) => {
    try {
        const res = await fetch(`https://sheetdb.io/api/v1/yfbfn065or6yn?sheet=${endpoint}`)
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}