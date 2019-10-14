import React from 'react'
import './footer.css'

function Footer() {
    return (
        // Footer start
        <footer className="footer">
            <div className="container bottom_border">
                <div className="row">
                    <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">About us</h5>
                        <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    
                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                        <ul className="footer_ul_amrc">
                        <li><a href="test.com">Image Rectoucing</a></li>
                        <li><a href="test.com">Clipping Path</a></li>
                        <li><a href="test.com">Hollow Man Montage</a></li>
                        <li><a href="test.com">Ebay & Amazon</a></li>
                        <li><a href="test.com">Hair Masking/Clipping</a></li>
                        <li><a href="test.com">Image Cropping</a></li>
                        </ul>
                    </div>

                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                        <ul className="footer_ul_amrc">
                        <li><a href="test.com">Remove Background</a></li>
                        <li><a href="test.com">Shadows & Mirror Reflection</a></li>
                        <li><a href="test.com">Logo Design</a></li>
                        <li><a href="test.com">Vectorization</a></li>
                        <li><a href="test.com">Hair Masking/Clipping</a></li>
                        <li><a href="test.com">Image Cropping</a></li>
                        </ul>
                    </div>


                    <div className=" col-sm-4 col-md  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
                        <ul className="footer_ul2_amrc">
                        <li><a href="test.com"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="test.com">https://www.lipsum.com/</a></p></li>
                        <li><a href="test.com"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="test.com">https://www.lipsum.com/</a></p></li>
                        <li><a href="test.com"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="test.com">https://www.lipsum.com/</a></p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <ul className="foote_bottom_ul_amrc">
                <li><a href="test.com">Home</a></li>
                <li><a href="test.com">About</a></li>
                <li><a href="test.com">Services</a></li>
                <li><a href="test.com">Pricing</a></li>
                <li><a href="test.com">Blog</a></li>
                <li><a href="test.com">Contact</a></li>
                </ul>
                <p className="text-center">Copyright @2017 | Designed With by <a href="test.com">Your Company Name</a></p>
                <ul className="social_footer_ul">
                <li><a href="test.com"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="test.com"><i className="fab fa-twitter"></i></a></li>
                <li><a href="test.com"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="test.com"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>

        </footer>
        // footer end
    )
}

export default Footer