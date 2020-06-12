import Head from 'next/head'
import Navbar from '../components/navbar'
import Footbar from '../components/footbar'

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
          <h2>Dedicated to Memphis</h2>
          
        </div>

        <h1 className="title">
          Felsenthal Health and Employee Benefits
        </h1>

        <h2>Meet our team</h2>

        <div className="employee-strip">
          <ul className="employee-details">
            <li><b>Stephen Lester</b></li>
            <li>Phone: 901-268-4824</li>
            <li>Email: fpsc_sl@bellsouth.net</li>
          </ul>
          <img src="sl.png" />
        </div>

        <div className="employee-strip">
          <ul className="employee-details">
            <li><b>David Deaderick</b></li>
            <li>Phone: 901-260-6420</li>
            <li>Email: fpsc_dd@bellsouth.net</li>
          </ul>
          <img src="dd.png" />
        </div>

        <h3>Sign up for the affordable care act</h3>
        <a href="https://www.healthsherpa.com/?_agent_id=edward-felsenthal">
          <img id="aca-icon" src="affordable-care-act.png"/>
        </a>
        <h3>Accredidation</h3>
        <a href="https://www.bbb.org/us/tn/memphis/profile/financial-planning-consultants/felsenthal-financial-services-inc-0543-11001676">
          <img src="accreditation.png" />
        </a>
        <h3>BBB Rating</h3>
        <a href="https://www.bbb.org/us/tn/memphis/profile/financial-planning-consultants/felsenthal-financial-services-inc-0543-11001676">
          <img src="bbbrating.png" />
        </a>
      </main>

      <Footbar />

    </div>
  )
}
