import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'

import Footbar from '../components/footbar'

class IndividualDental extends React.Component {
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
              <h2>Individual Health - Dental</h2>  
            </div>

            <h1 className="title">
              Felsenthal Health and Employee Benefits
            </h1>

            <h3><a href="https://ddtn.dentalforeveryone.com/?Portal=DDTN-18289056">Enroll Now</a></h3>

            <ul className="cards">
              <li className="card"><Link href="pdfs/Delta_Dental_Plan1.pdf"><a>Delta Dental - Essential Advantage PPO</a></Link></li>
              <li className="card"><Link href="pdfs/Delta_Dental_Plan2.pdf"><a>Delta Dental - Superior Advantage PPO</a></Link></li>
              <li className="card"><Link href="pdfs/Delta_Dental_Plan3.pdf"><a>Delta Dental - Brighter Advantage PPO</a></Link></li>
              <li className="card"><Link href="pdfs/HumanaPreventativePlus.pdf"><a>Humana Preventative Plus</a></Link></li>
              <li className="card"><Link href="pdfs/HumanaLoyaltyPlus.pdf"><a>Humana Loyalty Plus</a></Link></li>
              <li className="card"><Link href="pdfs/HumanaCompleteDental.pdf"><a>Humana Complete Dental</a></Link></li>
          
            </ul>
          </main>

          <Footbar />
        </div>
    );
  }
}

export default IndividualDental