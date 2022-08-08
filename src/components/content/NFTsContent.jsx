import styles from "./NFTsContent.module.css";
import { useEffect, useState } from "react";

const NFTsContent = () => {
  const [isMount, setIsMount] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (isMount) {
      setIsMount(false);
      return;
    }

    fetch("https://francesco-api.herokuapp.com/projects")
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => console.log(error));
  });

  return (
    <div>
      <p style={{ color: "white", width: "100%", textAlign: "center" }}>
        {projects}
      </p>
    </div>
  );
};

export default NFTsContent;
