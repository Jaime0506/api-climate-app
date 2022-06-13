import InfoSearch from '../InfoSearch/InfoSearch'

import { useFetch } from '../../hooks/useFetch'
import { getClimateApi } from '../../helpers/getClimateApi'
import { apiWheater } from '../../data/Keys'
import { Loading } from '../Loading/Loading'
import { useState } from 'react'
import { ErrorLabel } from '../Error/ErrorLabel'


const ResultSearch = ({ query }) => {

    const [refresh, setRefresh] = useState(false)
    const [ state ] = useFetch(query, apiWheater, getClimateApi, refresh)

    const { data, loading } = state

    console.log(data)

    return (
        <div className='container-response animate__animated animate__fadeIn'>
            <div className='container-response-api'>
                { loading ? (
                    <Loading loading={loading} />
                ) : (
                    data.id ? (
                        <InfoSearch {...data} setRefresh={setRefresh} refresh={refresh} />
                    ) : (
                        <ErrorLabel />
                    )
                )}
            </div>
        </div>
    )
}

export default ResultSearch