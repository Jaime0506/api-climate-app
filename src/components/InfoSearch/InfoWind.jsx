import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const InfoWind = ({ wind }) => {
    return (
         <div className="container-info-climate">
            <div className='container-info-wind'>
                <div>
                    <h3>Wind</h3>
                </div>
                <div className='container-wind-speed'>
                    <p>Speed: {wind.speed} M/s</p>
                    <FontAwesomeIcon icon={['fas', 'wind']} className='speed-deg' />
                    <p>Direction: </p>
                    <FontAwesomeIcon icon={['fas', 'angle-right']} style={{ transform: `rotate(-${wind.deg}deg)` }} />
                </div>
            </div>
        </div>
    )
}

export default InfoWind