import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoTitle = ({ name, date_time_txt, setRefresh }) => {
    return (
        <div className="container-info-title">
            <div style={{ flex: 1 }}>
                <h1>{name}</h1>
                <p>{date_time_txt}</p>
            </div>
            <FontAwesomeIcon icon={['fas', 'sync-alt']} style={{ fontSize: 20 }} className='refresh-deg' onClick={() => setRefresh(refresh => !refresh)}/>
        </div>
    )
}

export default InfoTitle