function Timestamp(props) {
console.log(props)
    return (
        <span className="timestamp">{props.time.timestamp}</span>
    )
}

export default Timestamp