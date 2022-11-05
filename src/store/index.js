// Implement global state with zustand
import create from "zustand"

const userProfile = "https://api.github.com/users/Omafovbe"
// creating the state
const useStore = create((set) => ({
  githubUrl: userProfile,
  githubProfile: null,
  repoUrl: null,
  gitHubRepos: [],
  isLoading: false,
  // use the fetch API to fetch all github repository of the user
  fetch: async (url) => {
    set({ isLoading: true })
    const resp = await fetch(url)
    set({
      gitHubRepos: await resp.json(),
      isLoading: false,
    })
  },
  setUrl: (url) => set({ repoUrl: url }),
  setProfile: (data) => set({githubProfile: data})
}))

export default useStore
