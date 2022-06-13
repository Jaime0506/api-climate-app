import { useEffect, useState } from "react"

export const useFetch = (query, apiKey, callback, refresh) => {

    // const apiKey = `0298be00b4abb5c401cbc362a5037b7a`

    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        
        callback(query, apiKey)
        .then(data => {
            
            if (data?.id) {
                setState({
                    data: data,
                    loading: false
                })
            } else {
                setState({
                    data: 'Erro',
                    loading: false
                })
            }
        })
    },[query, refresh])

    return [ state ]
}


// 0298be00b4abb5c401cbc362a5037b7a