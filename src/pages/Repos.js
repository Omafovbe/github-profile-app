import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useStore from '../store';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import SEOtag from '../components/SEOtag';

const Repos = () => {
  const navigate = useNavigate();
  const repos = useStore((state) => state.gitHubRepos);
  const fetchRepos = useStore((state) => state.fetch);
  const isLoading = useStore((state) => state.isLoading);

  const repoUrl = useStore((state) => state.repoUrl) ?? null;

  useEffect(() => {
    if (!repoUrl) navigate('/');
    if (!repos || repos.length === 0) {
      fetchRepos(repoUrl + '?per_page=100');
      // .then(resp => resp.json())
      // .then(data => {
      //     setReposList(data)
      //     console.log(data, )
      // }).catch(err => console.log("fetch Error"))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SEOtag
        title="Github Repository"
        description="Repository of user worked upon over time"
        canonical="/repos"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="repos top__clearance">
          <div className="repo__display">
            <Outlet />
          </div>
          <div>
            <Pagination reposList={repos} />
          </div>
        </div>
      )}
    </>
  );
};

export default Repos;
