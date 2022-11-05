import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Pagination = ({ reposList }) => {
    const numPerList = 5
    const totalPages = Math.ceil(reposList.length / numPerList)
    const [page, setPage] = useState(1)
    const [minPageRange, setMinPageRange] = useState(0)
    const [maxPageRange, setMaxPageRange] = useState(3)
    const pageLimit = 3
    let pageNumbers = null
    let minLimit = 0
    let maxLimit = 0
    const [reducedList, setReducedList] = useState(reposList)

    const pageArr = [...Array(totalPages)].map((_, index) => index + 1)

    const nextClick = () => {
        if ((page + 1) % pageLimit === 0) {
            setMaxPageRange((prev) => prev + pageLimit)
            setMinPageRange((prev) => prev + pageLimit)
          }
        setPage(prev => prev + 1)
     }
    const prevClick = () => {
        if ((page - 1) % pageLimit === 0) {
            setMaxPageRange((prev) => prev - pageLimit)
            setMinPageRange((prev) => prev - pageLimit)
          }
          setPage(prev => prev - 1)
    }
    
    const jumpPages = (ev) => {
        setPage(Number(ev.target.id))
               
    }

    pageNumbers = pageArr.slice(minPageRange, maxPageRange).map((each) => {
        
        return <button className="pageNumBtn" id={each} key={each} onClick={jumpPages}>
                {each}
            </button>
    })

    /*     
        slicing the total repo list into bits eg slice(minLimit, maxLimit)
        if page-number = 2 then
        minLimit = (2*5-5) = 5
        maxLimit = (2*5) = 10
        repo-list.slice(5,10) 
    */
    minLimit = (page * numPerList - numPerList)
    maxLimit = (page * numPerList)

    useEffect(() => {
        setReducedList(reposList.slice(minLimit, maxLimit))
    },[minLimit, maxLimit, reposList])

    
    
    const putRepoName = reducedList.map((repo) => (
        
        <div key={repo.id} className="repository">
            <Link to={`${repo.id}`}>{repo.name}</Link>
        </div>    
   
    ))
    
    return (
        <>
            <div className="repo__header">
                <p>Repositiories ({reposList.length})</p>
                
            </div>
            <div className="repo__list">
                {putRepoName}
            
            </div>
            <div className="num__btns">
            <button className="pageNumBtn" onClick={prevClick}  aria-disabled={page <= 1} disabled={page <= 1}>Prev</button>
                {pageNumbers}
                <button className="pageNumBtn" onClick={nextClick} aria-disabled={page >= totalPages} disabled={page >= totalPages}>Next</button>
            </div>
        </>
    )
}

export default Pagination