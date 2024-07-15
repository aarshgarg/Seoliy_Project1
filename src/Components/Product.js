import imgUrl from '../Images/file.png'

const Product=()=>{
    return(
    <div id="product">
    <ul className="listProduct">
        <li>⚪️ CARNAUBA LIQUID WAX</li>
        <li>⚪️ CARNAUBA WASH & WAX SHAMPOO</li>
        <li>⚪️ MULTI-PURPOSE CLEANER</li>
        <li>⚪️ SCRATCH GEL</li>
    </ul>
    <div className="helpTitle">
        <h1>Hello Car Care Products</h1>
    </div>
    <div className="helpRoot">
        <div className="helpInfo">
            <div className="infoSub">
                <div className='entity'>
                <img src={imgUrl} className='product'></img>
                <span className='bold3'>Multi spray</span>
                99988 87779
                <br></br>
                99998 88889
                </div>
            </div>
        </div>
        <div className="helpInfo">
            <div className="infoSub">
                <div className='entity'>
                <img src={imgUrl} className='product'></img>
                <span className='bold3'>Car Spray</span>
                99988 87779
                <br></br>
                99998 88889
                </div>
            </div>
        </div>
        <div className="helpInfo">
            <div className="infoSub">
                <div className='entity'>
                <img src={imgUrl} className='product'></img>
                <span className='bold3'>Liquid Wax</span>
                99988 87779
                <br></br>
                99998 88889
                </div>
            </div>
        </div>
        <div className="helpInfo">
            <div className="infoSub">
                <div className='entity'>
                <img src={imgUrl} className='product'></img>
                <span className='bold3'>Scratch gel</span>
                99988 87779
                <br></br>
                99998 88889
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}
export default Product;