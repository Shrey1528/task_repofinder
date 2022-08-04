import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Information from "../components/main/Information";
import RepoBar from "../components/main/RepoBar";
import RepoList from "../components/main/RepoList";
import "../pages/Repository.css";
import Loader from "../components/main/Loader";

const Repository = () => {
  const { name } = useParams();

  const [repo, setRepo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getRepo = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${name}`);
      console.log(res.data);
      if (res.status === 200) {
        setRepo(res.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRepo();
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <div className="main">
        <div className="sub1">
          <Information
            avatar={repo.avatar_url}
            name={repo.login}
            bio={repo.bio}
            blog={repo.blog}
            location={repo.location}
            twitter={repo.twitter_username}
            profile={repo.html_url}
          />
        </div>
        <div className="sub2">
          <RepoBar
            followers={repo.followers}
            following={repo.following}
            no_repo={repo.public_repos}
          />

          <RepoList user={name} />
        </div>
      </div>
    </>
  );
};

export default Repository;
