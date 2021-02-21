import moment from 'moment';
import Poster from '../components/Poster';
import PlayButton from './PlayButton';
import VideoPlayer from './VideoPlayer';
import '../styles/Player.css'
import { useState } from 'react';

const VideoAsset = ({ createdAt, poster, name, sourceUrl }) => {

    const [isPlayerOpen, setPlayerOpen] = useState(false)

    const openVideo = () => {
        setPlayerOpen(true)
    }
    const closeVideo = () => {
        setPlayerOpen(false)
    }

    return (
        <>
            <div className='asset video-asset' onClick={openVideo}>
                <div className='asset__poster'>
                    <PlayButton />
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
            />
        </>
    )
}
export default VideoAsset