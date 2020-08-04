import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'
import ContactUs from '../components/contact-form';

import Footbar from '../components/footbar'

class CignaOscar extends React.Component {
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
              <h2>Cigna + Oscar</h2>  
            </div>

            <h1 className="title">
              Introducing Cigna + Oscar new health care partnership for Tennessee
            </h1>

            <h3>Combining Cigna's extensive provider network with Oscar's technical expertise</h3>
            <h3>Very competitive rates</h3>
            <h3>Choose from 12 different plans</h3>
            <h3>Can cover groups from 2 to 50 employees</h3>
            <h3>Guarantee issue</h3>
            <h3>Pre-existing conditions covered immediately</h3>
            <h3>Doctor on call (Virtual Urgent care) 24/7</h3>
            <h3>Dedicated concierge team that will help find the right doctors, 
            facilities, and manage your care</h3>

            <br />

            <h2>Special Covid-19 assistance</h2>

            <h3>Doctors on call 24/7 at no charge</h3>
            <h3>Testing at no charge</h3>
            <h3>Assistance finding testing sites</h3>
            <h3>No charge for treatment if treating by an in network provider</h3>

            <h2>For more information or to get a quote call or email: </h2>
            <h3>Stepher Lester (901) 268-4824</h3>
            <h4>Email - steve@fhmemphis.com</h4>
            <h3>David Deaderick (901) 260-6420</h3>
            <h4>Email - david@fhmemphis.com</h4>

            <ContactUs />

          </main>

          <Footbar />
        </div>
    );
  }
}

export default CignaOscar
