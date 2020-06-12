import Head from 'next/head'
import Navbar from '../components/navbar'
import Footbar from '../components/footbar'

class OurTeam extends React.Component {
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
              <h2>Our Team</h2>  
            </div>

            <h1 className="title">
              Felsenthal Health and Employee Benefits
            </h1>

            <ul className="cards">
              <li>Edward Felsenthal</li>
              <li>Stephen Lester</li>
              <li>David Deaderick</li>
              <li>Cecilia Watson</li>
            </ul>

            
          </main>

          <Footbar />
        </div>
    );
  }
}

export default OurTeam