
import Portal from './Portal'

const VideoPlayer = ({ isOpen, onCancel, title, url }) => {
    if (!isOpen) return null
    return (
        isOpen &&
        <Portal>
            <div className="modalOverlay" onClick={onCancel}>
                <div className="modalWindow">
                    <div className="modalHeader">
                        <div className="modalTitle">{title}</div>
                        <div className="close-btn" name="times" onClick={onCancel}></div>
                    </div>
                    <div className="modalBody">
                    <video src={url} autoPlay={true}/>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default VideoPlayer