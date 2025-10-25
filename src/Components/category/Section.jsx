import React from "react";
import "./Section.css";

class Banner extends React.Component {
    render() {
        return (
            <div className="containers">
                <div className="container1">
                    <div>
                        <div
                            style={{
                                color: "#FFC43F",
                                fontSize: "32px",
                                textTransform: "capitalize",
                                fontWeight: "bold",
                            }}
                        >
                            100% Natural
                        </div>
                        <h1>
                            Fresh Smoothie & <br /> Summer Juice
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit,
                            magni libero officiis mollitia laudantium?
                        </p>
                        <button>SHOP NOW</button>
                    </div >
                    <img 
                        src="https://food-mart-template.vercel.app/images/product-thumb-1.png"
                        alt="Smoothie"
                    />
                </div>
                <div className="container2">
                    <div className="container3">
                        <div>
                            <p>20% Off</p>
                            <p>---------- SALE</p>
                            <strong>Fruits & Vegetables</strong>
                            <p>Shop Collection</p>
                        </div>
                        <img
                            src="https://food-mart-template.vercel.app/images/ad-image-1.png"
                            alt="Fruits Offer"
                        />
                    </div>

                    <div className="container4">
                        <div>
                            <p>15% Off</p>
                            <p>---------- SALE</p>
                            <strong>Baked Products</strong>
                            <p>Shop Collection</p>
                        </div>
                        <img
                            src="https://food-mart-template.vercel.app/images/ad-image-2.png"
                            alt="Baked Offer"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
