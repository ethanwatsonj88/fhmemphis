import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'

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
              <li><a href="https://www.healthsherpa.com/?_agent_id=edward-felsenthal">Major Medical</a></li>
              <li><Link href="pdfs/PhiladelphiaAmericanHospitalIndemnity.pdf"><a>Indemnity</a></Link></li>
              <li><a href="https://www.healthsherpa.com/?_agent_id=edward-felsenthal">ACA/On & Off Exchange</a></li>
              <li>Longterm Disability</li>
              <li>Shortterm Disability</li>
              <li><Link href="individualdental"><a>Dental</a></Link></li>
              <li>Vision</li>
              <li>Dental/Hearing/Vision</li>
              <li>Medicare Advantage</li>
              <li>Medicare Supplements</li>
              <li>Accident</li>
              <li>Critical Illness</li>
              <li>Cancer</li>
              <li>Prescription</li>
              <li>Drug Plans</li>
              <li>Telehealth Advocacy</li>
              <li>Longterm Care</li>
            </ul>
          </main>

          <footer>
            

          </footer>
        </div>
    );
  }
}

export default IndividualHealth