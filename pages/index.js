import Head from 'next/head'
import Navbar from '../components/navbar'
import Footbar from '../components/footbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Felsenthal Health and Employee Benefits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar name="fdaf"/>

        <div className="head">
          <h2>Felsenthal Health and Employee Benefits</h2>

          <h2 className="head-promo"><b></b></h2>

        </div>


{/*
        <h1 className="title">
          Felsenthal Health and Employee Benefits
        </h1>*/}

        <div className="promo-strip">
          <ul className="promo-details">
            <li>Drastically reduced or even free ACA plan rates begin April 1st! <a href="tel:901-268-4824">Call us</a> or <a href="https://www.healthsherpa.com/?_agent_id=edward-felsenthal">enroll yourself</a> before August 15th</li>

          </ul>
        </div>

        <h2>Call our team</h2>

        <div className="employee-group">
          <div className="employee-strip">
            <ul className="employee-details">
              <li><b>David Deaderick</b></li>
              <li>Phone: 901-692-8688</li>
              <li>Email: david@fhmemphis.com</li>
            </ul>
          </div>

          <div className="employee-strip">
            <ul className="employee-details">
              <li><b>Stephen Lester</b></li>
              <li>Phone: 901-268-4824</li>
              <li>Email: steve@fhmemphis.com</li>
            </ul>
          </div>
        </div>
        
        {/*<h3>Sign up for the affordable care act</h3>
        <a href="https://www.healthsherpa.com/?_agent_id=edward-felsenthal">
          <img id="aca-icon" src="affordable-care-act.png"/>
        </a>
        <h3>Accredidation</h3>
        <a href="https://www.bbb.org/us/tn/memphis/profile/financial-planning-consultants/felsenthal-financial-services-inc-0543-11001676">
          <img src="accreditation.png" />
        </a>*/}
        <h3>BBB Rating</h3>
        <a href="https://www.bbb.org/us/tn/memphis/profile/financial-planning-consultants/felsenthal-financial-services-inc-0543-11001676">
          <img src="bbbrating.png" />
        </a>
      </main>

      <Footbar />

    </div>
  )
}
