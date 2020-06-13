import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'

import Footbar from '../components/footbar'

class Cancer extends React.Component {
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
              <h2>Individual Health - Cancer</h2>  
            </div>

            <h1 className="title">
              Felsenthal Health and Employee Benefits
            </h1>

            <ul className="cards">
              <li className="card"><Link href="pdfs/CancerCarePlusBrochure.pdf"><a>Cancer Care Plus Brochure</a></Link></li>
              <li className="card"><Link href="pdfs/Cancer.pdf"><a>Cancer First Occurence</a></Link></li>
          
            </ul>
          </main>

          <Footbar />
        </div>
    );
  }
}

export default Cancer