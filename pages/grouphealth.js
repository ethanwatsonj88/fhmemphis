import Head from 'next/head'
import Navbar from '../components/navbar'
import Footbar from '../components/footbar'

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

            <ul className="cards">
              <li className="card">Health</li>
              <li className="card">Dental</li>
              <li className="card">Life</li>
              <li className="card">LTC</li>
              <li className="card">Disability</li>
              <li className="card">FSA/HSA/HRA</li>

            </ul>
          </main>

          <Footbar />
        </div>
    );
  }
}

export default GroupHealth