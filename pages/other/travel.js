import Head from 'next/head'
import Navbar from '../../components/navbar'
import Link from 'next/link'

class Travel extends React.Component {
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
              <h2>Travel</h2>  
            </div>

            <h1 className="title">
            Felsenthal Health and Employee Benefits
            </h1>

            <ul className="cards">
              <li><Link href="pdfs/Travel1.pdf"><a>iTravel Insured Lite</a></Link></li>
              <li><Link href="pdfs/Travel2.pdf"><a>iTravel Insured SE</a></Link></li>
              <li><Link href="pdfs/Travel3.pdf"><a>iTravel Insured LX</a></Link></li>
            </ul>

            
          </main>

          <footer>
            

          </footer>
        </div>
    );
  }
}

export default Travel