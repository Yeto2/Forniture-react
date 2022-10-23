import React from "react";
// //* images
// import sofa from "../images/collection/sofa-banner.jpg" ;
// import table from "../images/collection/table-banner.jpg" ;

function Collection() {
    return <div className="owl-carousel">
        <div className="col-element1">
            {/* <img src={sofa} /> */}
            <div className="collection-txt container">
                <h2>unlimited sofa collection</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
        </div>
        <div className="col-element2">
            {/* <img src={table} /> */}
            <div className="collection-txt container">
                <h2>unlimited dainning table collection</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
        </div>

    </div>;
}

export default Collection;
