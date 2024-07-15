import url from '../Images/thartharthar.png';
import imgUrl from '../Images/photoAb.png';

const Home=()=>{
    return(
    <div id="home">
    <div className="root1">
    <div className="user">
        <div className="textUser">
            <p className="leftAlign">THE JOY OF DRIVING</p>
            <br/>
            <p className="leftAlign">MULTIPLIED</p>
        </div>
        <div className='bottleDiv'>
        <img className='bottle' src={imgUrl}></img>
        </div>
    </div>
    <div className="info">
        <img className='carImage' src={url}></img>
    </div>
    </div>
    </div>
    );
}
export default Home;