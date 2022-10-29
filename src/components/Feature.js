import React from 'react'

function Feature(props) {
    return (
    <div id="features" className='colums'>
        <div className='feature-sec'>
            <img alt='feature image' src={require(`../images/features/${props.img}`)}/>
            <div className="git">
                <div className="addToCard">
                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                    <p>Add To Card</p>
                </div>
                <span>
                    <i className="fa-regular fa-heart"></i>
                    <i id='zoom' className="fa-regular fa-image"></i>
                </span>
            </div>
        </div>
        <div className='freature-text'>
            <div className='review'>
                <span className='stars'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </span>
                <p>( {props.review} Review)</p>
            </div>
            <p className='tittle'>{props.tittle}</p>
            <p className='price'>$ {props.price}</p>
        </div>

    </div>
    )
}

export default Feature