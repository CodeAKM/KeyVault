import '../globalStyles.css'
import './footerStyles.css'

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footerContent">
					<div className="footerLogo">
						Key Vault
					</div>
					<div className="footerColumns">
						<div className="footerColumn">
						<h3>Company</h3>
						<ul>
							<li><a href="#">About Us</a></li>
							<li><a href="/team">About Me</a></li>
							<li><a href="#">Careers</a></li>
						</ul>
						</div>
						<div className="footerColumn">
						<h3>Contact Us</h3>
						<ul>
							<li>Email: kumar.ashmit29@gmail.com</li>
							<li>Phone: +91 9599-158-699</li>
						</ul>
						</div>
						<div className="footerColumn">
						<br />
						<ul>
							<li>Address: <br />House No.667/1 Sector 91 </li>
						</ul>
						</div>
					</div>
				</div>
				
				<div className="copyright">
					&copy; 2024 Key Vault. All rights reserved.
				</div>
			</footer>
		</>
	)
}

export default Footer