const Counter = ({ total }) => {
    return (
        <div className='counter-wrapper'>
            <div className='counter'>
                <div className='counter__caption'>Assets</div>
                <div className='counter__value'>{total}</div>
            </div>
        </div>
    )
}
export default Counter;