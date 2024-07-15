import imgSpray from '../Images/fileSpray.png'
import background from '../Images/background.avif'

const Contact=()=>{
    return(
    <div id="contact" style={{backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}} className='about'>
    <div className='inlineSpray'>
        <div className="user3">
            <div className="textUser">
                <div span="leftAlign">TYRE</div>
                <div span="leftAlign">SHINER</div>
            </div>
        </div>
        <div>
        <img className='spray' src={imgSpray}></img>
        <p className='pet'>Turn the wheel into a symbol of attraction </p>
        </div>
    </div>
    </div>
    );
}
export default Contact;