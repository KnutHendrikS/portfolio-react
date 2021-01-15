import './About.css';

const About = () => {
    return ( 
        <div className="about">
            <div className="about_data">
                <h3 className="about-title"><strong> Hello, It's me Knut</strong></h3>
                <p className="about_description">
                I am a 4th year student at Turku University of
                Applied Sciences studying Information and Communication
                Technology. I have a passion for web
                development, but what motivates me the most is learning new
                skills and technologies, and further improving existing skills.
                </p>
          </div>

          <div>
            <div className="about_data">
              <h3 className="about-title"><strong> Personal Interests</strong></h3>
              <p className="about_description">
                Besides studying and sitting infront of the computer most of the time, I have other interests which include:
              </p>

              <ul>
                <li>
                  - Fitness/Sports
                </li>
                <li>
                  - Cooking/Baking
                </li>
                <li>
                  - Games/Gamedev
                </li>
                <li>
                  - 3d modelling/Drawing
                </li>
              </ul>
            </div>
          </div>
        </div>
     );
}
 
export default About;