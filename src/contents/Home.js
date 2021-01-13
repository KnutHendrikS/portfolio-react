import './Home.css';
import { SocialIcon } from "react-social-icons";

const Home = () => {
    return ( 
        <div className="home">
          <div className="home_data">
            <h1 className="home_title">Knut Hendrik Schnur</h1>
            <span className="home_profession">ICT Student</span>
            <div>
                <SocialIcon url="https://www.linkedin.com/in/knut-hendrik-schnur-4aa737158" target="_blank" style={{margin: 10}} />
                <SocialIcon url="https://github.com/KnutHendrikS" target="_blank" style={{ margin: 10}} />
            </div>
          </div>
        </div>
     );
}
 
export default Home;