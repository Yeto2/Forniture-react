import React from 'react'
import b1 from '../images/blog/b1.jpg'
import b2 from '../images/blog/b2.jpg'
import b3 from '../images/blog/b3.jpg'

function Blog() {
    return (
    <div className='row'>
        <div className='col-4'>
            <div className='blog-img'>
                <img src={b1} />
            </div>
            <div className="blog-text">
                <h6>Why Brands are Looking at Local Language</h6>
                <span>
                    By Robert Norby / 18th March 2018
                </span>
                <p>
                    Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit,
                    Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....
                </p>
            </div>
        </div>
        <div className='col-4'>
            <div className='blog-img'>
                <img src={b2}/>
            </div>
            <div className="blog-text">
                <h6>Why Brands are Looking at Local Language</h6>
                <span>
                    By Robert Norby / 18th March 2018
                </span>
                <p>
                    Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit,
                    Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....
                </p>
            </div>
        </div>
        <div className='col-4'>
            <div className='blog-img'>
                <img src={b3}/>
            </div>
            <div className="blog-text">
                <h6>Why Brands are Looking at Local Language</h6>
                <span>
                    By Robert Norby / 18th March 2018
                </span>
                <p>
                    Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit,
                    Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....
                </p>
            </div>
        </div>
    </div>
    )
}

export default Blog