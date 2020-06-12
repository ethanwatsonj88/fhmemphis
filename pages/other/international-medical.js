import Head from 'next/head'
import Navbar from '../../components/navbar'
import Link from 'next/link'

class InternationalMedical extends React.Component {
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
              <h2>International Medical</h2>  
            </div>

            <h1 className="title">
              Felsenthal Health and Employee Benefits
            </h1>

            <ul className="cards">
              <li><Link href="/pdfs/TravelMedical.pdf"><a>Patriot Travel Series</a></Link></li>
              <li><Link href="/pdfs/TravelMedical2.pdf"><a>Global Medical Insurance</a></Link></li>

            </ul>
          </main>

          <footer>
            

          </footer>
        </div>
    );
  }
}

export default InternationalMedical
