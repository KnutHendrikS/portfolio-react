import './Projects.css';
import logo from './assets/logo.png';

const Projects = () => {
    return ( 
        <div className="projects">
            <div className="projects_content">
              <div className="project-text">
                <h3 className="projects_title">Todo List</h3>
                <p className="projects_description">Mark your daily tasks with this app</p>
                <a href="https://loving-einstein-1c4f68.netlify.app/" rel="noreferrer" target="_blank" class="project_button">Live Demo</a>
                <a href="https://github.com/KnutHendrikS/Todo-List" rel="noreferrer" target="_blank" class="project_button">Source Code</a>
              </div>
                <img src={logo} alt="todolist app"/>
            </div>
        </div>
     );
}
 
export default Projects;