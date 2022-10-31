import { useEffect, useState } from "react"
import Loading from "../components/Loading"

const Home = () => {
    const [profileInfo, setProfileInfo] =useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/Omafovbe')
            .then(resp => resp.json())
            .then(data => {
                setIsLoading(false)
                setProfileInfo(data)
                console.log(profileInfo)
                window.localStorage.setItem('repo_url',profileInfo.repos_url)
            }).catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLoading])

    return (
        <>
            {isLoading ? <Loading /> : 
            
                <div className="home top__clearance">
                    <p className="profile__bio">
                        Hi there,<br />
                        I'm <span className="username">{profileInfo.name} </span> <br />
                        {profileInfo.bio}
                    </p>
                    <img src={profileInfo.avatar_url} alt="profile-pic" />
                </div>
              }
            
        </>
    
    )
}

export default Home