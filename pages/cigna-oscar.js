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

            <div className="head cigna">
              <h2>Cigna + Oscar</h2>  
            </div>

            <h1 className="title">
              Introducing Cigna + Oscar, a new health care partnership for Tennessee.
            </h1>

            <h3>
              <ul>
                <li>Combining Cigna's extensive provider network with Oscar's technical expertise </li>
                <li>Very competitive rates</li>
                <li>Choose from 12 different plans</li>
                <li>Can cover groups from 2 to 50 employees</li>
                <li>Guarantee issue</li>
                <li>Pre-existing conditions covered immediately</li>
                <li>Doctor on call (Virtual Urgent care) 24/7</li>
                <li>Dedicated concierge team that will help find the right doctors, 
                facilities, and manage your care</li>
              </ul>
            </h3>

            <br />

            <h2 className="cigna-section-title">Special Covid-19 assistance</h2>

            <h3>
              <ul>
                <li>Doctors on call 24/7 at no charge</li>
                <li>Testing at no charge</li>
                <li>Assistance finding testing sites</li>
                <li>No charge for treatment if treating by an in network provider</li>
              </ul>
            </h3>

            <h2 className="cigna-section-title">For more information or to get a quote call or email: </h2>

            <h3>
              <ul>
                <li><b>Stepher Lester (901) 268-4824</b></li>
                <li>Email - steve@fhmemphis.com</li>
                <li><b>David Deaderick (901) 260-6420</b></li>
                <li>Email - david@fhmemphis.com</li>
              </ul>
            </h3>

            <ContactUs />

          </main>

          <Footbar />
        </div>
    );
  }
}

export default CignaOscar
