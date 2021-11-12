import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { REPOSITORIES } from "../../apollo-client/repositories/queries";
import "./repositories.css";
type RepositoriesProps = {};

const Repositories: React.FC<RepositoriesProps> = () => {
  const { loading, error, data } = useQuery(REPOSITORIES);
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    if (data) {
      setRepositories(data.user.repositories.nodes);
    }
  }, [data]);
  return (
    <div className="repositories-container">
      <h2 className="repositories-name">Repositories</h2>
      <div className="table-titles">
        <div style={{ marginRight: "20px" }} className="column-title">
          #
        </div>
        <div style={{ marginRight: "250px" }} className="column-title">
          Repository
        </div>
        <div style={{ marginRight: "50px" }} className="column-title">
          Commits
        </div>
        <div style={{ marginRight: "40px" }} className="column-title">
          Team
        </div>
        <div style={{ marginRight: "100px" }} className="column-title">
          Language
        </div>
        <div style={{ marginRight: "20px" }} className="column-title">
          Timeline
        </div>
      </div>
      <div className="table">
        {repositories.map((repo: any, index) => {
          return (
            <div className="table-item">
              <div className="top-section">
                <div className="section-line">
                  <div style={{ marginRight: "20px" }} className="index">
                    {index + 1}
                  </div>
                  <div style={{ marginRight: "250px" }} className="repo-name">
                    {repo.name}
                  </div>
                  <div style={{ marginRight: "50px" }} className="repo-commits">
                    {repo.commits}
                  </div>
                  <div style={{ marginRight: "40px" }} className="repo-commits">
                    {repo.commits}
                  </div>
                  <div className="primary-language">
                    {repo.primaryLanguage.name}
                    <div
                      style={{ backgroundColor: repo.primaryLanguage.color }}
                      className="language-color"
                    ></div>
                  </div>
                </div>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: repo.descriptionHTML }}
                />
              </div>

              <div className="ressource-path">{repo.resourcePath}</div>
              <div className="languages">
                {repo.languages.nodes.map((language: any, key: any) => {
                  return (
                    <div className="language-item">
                      {language.name}
                      <div
                        style={{ backgroundColor: language.color }}
                        className="language-color"
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Repositories;
