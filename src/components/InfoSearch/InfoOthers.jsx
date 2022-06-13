const InfoOthers = ({ main }) => {
    return (
        <div className="container-info-climate">
            <div className='container-info-wind'>
                <div>
                    <h3>Others</h3>
                </div>
                <div className='container-wind-speed'>
                    <p>Humidity: {main.humidity}</p>
                    <p>Temp: {main.temp}°C</p>
                    <p>Temp Max: {main.temp_max}°C</p>
                    <p>Temp Min: {main.temp_min}°C</p>
                </div>
            </div>
        </div>
    )
}

export default InfoOthers