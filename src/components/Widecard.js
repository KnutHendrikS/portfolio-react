import './Widecard.css'

const Widecard = ({ title, where, from, to }) => {
    return ( 
        <div className="widecard">
            <div>
                <h3><strong>{title}</strong></h3>
                <h4 className="secondtext">{where}</h4>
                <h4 className="secondtext">{from} - {to}</h4>
            </div>
        </div>
    );
}
 
export default Widecard;