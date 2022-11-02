import React , {useState} from 'react'
// import logo from '../images/logo/logo.png'

function Navbar() {
    let storedNum = JSON.parse(localStorage.getItem("prodsNum"))
    let [prodNum , setProdNum] = useState(storedNum)
    setTimeout(() => {
        let shop = document.querySelectorAll('#shop')
        for (let i = 0; i < shop.length; i++) {
            shop[i].addEventListener('click' , ()=>{
                        if (+prodNum < 10) {
                            setProdNum(+prodNum + 1)
                        }else{
                            for (let i = 0; i < shop.length; i++) {
                                shop[i].style.cssText = "pointer-events : none"
                            }
                        }
                    })
                    
                }
            }, 1000);
            localStorage.setItem("prodsNum" , JSON.stringify(prodNum + 0))
            let prodsNum = JSON.parse(localStorage.getItem("prodsNum"))

            // -----------------------------------------------------

                let data = JSON.parse(localStorage.getItem("prods"))
                console.log(data)


return (
    <nav className='nav navbar navbar-expand-md'>
        <div className='container d-flex justify-content-between'>
            
            <div href="#home" className="logo navbar-brand">Stor<span>key</span></div>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#toggleMobileMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className='navbar-toggler-icon' ></span>
            </button>

            <div className='collapse navbar-collapse' id="toggleMobileMenu">
                <ul className='navbar-nav ms-auto text-center'>
                    <li className="nav-link"><a className="home" href="#home">Home</a></li>
                    <li><a className='nav-link' href="#arrival">New Arrival</a></li>
                    <li><a className='nav-link' href="#features">Features</a></li>
                    <li><a className='nav-link' href="#blog">Blog</a></li>
                    <li><a className='nav-link' href="#contact">Contact</a></li>
                </ul>
                <div className="icons">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-sharp fa-solid fa-gear"></i>
                    <i id='panel' className="fa-sharp fa-solid fa-cart-shopping" ><span id='prodNumber'>{prodsNum}</span></i>
                    <div className='listProd'>
                        <span className='arrow-up'></span>
                    </div>

                </div>
            </div>
            
        </div>
    </nav>
)
}

export default Navbar