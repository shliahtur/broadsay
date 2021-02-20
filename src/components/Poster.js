const Poster = ({ src, alt }) => {
    const errorHandle = (e) => {
        e.target.onerror = null;
        e.target.src = "imgError.png"
    }
    if (src)
        return (
            <img src={src} alt={alt} onError={(e) => { errorHandle(e) }} />
        )
    else
        return <img src="imgError.png" />
}
export default Poster