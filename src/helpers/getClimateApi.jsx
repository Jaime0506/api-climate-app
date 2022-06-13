export const getClimateApi = async (query, apikey) => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${apikey}&units=metric`
    const response = await fetch(url)
    const data = await response.json()

    const { weather, main, wind, name, coord, id } = data

    return {
        weather,
        main,
        wind,
        name,
        coord,
        id
    }

}