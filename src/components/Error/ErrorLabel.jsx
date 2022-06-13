import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'

export const ErrorLabel = () => {
    return (
        <div className='container-error animate__animated animate__fadeIn'>
            <div>
                <FontAwesomeIcon icon={['fas', 'exclamation-circle']} fontSize='30' />
                <h1>Ups, ha ocurrido un error</h1>
            </div>
            
            <p>Intente nuevamente o con otro pais</p>
        </div>
    )
}
