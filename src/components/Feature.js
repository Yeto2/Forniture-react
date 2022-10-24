import React from 'react'

function Feature(props) {
    return (
    <div className='colums'>
        <div>
            <img src={require(`../images/features/${props.img}`)}/>
        </div>
        <div className='freature-text'>
            <div className='review'>
                <span className='stars'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
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