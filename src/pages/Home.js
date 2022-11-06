import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import SEOtag from "../components/SEOtag"
import useStore from "../store"

const Home = () => {
//   const [profileInfo, setProfileInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const userUrl = useStore((state) => state.githubUrl)
  const setRepoUrl = useStore((state) => state.setUrl)
  const setProfile = useStore((state) => state.setProfile)
  const profileInfo = useStore((state) => state.githubProfile)

  useEffect(() => {
      if (!profileInfo) {
          fetch(userUrl)
              .then((resp) => resp.json())
              .then((data) => {
                  setIsLoading(false)
                  setProfile(data)
                  console.log(data)
                  setRepoUrl(data.repos_url)
              })
              .catch((error) => console.log(error.message))
      }
    else {
        setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <>
      <SEOtag
        title="Github Portfolio App"
        description="Github Profile information of Omafovbe"
        canonical="/"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="home top__clearance">
          <p className="profile__bio">
            Hi there,
            <br />
            I'm <span className="username">{profileInfo.name} </span> <br />
            {profileInfo.bio} <br /> <br />
            <i className="fa-solid fa-location-pin"></i> {profileInfo.location}
            &nbsp; &nbsp; &nbsp;<i className="fa-brands fa-twitter"></i>{" "}
            {profileInfo.twitter_username}
          </p>
          <img src={profileInfo.avatar_url} alt="profile-pic" />
        </div>
      )}
    </>
  )
}

export default Home
