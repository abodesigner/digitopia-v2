import { useState } from "react";
import Data from "../../projectsData.js";
import Project from "../project/Project.jsx";
import "./projects.css";
const Projects = () => {

    const [item, setItem] =useState(Data);

  return (
    <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-4 fw-bold py-5">أعمالنا</h1>

                    {/** Card UI component */}
                    <Project item={item} />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Projects