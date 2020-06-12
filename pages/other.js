import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'

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
              <li>Property</li>
              <li><Link href="other/travel"><a>Travel</a></Link></li>
              <li><Link href="other/international-medical"><a>International Medical</a></Link></li>
              <li>Business</li>
              <li>Worker Comp</li>
              <li>Auto/Home</li>
              <li>Pet</li>
            </ul>

            
          </main>

          <footer>
            

          </footer>
        </div>
    );
  }
}

export default Other