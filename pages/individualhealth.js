import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'
import Footbar from '../components/footbar'

class IndividualHealth extends React.Component {
  render() {
    return (
    	<div className="container">
          <Head>
            <title>Felsenthal Health</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Navbar name="fdaf"/>

            <div className="head">
              <h2>Individual Health</h2>  
            </div>

            <h1 className="title">
              Felsenthal Health and Employee Benefits
            </h1>

            <ul className="cards">
              <li className="card"><a href="https://www.healthsherpa.com/?_agent_id=edward-felsenthal">Major Medical</a></li>
              <li className="card"><Link href="pdfs/PhiladelphiaAmericanHospitalIndemnity.pdf"><a>Indemnity</a></Link></li>
              <li className="card"><a href="https://www.healthsherpa.com/?_agent_id=edward-felsenthal">ACA/On & Off Exchange</a></li>
              <li className="card">Longterm Disability</li>
              <li className="card">Shortterm Disability</li>
              <li className="card"><Link href="individualdental"><a>Dental</a></Link></li>
              <li className="card"><Link href="vision"><a>Vision</a></Link></li>
              <li className="card"><Link href="dentalvisionhearing"><a>Dental/Hearing/Vision</a></Link></li>
              <li className="card">Medicare Advantage</li>
              <li className="card">Medicare Supplements</li>
              <li className="card"><Link href="accident"><a>Accident</a></Link></li>
              <li className="card">Critical Illness</li>
              <li className="card">Cancer</li>
              <li className="card">Prescription</li>
              <li className="card">Drug Plans</li>
              <li className="card">Telehealth Advocacy</li>
              <li className="card">Longterm Care</li>
            </ul>
          </main>

          <Footbar />
        </div>
    );
  }
}

export default IndividualHealth