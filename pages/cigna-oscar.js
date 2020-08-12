import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'
import ContactUs from '../components/contact-form';

import Footbar from '../components/footbar'


class CignaOscar extends React.Component {
  render() {
    return (
    	<div className="container">
          <Head>
            <title>Felsenthal Health</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Navbar name="fdaf"/>

            {/*<div className="head cigna">
              <h2>Cigna + Oscar</h2>  
            </div>

            <h1 className="title">
              Introducing Cigna + Oscar, a new health care partnership for Tennessee.
            </h1>

            <h3>
              <ul>
                <li>Combining Cigna's extensive provider network with Oscar's technical expertise </li>
                <li>Very competitive rates</li>
                <li>Choose from 12 different plans</li>
                <li>Can cover groups from 2 to 50 employees</li>
                <li>Guarantee issue</li>
                <li>Pre-existing conditions covered immediately</li>
                <li>Doctor on call (Virtual Urgent care) 24/7</li>
                <li>Dedicated concierge team that will help find the right doctors, 
                facilities, and manage your care</li>
              </ul>
            </h3>

            <br />

            <h2 className="cigna-section-title">Special Covid-19 assistance</h2>

            <h3>
              <ul>
                <li>Doctors on call 24/7 at no charge</li>
                <li>Testing at no charge</li>
                <li>Assistance finding testing sites</li>
                <li>No charge for treatment if treating by an in network provider</li>
              </ul>
            </h3>

            <h2 className="cigna-section-title">For more information or to get a quote call or email: </h2>

            <h3>
              <ul>
                <li><b>Stepher Lester (901) 268-4824</b></li>
                <li>Email - steve@fhmemphis.com</li>
                <li><b>David Deaderick (901) 260-6420</b></li>
                <li>Email - david@fhmemphis.com</li>
              </ul>
            </h3>

            <ContactUs />


            <br /><br /><br /><br /><br /><br /><br /><br />
            <div style={{border: "200px solid red"}}></div>
*/}
            <div className="head cigna">
              <a href="#contact-form" className="cigna-button">Let's get started ▼</a>
              <h2>We mean business. <br />
              Yours, that is.</h2> 

            </div>

            <ContactUs />

            <p className="section-subtitle">Something for everyone</p>
            <p className="section-title">Healthy employees and a healthy bottom line</p>

            <div className="cigna-two-col">
              <div className="cigna-col">
                <img src="/cigna-oscar/Broker_IMG_1x.png" className="cigna-image"/>
                <h4 className="cigna-col-title">Health plans that save you money</h4>
                <p>Save on small business health insurance so you can focus on your company.</p>
              </div>
              <div className="cigna-col">
                <img src="/cigna-oscar/IMG_2.png" className="cigna-image"/>
                <h4 className="cigna-col-title">Care that cares about your employees</h4>
                <p>No-cost 24/7 urgent care2, $3 prescriptions3, and Care Teams that know their names.</p>
              </div>
            </div>

            <p className="section-subtitle">For your employees and your business</p>
            <p className="section-title">Affordable care that works for everyone</p>

            <div className="slider-section">
              <div className="slider">
                <img src="/cigna-oscar/25e5921222ca44b4b9157b4bb78401f3.png" />
                <div className="slider-content">
                  <p>NETWORKS TO FIT YOUR NEEDS</p>
                  <p className="slider-description">Access to Cigna's networks of doctors and specialists, no referrals</p>
                </div>
              </div>

              <div className="slider">
                <div className="slider-content">
                  <p>24/7 VIRTUAL CARE</p>
                  <p className="slider-description">Hundreds of doctors on call, available anytime for $0</p>
                </div>
                <img src="/cigna-oscar/6e4eeef4396072c55fdee04e57b23bbf.png"/>
              </div>

              <div className="slider">
                <img src="/cigna-oscar/10e42ed837ff5e41cc51c4dd62e68a88.png"/>
                <div className="slider-content">
                  <p>PLANS THAT FIT YOUR BUDGET</p>
                  <p className="slider-description">Savings you can build on</p>
                </div>
              </div>

              <div className="slider">
                <div className="slider-content">
                  <p>PRESCRIPTIONS DONE RIGHT</p>
                  <p className="slider-description">Save on prescriptions and refill them right from your phone </p>
                </div>
                <img src="/cigna-oscar/4c6848058d4620d830787212bf933734.png"/>
              </div>

              <a className="cigna-button button-center" href="#contact-form">Let's get started ▲</a>
            </div>

            <div>
              <div>
                <h4 className="contact-title">Care for every part of your team</h4>
                <div>
                  <p><b>Dedicated care guides</b></p>
                  <p>Help employees find the best doctors and specialists to get the most from their plans.</p>

                </div>

                <div>
                  <p><b>Plan guides</b></p>
                  <p>Help employees find the best doctors and specialists to get the most from their plans.</p>

                </div>

                <div>
                  <p><b>Healthy minds and bodies</b></p>
                  <p>Mental health support, behavioral coaching, and more to keep employees happy, healthy, and productive.</p>

                </div>
              </div>
              <img />
            </div>

            <div>
              <h4 className="faq-title">Frequently asked questions</h4>

              <ul className="faq">
                <li className="faq-item">
                  <p className="faq-question">Why are Cigna and Oscar partnering?</p>
                  <p>
                    Cigna + Oscar is designed to work for small businesses like yours. 
                    We’re bringing together the power of Cigna's nationwide and local 
                    provider networks, and Oscar’s member-focused experience, to deliver 
                    small group health insurance that understands the unique needs of small 
                    businesses and their employees. We’re here to provide affordable care 
                    that works for your team, and insurance that cares for your business.
                  </p>
                </li>
                <li>
                  <p className="faq-question">Is Cigna + Oscar right for my business?</p>
                  <p>
                    Cigna + Oscar plans are right for businesses looking to begin 
                    their plan in late 2020, or early 2021, with 1-50 employees 
                    total (or, in certain states, up to 100 employees). Our 
                    plans are built for small businesses with at least one qualified 
                    full-time (or full-time equivalent) employee, other than the 
                    business owner or a spouse.
                  </p>
                </li>
                <li>
                  <p className="faq-question">When will Cigna + Oscar be available?</p>
                  <p>
                    The effective dates—the first date a Cigna + Oscar plan 
                    can begin—will be 10/1 for most markets pending regulatory 
                    approval. To keep up with email updates about our launch, 
                    sign up below.
                  </p>
                </li>
                <li>
                  <p className="faq-question">Where is Cigna + Oscar available?</p>
                  <p>
                    Cigna + Oscar plans will be available in select ZIP 
                    codes in the Bay Area and Atlanta, as well as throughout 
                    the state of Tennessee, pending regulatory approval. 
                    Use the form on this page to confirm if Cigna + Oscar 
                    will be available in your area soon.
                  </p>
                </li>
                <li>
                  <p className="faq-question">How much will Cigna + Oscar plans cost?</p>
                  <p>
                    Plan costs will vary, but we’re all about affordability. 
                    Cigna + Oscar plans are designed to help your business and 
                    team save time and money.

                    Plan features include:

                    Dual Network: Choose between two networks, Cigna 
                    LocalPlus® and Cigna Open Access Plus, and save on health 
                    insurance that fits your team’s needs.

                    Care Guides: Dedicated experts help your team get the 
                    most from their plans and find the affordable care they need.
                    
                    Cigna + Oscar members pay $0 copay for access to 24/7 telemedicine.

                    Save on prescriptions and refill them right from your phone.

                    Cigna + Oscar pays your employees to hit their daily step goals. 
                    Members can earn $1 toward an Amazon® Gift Card for every day 
                    they hit their step goal (up to $100 per year).
                    
                    Quotes are now available in Tennessee and Atlanta. Fill out our Sales Contact form for a quote.
                  </p>
                </li>
                <li>
                  <p className="faq-question">What type of plan are Cigna + Oscar plans?</p>
                  <p>
                    The plans available to you will depend on where you are.

                    Pending regulatory approval, EPO will be offered in 
                    California and Tennessee; PPO will be available in Georgia.
                    
                    EPO stands for Exclusive Provider Organization. They 
                    typically have smaller networks that combine the flexibility 
                    of a PPO with the cost savings of an HMO. You won’t need to 
                    choose a primary care doctor or ask for referrals. Care is 
                    covered by doctors and facilities within the network—but not 
                    outside the network, except in emergencies.

                    PPO stands for Preferred Provider Organization. Although they 
                    can be more expensive than an EPO, they tend to offer the 
                    broadest access to care. They include networks that cover care 
                    from both in-network and out-of-network doctors and facilities, 
                    but going out of network may cost additional as compared to 
                    staying in network. You won’t have to choose a primary care 
                    doctor, and referrals aren’t required to see a specialist.
                  </p>
                </li>
              </ul>

            </div>
          </main>

          <Footbar />
        </div>
    );
  }
}

export default CignaOscar
