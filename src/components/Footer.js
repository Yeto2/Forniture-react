import React from 'react'

function Footer() {
    return (
        <footer id="contact" className="footer">
        <div className="container">
            <div className="hm-footer-copyright text-center">
                <div className="footer-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>	
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                    <a href="#"><i className="fa fa-behance"></i></a>	
                </div>
                <p>
                    ©copyright. Recoded and developed by <a href="https://github.com/Yeto2/Forniture-react">Yeto</a>
                </p>
            </div>
        </div>
        
        <div id="scroll-Top">
            <div className="return-to-top">
                <i className="fa fa-angle-up " />
            </div>
        </div>
        
    </footer>
    )
}

export default Footer