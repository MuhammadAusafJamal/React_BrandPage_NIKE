import ShoeImage from "../Assets/shoe_image.png";
import Amazon from "../Assets/amazon.png";
import FlipKart from "../Assets/flipkart.png";


function Main() {
    return (
        <div className="main container">
            <div className="sec-1">
                <div>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>

                <div className="btn">
                    <button className="shopbtn">SHOP NOW</button>
                    <button className="catagorybtn">CATAGORY</button>
                </div>

                <div className="footer">
                    <p>Also Available on</p>
                    <div className="logos">
                        <img src={Amazon} alt="Amazon-Logo" />
                        <img src={FlipKart} alt="FlipKart-Logo" />
                    </div>
                </div>
            </div>
            <div className="sec-2">
                <img src={ShoeImage} alt="Shoe" />
            </div>
        </div>
    );
}

export default Main;