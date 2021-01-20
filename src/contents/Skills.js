import './Skills.css';

const Skills = () => {
    return ( 
        <div className="skills">
            <h1>Skills</h1>
            <div className="skills_content">
              <div className="col">
                <h3>Programming / other skills</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Java</li>
                  <li>Unity/C#</li>
                  <li>Blender 3D</li>
                  <li>Photoshop</li>
                </ul>
              </div>
              <div className="col">
                <h3>Language skills</h3>
                <ul>
                  <li>English - Excellent</li>
                  <li>Finnish - Native tongue</li>
                  <li>German - Good</li>
                  <li>Swedish - Fair</li>
                </ul>
              </div>
            </div>
        </div>
     );
}
 
export default Skills;