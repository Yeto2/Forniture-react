import React from 'react'

function Popular() {
    return (
        <div className='container popular-section'>
            <div className='left'>
                <img src={require(`../images/populer-products/p1.png`)} />
                <h3>Arm Chair</h3>
                <p>Nemo enim ipsam voluptatem quia volu ptas .</p>
            </div>
            <div className='middle'>
                <div className='middle-content'>
                    <img className='middle-img' src={require(`../images/populer-products/p2.png`)} />
                    <div className='popular-text'>
                        <h3>Latest Designed Stool and Chair</h3>
                        <p>Edi Ut Perspiciatis Unde Omnis Iste Natusina Error Sit Voluptatem Accusantium Doloret Mque Laudantium, Totam Rem Aperiam.</p>
                        <b>Sales Start from <span>$ 99.00</span></b>
                        <button>Discover more</button>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img src={require(`../images/populer-products/p3.png`)} />
                <h3>Hanging Lamp</h3>
                <p>Nemo enim ipsam voluptatem quia volu ptas .</p>
            </div>
        </div>
    )
}

export default Popular