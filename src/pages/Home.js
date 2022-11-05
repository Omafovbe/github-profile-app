import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import useStore from "../store"

const Home = () => {
    const [profileInfo, setProfileInfo] =useState({})
    const [isLoading, setIsLoading] = useState(true)
    const userUrl = useStore(state => state.githubUrl)
    const setRepoUrl = useStore(state => state.setUrl)

    useEffect(() => {
        fetch(userUrl)
            .then(resp => resp.json())
            .then(data => {
                setIsLoading(false)
                setProfileInfo(data)
                console.log(data)
                setRepoUrl(profileInfo.repos_url)
            }).catch(error => console.log(error.message))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLoading])

    return (
        <>
            {isLoading ? <Loading /> : 
            
                <div className="home top__clearance">
                    <p className="profile__bio">
                        Hi there,<br />
                        I'm <span className="username">{profileInfo.name} </span> <br />
                        {profileInfo.bio} <br /> <br />

                        <i class="fa-solid fa-location-pin"></i> {profileInfo.location}&nbsp; &nbsp; &nbsp;<i class="fa-brands fa-twitter"></i> {profileInfo.twitter_username}
                    </p>
                    <img src={profileInfo.avatar_url} alt="profile-pic" />
                </div>
              }
            
        </>
    
    )
}

export default Home