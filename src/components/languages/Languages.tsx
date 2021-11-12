import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { LANGUAGES } from "../../apollo-client/languages/queries";
import "./languages.css";
type LanguagesProps = {};

const Languages: React.FC<LanguagesProps> = () => {
  const { loading, error, data } = useQuery(LANGUAGES);
  const [languages, setLanguages] = useState<any>([]);
  useEffect(() => {
    if (data) {
      setLanguages(data.repositoryOwner.repositories.nodes);
    }
  }, [data]);
  console.log(languages);

  return (
    <div className="languages-container">
      <h2 className="languages-name">Languages</h2>
      <div className="data-container">
        <div className="left-col">
          {languages &&
            languages.map((repo: any, index: any) => (
              <div className="grid-item">
                {repo.primaryLanguage.name}
                <div
                  style={{ backgroundColor: repo.primaryLanguage.color }}
                  className="language-color"
                ></div>
              </div>
            ))}
        </div>
        <div className="right-col">
          <PieChart
            animate
            style={{ width: "50%" }}
            data={[
              { title: "One", value: 10, color: "rgb(110, 76, 19)" },
              { title: "Two", value: 15, color: "rgb(193, 241, 46)" },
              { title: "Three", value: 20, color: "#E20E90" },
              { title: "Three", value: 20, color: "#067A6B" },
              { title: "Three", value: 20, color: "rgb(23, 134, 0)" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
export default Languages;
