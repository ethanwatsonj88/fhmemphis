import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'

import Footbar from '../components/footbar'

class Accident extends React.Component {
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
              <h2>Individual Health - Accident</h2>  
            </div>

            <h1 className="title">
              Felsenthal Health and Employee Benefits
            </h1>

            <h3><a href="https://ddtn.dentalforeveryone.com/?Portal=DDTN-18289056">Enroll Now</a></h3>

            <ul className="cards">
              <li className="card"><Link href="pdfs/AccidentConsumerBrochure.pdf"><a>Accident Consumer Brochure</a></Link></li>
              <li className="card"><Link href="pdfs/accidentAndCriticalIllness.pdf"><a>Accident and Critical Illness</a></Link></li>
          
            </ul>
          </main>

          <Footbar />
        </div>
    );
  }
}

export default Accident