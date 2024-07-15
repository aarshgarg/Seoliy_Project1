import background from '../Images/carCleanFinal.jpg';
import url from '../Images/file.png';
import imgUrl from '../Images/file1.png'

const About=()=>{
    return(
    <div id="about" style={{backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"}} className='about'>
        {/* <img className='aboutImage' src={imgUrl}></img> */}
        {/* <div className='overlayDiv'>
            jfklajlfks
            </div> */}
            <div className='onlyText'>
                Car Fuel is a brand for car accessories that add value to the car.
            </div>
            <div className='imgText'>
            <img src={url} className='overPhoto'></img>
            <div className='cover'>
            <div className='points'>
                <div className='description'>
                    <img className='imgPoint' src={imgUrl}></img>
                    <span className='bold'>Best Design Technology</span>
                    <br></br>
                    <span className='spantext'>We provide the most reliable and best design</span>
                </div>
                <div className='description'>
                    <img className='imgPoint' src={imgUrl}></img>
                    <span className='bold'>Best Design Technology</span>
                    <br></br>
                    <span className='spantext'>We provide the most reliable and best design</span>
                </div>
                <div className='description'>
                    <img className='imgPoint' src={imgUrl}></img>
                    <span className='bold'>Best Design Technology</span>
                    <br></br>
                    <span className='spantext'>We provide the most reliable and best design</span>
                </div>
            </div>
            <div className='buttonStyle'>
                <button className='button1'>Know More</button>
                <button className='button2'>View Video</button>
            </div>
            </div>
            </div>
    </div>
    );
}
export default About;