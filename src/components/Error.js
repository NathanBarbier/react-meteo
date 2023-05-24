const Error = (error) => {
    return (
        <>
            <div className='alert alert-danger' role='alert'>
                <p>error : {error}</p>
            </div>
        </>
    )
}

export default Error
