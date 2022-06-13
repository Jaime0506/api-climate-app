import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

export const SelectIconWeather = ({ weather }) => {

    const [nameIcon, setNameIcon] = useState(['fas', 'cloud'])

    console.log(weather)

    const selectIcon = () => {
        if (weather[0].description == 'scattered clouds')  setNameIcon(['fab', 'soundcloud']) 

        if (weather[0].description == 'overcast clouds') setNameIcon(['fas', 'cloud-meatball'])

        if (weather[0].description == 'clear sky') setNameIcon(['fas', 'sun'])

        if (weather[0].description == 'broken clouds') setNameIcon(['fas', 'cloud-rain'])

        if (weather[0].description == 'light rain') setNameIcon(['fas', 'cloud-showers-heavy'])
    }
    
    useEffect(() => {
        selectIcon()
    },[weather])

    return (
        <FontAwesomeIcon  icon={nameIcon} style={{ fontSize: 36 }} />
    )
}
