import React from 'react'
import logo from '../src/images/logo.png';
import home from '../src/images/home.png';
import youtube from '../src/images/youtube.png'
import { FaHandsHelping } from 'react-icons/fa';
import { RiCommunityFill } from 'react-icons/ri';
import { CgCommunity } from 'react-icons/cg';
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Footer from '../components/Footer'







const App = () => {
  return (
    <>
    {/* -------Navbar------- */}
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <img className="navbar-brand" src={logo} width={200} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto "> 
              <li className="nav-item">
                <a className="nav-link active mx-4" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="#featured">
                Featured
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="#client">
                  Our Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3 " href='#help' >
                  Help
                </a>
              </li>
              <li className="nav-item">
                
                <a type="button" className="btn btn-warning" href='#contact' >Contact Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    

{/* -------------Home--------------------- */}

<div id='home' className="home">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="home-text p-3 p-md-5 text-white">
               <span className='fw-light'  > We are</span> building a community <span className='fw-light' >that </span>  advances the profession of <span className='fw-light' > physical therapy to </span>  improve the health of society.
            </h1>
          </div>
          <div className="col-md-6 ">
            <img className="home-img" src={home} alt="Home" />
          </div>
        </div>
      </div>
      {/* ///////home icons////// */}

      <div className="icon  ">
        <div className="item-icon  text-center">
          <FaHandsHelping className="main-icon" />
          <p className='icon-text'>
          HEALPING
            <span className="fw-normal"> YOU THRIVE </span>
            <MdKeyboardDoubleArrowRight/>
          </p>
        </div>
        <div className="item-icon text-center">
          <RiCommunityFill className="main-icon" />
          <p className='icon-text'>
          BULDING
            <span className="fw-normal"> OUR COMMUNITY </span>
            <MdKeyboardDoubleArrowRight/>
          </p>
        </div>
        <div className="item-icon text-center">
          <CgCommunity className="main-icon" />
          <p className='icon-text'>
          TRANSFORMING
            <span className="fw-normal"> SOCIETY </span>
            <MdKeyboardDoubleArrowRight/>
          </p>
        </div>
      </div>
      <hr/>

      {/* ------------Featured---------------- */}

      <div id='featured' className="section mx-2 mt-5">
        <h5 className='featured-h fs-4 fw-bold ' >Featured Content</h5>
        
        <div className="row m-4 featured-cards">
          <div className="col-md-4"><div className="card" >
  <img src={youtube}  height={200}  className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <p className='fw-normal fs-4'>2023 Year in Review</p>
    
   
    
  </div>
</div></div>
          <div className="col-md-4"><div className="card" >
  <img src="https://www.apta.org/contentassets/27ee6c9f14c148f1aa08b99cf43a6102/feature-image.png?width=440&height=225&mode=crop" height={200} className="card-img-top" alt="..."/>
  <div className="card-body">
   
  <p className='fw-normal fs-4'>Medicare Physician Fee Schedule Cuts Coming in January. Is Help on the Way?</p>
  </div>
</div></div>
          <div className="col-md-4"><div className="card" >
  <img src="https://www.apta.org/contentassets/687133e11775404e9f7a554e07c7fc98/cptcodesfeature-440x225.png?width=440&height=225&mode=crop" height={200} className="card-img-top" alt="..."/>
  <div className="card-body">
  <p className='fw-normal fs-4'>New CPT Codes Will Support the Critical Role of Caregivers</p>
    
  </div>
</div></div>
        </div>


       <div className="row mx-3  mt-5" >
        <div className="col-md-6"><div className="p-5 text-light featured-banner ">
          <h2 className='featured-heading  fw-bold fs-1 my-3'>APTA Reports</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button className="btn btn-outline-light mt-5" type="button">View Reports</button>
        </div></div>
        <div className="col-md-6"><div className=" p-5 text-light featured-banner-2 ">
          <h2 className=' featured-heading fw-bold fs-1 '>Vol Opportunities</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button className="btn btn-outline-light mt-5" type="button">APTA Engaged</button>
        </div></div>
       </div>


      </div>


      {/* --------------client reviews------------ */}
{/* <div id='client'  className="section-client mx-2 m-5">
<h1 className='featured-h fs-4 fw-bold ' >Clients Reviews</h1>
<div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="featured-h fs-4 fw-bold ">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
              quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>
<div className="container ">  
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner    text-center">
    <div className="carousel-item active ">
    <div className="col-md-4 mb-5 mb-md-0 carousel-card  ">
        <div className="d-flex justify-content-center mb-4">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            className="rounded-circle shadow-1-strong" width="150" height="150" />
        </div>
        <h5 className="mb-3 fw-bold ">Maria Smantha</h5>
        <h6 className="text-primary mb-3">Web Developer</h6>
        <p className="px-xl-3">
          <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
          tenetur.
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star-half-alt fa-sm text-warning"></i>
          </li>
        </ul>
        <IoIosStar className='star-icons' />  <IoIosStar className='star-icons'/> <IoIosStar className='star-icons' />  <IoIosStar className='star-icons'/> <IoIosStar className='star-icons' />  <IoIosStar className='star-icons'/>
      </div>
    </div>
    <div className="carousel-item">
    <div className="col-md-4 mb-5 mb-md-0 carousel-card">
        <div className="d-flex justify-content-center mb-4">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
            className="rounded-circle shadow-1-strong" width="150" height="150" />
        </div>
        <h5 className="mb-3 fw-bold">Lisa Cudrow</h5>
        <h6 className="text-primary mb-3">Graphic Designer</h6>
        <p className="px-xl-3">
          <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
        </ul>
        <IoIosStar className='star-icons' />  <IoIosStar className='star-icons'/> <IoIosStar className='star-icons'/> <IoIosStarHalf className='star-icons' /> <IoIosStarHalf className='star-icons' />
      </div>
    </div>
    <div className="carousel-item">
    <div className="col-md-4 mb-0 carousel-card">
        <div className="d-flex justify-content-center mb-4">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            className="rounded-circle shadow-1-strong" width="150" height="150" />
        </div>
        <h5 className="mb-3 fw-bold">John Smith</h5>
        <h6 className="text-primary mb-3">Marketing Specialist</h6>
        <p className="px-xl-3">
          <i className="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
          dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-warning"></i>
          </li>
          <li>
            <i className="far fa-star fa-sm text-warning"></i>
          </li>
        </ul>
        <IoIosStar className='star-icons' /> <IoIosStar className='star-icons'/> <IoIosStar className='star-icons'/> <IoIosStar className='star-icons'/> <IoIosStarHalf className='star-icons' />
      </div>
    </div>
  </div>
</div>
</div>

</div> */}


<section style={{"color": "#000;" , "background-color": "#f3f2f2;"}}>
  <div className="container-client py-5">
    <div className="row d-flex justify-content-center">
      <div className="col-md-10 col-xl-8 text-center">
        <h3 className="fw-bold mb-4">Testimonials</h3>
        <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
          numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
          quisquam eum porro a pariatur veniam.
        </p>
      </div>
    </div>

    <div className="row text-center">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="card-client ">
          <div className="card-body py-4 mt-2">
            <div className="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                className="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 className="font-weight-bold">Teresa May</h5>
            <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-info"></i>
              </li>
            </ul>
            <p className="mb-2">
              <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
              ad velit ab hic tenetur.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="card-client">
          <div className="card-body py-4 mt-2">
            <div className="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                className="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 className="font-weight-bold">Maggie McLoan</h5>
            <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
            </ul>
            <p className="mb-2">
              <i className="fas fa-quote-left pe-2"></i>Autem, totam debitis suscipit saepe
              sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis
              labore laboriosam.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-0">
        <div className="card-client ">
          <div className="card-body py-4 mt-2">
            <div className="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                className="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 className="font-weight-bold">Alexa Horwitz</h5>
            <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm text-info"></i>
              </li>
            </ul>
            <p className="mb-2">
              <i className="fas fa-quote-left pe-2"></i>Cras sit amet nibh libero, in gravida
              nulla metus scelerisque ante sollicitudin commodo cras purus odio,
              vestibulum in tempus viverra turpis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --------------------help Section------------------------ */}


<div id='help' className="row m-4">
  <div className="col-md-6">
    <div className="help-text m-4">
      <h1 className='help-h fs-1  fw-bold '>We help you thrive.</h1>
    <p className='fw-bold'>ADVANCE YOUR CAREER THROUGH APTA MEMBERSHIP</p>
    <p> <IoIosArrowDropright className='text-primary mx-2' />Access free and discounted continuing education courses.</p>
    <p><IoIosArrowDropright className='text-primary mx-2' />Save on specialist certification and APTA CSM.</p>
    <p><IoIosArrowDropright className='text-primary mx-2' />Enjoy full-text access to scientific literature via APTA Article Search</p>
    <p><IoIosArrowDropright className='text-primary mx-2' />Support our national advocacy and public awareness campaigns.</p></div>
    <button type="button" className="btn btn-warning mx-4">Explore Benefits and Discounts</button>
    <p className='mx-4 mt-2 text-primary'>Join APTA or Renew Your Membership <MdKeyboardDoubleArrowRight className='text-danger' /></p>
  </div>
  <div className="col-md-6">

    <img className='image-container' src="https://heartbeetcomplete.com/wp-content/uploads/2019/07/doctor-checking-blood-pressure-of-a-patient.jpg" alt="" />
  </div>
</div>
<div className="container-help">

<div className="row ">
  <div className="col-md-6">
  <div className=" container-help-card   border rounded-3">
          <h2>Find a Physical Therapist</h2>
       <p>Our directory provides access to PTs nationwide.</p>
          <button className="btn btn-outline-danger" type="button">Start Search</button>
        </div>
  </div>
  <div className="col-md-6">
  <div className=" container-help-card   border rounded-3">
          <h2>Choose Physical Therapy</h2>
       <p>Our directory provides access to PTs nationwide.</p>
          <button className="btn btn-outline-danger" type="button">Start Search</button>
        </div>
  </div>
</div>

  
</div>
{/* -------------------contact us -------------------- */}

<section id='contact'  className="mb-4 mx-5">

    
    <h2 className=" featured-h fs-2 fw-bold text-center my-4">Contact us</h2>
   
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row mx-5">

        
        <div className="col-md-8  mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                <div className="row">

                  
                    <div className="col-md-4">
                        <div className="md-form mb-3">
                            <input type="text" placeholder='Your Name' id="name" name="name" className="form-control"/>
                            
                        </div>
                    </div>
                  
                    <div className="col-md-4">
                        <div className="md-form mb-0">
                            <input type="text" placeholder='Your email' id="email" name="email" className="form-control"/>
                            
                        </div>
                    </div>
                    

                </div>
               
              
               
                <div className="row">

                    
                    <div className="col-md-8">

                        <div className="md-form">
                            <textarea type="text" placeholder='Your message' id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
               

            </form>

            <div className="text-center d-flex mt-3">
                <a className="btn btn-primary " onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
      
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><FaLocationArrow className='contact-isons' />
                    <p>Shan Bhatti Rd, Ali Town, Lahore, Punjab</p>
                </li>

                <li><FaPhoneVolume className='contact-isons' />
                    <p>+ 92 234 567 89</p>
                </li>

                <li><MdEmail className='contact-isons' />
                    <p>contact@bytelegion.com</p>
                </li>
            </ul>
        </div>
        

    </div>

</section>


<div className="container-map my-5">

</div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1604087956666!2d74.2459446!3d31.464773299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e1a8b04047%3A0x80cb04c73f1d684c!2sByte%20Legion%20Pakistan!5e0!3m2!1sen!2s!4v1704356707148!5m2!1sen!2s" width="100%" height="350" style={{"border":"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<Footer/>
    </>
  )
}

export default App
