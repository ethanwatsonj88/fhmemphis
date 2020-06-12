import Head from 'next/head'
import Navbar from '../components/navbar'

class GroupHealth extends React.Component {
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
              <h2>Group Health</h2>  
            </div>

            <h1 className="title">
              Felsenthal Health and Employee Benefits
            </h1>

            <ul>
              <li>Health</li>
              <li>Dental</li>
              <li>Life</li>
              <li>LTC</li>
              <li>Disability</li>
              <li>FSA/HSA/HRA</li>

            </ul>
          </main>

          <footer>
            

          </footer>
        </div>
    );
  }
}

export default GroupHealth