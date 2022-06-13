import { SelectIconWeather } from "../SelectIconWeather"

const InfoWeather = ({ weather }) => {
    return (
        <div className="container-info-climate">
            <div className='container-info-weather'>
                <div>
                    <h3>Weather</h3>
                    <p>{weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}</p>
                </div>
                <SelectIconWeather weather={weather} />
            </div>
        </div>
    )
}

export default InfoWeather