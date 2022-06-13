import { useFetch } from '../../hooks/useFetch'

import { getTimeZoneApi } from '../../helpers/getTimeZoneApi'
import { apiTimeZone } from '../../data/Keys'

import InfoTitle from './InfoTitle'
import InfoWeather from './InfoWeather'
import InfoWind from './InfoWind'
import InfoOthers from './InfoOthers'

import './index.css'

const InfoSearch = ({ coord, main, name, weather, wind, setRefresh, refresh }) => {

    const [ state ] = useFetch(coord, apiTimeZone, getTimeZoneApi, refresh)

    const { data, loading } = state

    return (
        <div className='container-info animate__animated animate__fadeIn'>
            <InfoTitle name={name} date_time_txt={data.date_time_txt} setRefresh={setRefresh} />
            <InfoWeather weather={weather} />
            <InfoWind wind={wind} />
            <InfoOthers main={main} />
        </div>
    )
}

export default InfoSearch