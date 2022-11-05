import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [dataInfo, setDataInfo] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setDataInfo(data))
            .catch(err => console.error('Error Occured ', err.message))
    }, [url])
    
    return [dataInfo]
}

export default useFetch