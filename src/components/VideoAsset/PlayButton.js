import { useState } from 'react'
const PlayButton = ({ play, pause }) => {
    const [isPlay, setPlay] = useState(false)
    const handleClick = () => {
        if (isPlay) {
            pause()
        }
        else {
            play()
        }
        setPlay(c => !c)
    }
    return (
        <figure name={isPlay ? 'pause' : 'play'}>
            <button
                onClick={handleClick}
            ></button>
        </figure>
    )
}
export default PlayButton