export const getTimeZoneApi = async (location, apiKey) => {

    const url = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${location.lat}&long=${location.lon}`
    const response = await fetch(url)
    const data = await response.json()

    const { date_time_txt, time_12, date} = data

    return  {
        time_12,
        date_time_txt,
        date
    }
}