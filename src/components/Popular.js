import React from 'react'

function Popular(props) {
    return (
        <div className='row'>
            <div className='col-3'>
                <img src={require(`../images/populer-products/${props.img}`)} />
                <h3>{props.heading}</h3>
                <p>{props.text}</p>
            </div>
            <div className='col-6'>
                <div className='row'>
                    <img className='col-4' src={require(`../images/populer-products/${props.img}`)} />
                    <div className='popular-text'>
                        <h3>{props.heading}</h3>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <img src={require(`../images/populer-products/${props.img}`)} />
                <h3>{props.heading}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Popular