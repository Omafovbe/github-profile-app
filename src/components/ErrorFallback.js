const ErrorFallback = ({ error }) => {
    return (
        <div className="error__msg">
            <p>Oops! Something is sure wrong with our code:</p>
            <p style={{ color: 'red' }}>{ error.message }</p>
        </div>
    )
}

export default ErrorFallback