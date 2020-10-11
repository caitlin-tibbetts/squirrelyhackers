import PropTypes from 'prop-types'
import Link from 'next/link'
import Menu from '../components/Menu'

const Header = (props) => (
    <header id="header" className="alt">
        <Link href="/">
            <img width='25%' src='../static/images/Gold_and_Black_Vintage_Logo.png' alt='GrantRoutes Logo'/>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/resources">
            Resource Submission
        </Link>
        &nbsp;&nbsp;
        <Link href="/workshop">
            Workshop Submission
        </Link>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
