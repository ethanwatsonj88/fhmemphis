import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'
import Footbar from '../components/footbar'

class Other extends React.Component {
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
              <h2>Other</h2>  
            </div>

            <h1 className="title">
            Felsenthal Health and Employee Benefits
            </h1>

            <ul className="cards">
              <li className="card">Property</li>
              <li className="card"><Link href="other/travel"><a>Travel</a></Link></li>
              <li className="card"><Link href="other/international-medical"><a>International Medical</a></Link></li>
              <li className="card">Business</li>
              <li className="card">Worker Comp</li>
              <li className="card">Auto/Home</li>
              <li className="card">Pet</li>
            </ul>

            
          </main>

          <Footbar />
        </div>
    );
  }
}

export default Other