import moment from 'moment';
import Poster from '../Poster';
import PlayButton from './PlayButton';
import VideoPlayer from './VideoPlayer';
import '../../styles/Player.css'
import { useState } from 'react';

const VideoAsset = ({ createdAt, poster, name, sourceUrl }) => {

    const [isPlayerOpen, setPlayerOpen] = useState(false)

    const openVideo = () => {
        setPlayerOpen(true)
    }
    const closeVideo = (e) => {
        if (
            e.target.className === "modalOverlay" ||
            e.target.className === "close-btn" ||
            e.target.className === "modal-btn modal-cancel-btn"
        ) {
            setPlayerOpen(false)
        }
    }

    return (
        <>
            <div className='asset video-asset' onClick={openVideo}>
                <div className='asset__poster'>
                    <figure name={'play'}>
                        <button></button>
                    </figure>
                    <Poster src={poster} alt={name} />
                </div>
                <div className='asset__info'>
                    <div className='asset__name'>{name}</div>
                    <div className='asset__createdAt'>{createdAt && moment(createdAt).format('DD/MM/YYYY')}</div>
                </div>
            </div>
            <VideoPlayer
                isOpen={isPlayerOpen}
                url={sourceUrl}
                onCancel={closeVideo}
                title={name}
            />
        </>
    )
}
export default VideoAsset