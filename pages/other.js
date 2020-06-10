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
              Here to support you
            </h1>

            <h3>Been in Business for over 50 years.</h3>
            <p>Financial Services Company specializing in individual and group health insurance and other employee benefits.</p>
            <p>We write individual health insurance on and off the Affordable Care Act Health Insurance Exchange.</p>
            <p>We also write group health insurance for companies from 2 to 2,000, as well as other employee benefits 
            such as Group Dental, Life, Long Term Disability, Short Term Disability, Long Term Care, Critical Health 
            Savings Accounts, Health Reimbursement Arrangements, and Flexible Spending Accounts.</p>
            <p>We represent all the major carries including Blue Cross of TN, CIGNA, Aetna, United Healthcare, Humana, Mutual of Omaha, Guardian, and Mass Mutual</p>
          </main>

          <footer>
            

          </footer>
        </div>
    );
  }
}

export default Other