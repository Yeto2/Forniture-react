import React from 'react'

function Hero(props) {
    return (
    <div className='row'>
        <div className='col-8 content'>
            <h4>{props.headings.first}</h4>
            <h2>{props.headings.second}</h2>
            <p>{props.description}</p>
            <p>
                {props.price.new}
                <del>
                {props.price.old}
                </del>
            </p>
            <div className='buttons'>
                <button>Add To Card</button>
                <button>More Info</button>
            </div>
        </div>
        <img className='col-4 heroSlider' src={require(`../images/slider/${props.img}`)}/>
    </div>
    )
}

export default Hero