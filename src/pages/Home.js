import { useState } from "react"
import Loading from "../components/Loading"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            {isLoading ? <Loading /> : 
            
                <div className="home top__clearance">
                    Home Page
                    <p>dfdf</p>
                </div>
              }
            
        </>
    
    )
}

export default Home