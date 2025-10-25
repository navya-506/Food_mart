import React from "react";
class Header extends React.Component{
    render(){
        return(
            <div>
            <img src="https://food-mart-template.vercel.app/images/logo.png"/>
            <div className="nav">
                <li>Shop by market</li>
                <li>Men</li>
                <li>Women</li>
                <li>kids</li>
                <li>Accessories</li>
                <li>page</li>
                <li>Brand</li>
                <li>Sale</li>
                <li>Blog</li>
            </div><br/>
            </div>
        );
    }
}
export default Header