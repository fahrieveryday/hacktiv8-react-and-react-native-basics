import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className='navbar'>
        <Link href='#' className='text-logo'>
          QTemu
        </Link>
        <Link href='#' className='navbar-item'>
          Create Meetup
        </Link>
        <Link href='#' className='navbar-item'>
          Explore
        </Link>
        <span className='flex-grow' />
        <Link href='#' className='navbar-item'>
          Login
        </Link>
      </header>
    )
}

export default Navbar