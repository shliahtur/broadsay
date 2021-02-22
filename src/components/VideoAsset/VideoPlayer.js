import { useRef } from 'react';
import PlayButton from './PlayButton'
import Portal from './Portal'

const VideoPlayer = ({ isOpen, onCancel, url }) => {
    const playerRef = useRef();

    const play = () => {
        playerRef.current.play();
    }
    const pause = () => {
        playerRef.current.pause();
    }

    if (!isOpen) return null
    return (
        isOpen &&
        <Portal>
            <div className="modalOverlay" onClick={onCancel}>
                <div className="modalWindow">
                    <div className="close-btn" onClick={onCancel}></div>
                    <div className="modalBody">
                        <PlayButton
                            play={play}
                            pause={pause}
                        />
                        <video ref={playerRef} src={url} />
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default VideoPlayer