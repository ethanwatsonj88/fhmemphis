import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'

import Footbar from '../components/footbar'

class CriticalIllness extends React.Component {
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
              <h2>Individual Health - Critical Illness</h2>  
            </div>

            <h1 className="title">
              Felsenthal Health and Employee Benefits
            </h1>

            <ul className="cards">
              <li className="card"><Link href="pdfs/CriticalIllnessconsumerbrochure.pdf"><a>Critical Illness Consumer Brochure</a></Link></li>
          
            </ul>
          </main>

          <Footbar />
        </div>
    );
  }
}

export default CriticalIllness