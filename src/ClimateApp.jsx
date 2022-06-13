import Clouds from './components/Clouds/Clouds'
import SearchBar from './components/SearchBar/SearchBar'

import './index.css'

const ClimateApp = () => {
    return (
        <>
            <Clouds />
            <div className='container-app'>
                <div className='container-title'>
                    <h1 className='title'>Busca El Clima Actual de Cualquier Pais</h1>
                    <p className='subtitle'>Obten datos meteriologicos de manera sencilla de Cualquier pais disponible</p>
                </div>
                <SearchBar />
            </div>
        </>
        
    )
}

export default ClimateApp