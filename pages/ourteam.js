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

            <div className="employee-strip">
              <ul className="employee-details">
                <li><b>Stephen Lester</b></li>
                <li>Phone: 901-268-4824</li>
                <li>Email: steve@fhmemphis.com</li>
              </ul>
              <img src="sl.png" />
            </div>

            <div className="employee-strip">
              <ul className="employee-details">
                <li><b>David Deaderick</b></li>
                <li>Phone: 901-260-6420</li>
                <li>Email: david@fhmemphis.com</li>
              </ul>
              <img src="dd.png" />
            </div>

            
          </main>

          <Footbar />
        </div>
    );
  }
}

export default OurTeam