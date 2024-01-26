import React from 'react'
import './design.css';

function FrontendTask() {
  return (

    <div className="main-container">
        <div className='curved-container'>
      <div className="header">
        <div className="header-content">
          <div className="logo">
            <h1>workit</h1>
          </div>
          <div className="apply-button">
            <a href="!#" className="button">Apply for access</a>
          </div>
        </div>
        <div className="header-text">
          <h1 style={{fontSize: '70px'}}>Data tailored to</h1>
            <h1 style={{fontSize: '70px'}}>your needs.</h1>
        </div>

        <div className="header-button">
            <button className="rectangle-button">Learn More</button>
          </div>

      </div>
      <div className="header-image">
            <img src="mbl.png" alt="Header Image" />
          </div>


      <div className="card-container">
        <div className="card">
          <div className="card-content">
          <div className="circle-number">1</div>
          <br />
         
          <div className='main-cardContent'>
            <h3 style={{color: '#2f133e'}}>Actionable insights</h3>
            <br />
            <p>Optimize your products, improve customer satisfaction and stay ahead of the competiton with our product data analytics.</p>
            </div>
        </div>
        </div>

          <div className="card">
          <div className="card-content">
          <div className="circle-number">2</div>
          <br />
         <div className='main-cardContent'>
            <h3 style={{color: '#2f133e'}}>Data-driven decisions</h3>
            <br />
           
            <p>Optimize your products, improve customer satisfaction and stay ahead of the competiton with our product data analytics.</p>

            </div>
            </div>
            </div>

          <div className="card">
          <div className="card-content">
          <div className="circle-number">3</div>
          <br />
         
          <div className='main-cardContent'>
            <h3 style={{color: '#2f133e'}}>Always affordable</h3>
            <br />
            <p>Optimize your products, improve customer satisfaction and stay ahead of the competiton with our product data analytics.</p>
            </div>
            </div>
        </div>

        </div>
      </div>


    <div className='last-section'>
        <div className='last-section-content'>

       <div className="circle-container">
          <img src="image.jpeg" alt="Circle Image" />
        </div>

        <div className="content-box">
          <h2>Be the first to test</h2>
          <br />
          <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with 
            me to become a beta tester for our app and kickstart your company. Apply 
            for access below and I'll be in touch to schedule a call.
          </p>
          
          <div className="header-button">
            <button className="rectangle-button">Apply for access</button>
          </div>

        </div>
        </div>

        </div>

        <div className="footer">
          <div className="social-icons">
            <h3>workit</h3>
            <br />
            <div className='icons'>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
        </div>

    </div>
  )
}

export default FrontendTask