import './index.css'

export const Loading = ({ loading }) => {
    if (loading) {
        return (
            <div className='spinner-container'>
                <div className='loading-spinner'></div>
            </div>
        )
    }
}
