import Head from 'next/head'
import Navbar from '../components/navbar'

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

            <ul>
              <li>Property</li>
              <li>Travel</li>
              <li>International Medical</li>
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