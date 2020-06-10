import Link from 'next/link'

class Navbar extends React.Component {
  render() {
    return (
    	<div className="navbar">
    		<ul className="navbar">
                <li><Link href="/"><a><img src="logo.png" className="navbar-image" /></a></Link></li>
    			<li><Link href="/ourcompany"><a>Our Company</a></Link></li>
    			<li><Link href="individualhealth"><a>Individual Health</a></Link></li>
    			<li><Link href="grouphealth"><a>Group Health</a></Link></li>
    			<li><Link href="other"><a>Other</a></Link></li>
    			<li><Link href="ourteam"><a>Our Team</a></Link></li>
    		</ul>
    	</div>
    );
  }
}

export default Navbar