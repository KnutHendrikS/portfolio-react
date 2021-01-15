import './Education.css';
import Widecard from '../components/Widecard';

const Education = () => {
    return ( 
        <div className="education">
            <h2 className="title">Education</h2>
            <Widecard title="Bachelor of Engineering" where="Turku University of Applied Sciences" from="2017" to="2021(expected graduation year)"/>
            <Widecard title="Eramus+ exchange" where="Hamburg University of Applied Sciences" from="2019" to="2020"/>
        </div>
     );
}
 
export default Education;