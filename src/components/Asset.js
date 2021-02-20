import moment from 'moment';
import Poster from '../components/Poster';

const Asset = ({ sourceUrl, createdAt, poster, name, playableUrl }) => {

    const handleClick = () => {
        window.location.href = sourceUrl
    }
    return (
        <div className='asset' onClick={handleClick}>
            <div className='asset__poster'>
                <Poster src={poster} alt={name} />
            </div>
            <div className='asset__info'>
                <div className='asset__name'>{name}</div>
                <div className='asset__createdAt'>{createdAt && moment(createdAt).format('DD/MM/YYYY')}</div>
            </div>
        </div>
    )
}
export default Asset