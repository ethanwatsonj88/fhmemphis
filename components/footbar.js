import Link from 'next/link'

class Footbar extends React.Component {
  render() {
    return (
        <footer>
        	<ul className="navbar footbar">
                <li className="footer-text first">Follow us on&nbsp;<a href="https://www.facebook.com/felsenthalhealth/?ref=br_rs" target="_blank">Facebook</a></li>
                <li className="footer-text">949 South Shady Grove Road</li>
                <li className="footer-text">(901) 767-5951</li>
                <li className="footer-text">felsenthalhealth@gmail.com</li>
                <li className="footer-text">Hours of operation: 8 am - 5 pm</li>
                <li className="footer-text last">Get a quote</li>
            </ul>
        </footer>
    );
  }
}

export default Footbar