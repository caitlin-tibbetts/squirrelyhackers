import PropTypes from 'prop-types'
import Link from 'next/link'
import Menu from '../components/Menu'

const Header = (props) => (
    <header id="header" className="alt">
        <Link href="/">
            <img width='25%' src='../static/images/Gold_and_Black_Vintage_Logo.png' alt='GrantRoutes Logo'/>
        </Link>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
