import React from "react";
// //* images
// import sofa from "../images/collection/sofa-banner.jpg" ;
// import table from "../images/collection/table-banner.jpg" ;

function Collection() {
    return <div className="owl-carousel">
        <div className="col-element1">
            <span className="rect"></span>
            <div className="collection-txt container">
                <h3>unlimited sofa collection</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <b>Starting from <span>$ 199</span></b>
                <button className="one">View More</button>

            </div>
        </div>
        <div className="col-element2">
            <span className="rect"></span>
            <div className="collection-txt container">
                <h3>unlimited dainning table collection</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <b>Starting from <span>$ 299</span></b>
                <button className="one">View More</button>
            </div>
        </div>

    </div>;
}

export default Collection;
