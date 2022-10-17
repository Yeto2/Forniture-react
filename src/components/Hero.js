import React from 'react'

function Hero(props) {
    return (
    <div className='hero my-4'>
        <div className='content'>
            <h4>{props.headings.first}</h4>
            <h2>{props.headings.second}</h2>
            <p>{props.description}</p>
            <p>
                $ {props.price.new }
                <del>
                $ {props.price.old}
                </del>
            </p>
            <div className='buttons'>
                <button className='one'>Add To Card</button>
                <button className='two'>More Info</button>
            </div>
        </div>
        <img className='heroSlider' src={require(`../images/slider/${props.img}`)}/>
    </div>
    )
}

export default Hero