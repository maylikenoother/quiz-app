import PropTypes from 'prop-types'
export default function Intro(props) {
    return (
        <div className="intro">
            <h1 className="intro-header">Quizzical</h1>
            <span className="intro-description">This a React app quiz by May</span>
            <button className="start-button" onClick={() => props.start()}>Start Quizzical</button>
        </div>
    )
}

Intro.propTypes = {
    start:PropTypes.bool
}