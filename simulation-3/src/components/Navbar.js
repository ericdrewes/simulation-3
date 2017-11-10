import React, { Component } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import './home.png';
import LandingPage from './LandingPage';



export default class Navbar extends Component {
	render() {
		return (
			<div className='main'>
					<div className='left-nav'>
				
					<div className='one'>Helo</div>
				
					<div className='one'>
					<Link to={LandingPage}>
					<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAAXNSR0IArs4c6QAAAZ9JREFUSA3tlL1KA0EUhXc1QlCwShNimcIu2giChV36YBB7C3vxCcwL6CMEgo3gE2hnH/zBKrGztBQEcf1OuBt2Bmcza+3A596595wzJrvZJKmwsixrw73RrmBNlmLFhB+jHcOKMbZebES5jrAG3MAXDKBmqFZPs0Z5yoIpAV14g1fY8+Xq2Uyarj9fuMdUhwv4hiGsh0yamUZaeeohrdNH2IEneIdDZ1iykdY88naCUoYpnMIn3MFGUBwYyGNeZSgrdaQ0WnALEpyBK3DU5Rt5LUNZymzNHBQ90Nf0DFvlMfFTZVmmsnsJfx7hEuJuYvxZytZDpewHx0bjBXad5h82ylBW0eq/GTYZVn4IioFWK0NZ81WbVxEF/+URsgOTXqdpehVhm0n8TxT0cciA4Qh0L8WI3jnX6gujVt930muC3msn+Uy19Zp5L7/S70OW73WN/UTbaJdhKJMt1epptnDFHrSmJO7JR55YqGezvB+6xh4U8kf3/w+K/qp84W8/2H2ezFVPuOPti9uq+kQvwYme/8CaFtNVo5sGtGpPivofLh2TqPQC754AAAAASUVORK5CYII='/> 
					</Link></div>
					
						<div className='one'><Link to ="/search">
					<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAeJJREFUSA2tlM0rBGEcx3dWEREp4oBVrvsXLJEoTsR/QDk6ydt1E2ccuIniKGeEi4MLbY6SAzaRUt5C1uer9pkZM7PM2m99muf5vT0zz/yeJxLxUSaTKYch2IJzeIF7SMECdPikeUzWTwuJI9iSUA0HcAhpKIVm6IEWkG/UsqwUz9yiaAmswScsQ31QBr4uOIEnGAyKM3aCVFjB/caYY0CcXmYVPqA7MBTnCOiN/1Q4W4h4C/Rf9D9qs3bzxKifdwNLxhhiQF4V3MGiJw2juuIN6jzOPxrInYRnKHOlYNBnbbuMISfkx0Dqc6ZGmcRB7Za3aMcLkq9BtYxUXC2nPv6vVMPVvir+Ajog/5VqvDqLqPgVxJzGsGP2uoicBlAtIxXfh15jyW+QIK0CdCXYYtV2kDpta7gRuRtwBpYnE+MeHEOxx/mLgZxW0Oke9g3FEYdHWAHv6r5ZkQixTZCGXdAW+wvnALzDJlT6R9lWYhKgwtKM7QkYEaSrVJfQLYxDozOUeRTaYB20FTuQBGnKGes7JqgG5kHXr3QJR3AKDyDp5+lO+t4KnhMguRYI3F8CdSh0T+tI6+TpgKiP1W7HHPkMTyPiJ5jMwTS+WeMo1EALgOT6gkLVVwdlF9CXFF4sMAapL60vtT4ftHlFAAAAAElFTkSuQmCC' />
					
					</Link></div>
					</div>
				
				<div className='words'>Dashboard changing words</div>
				
				<div className='logout'><Link to='/auth'>Logout</Link></div>

			</div>
		);
	}
}