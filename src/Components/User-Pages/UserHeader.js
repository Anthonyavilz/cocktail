import { Link } from 'react-router-dom'


const UserHeader = () => {
    return (
        <header className='navBar'>
            <h1>Cocktail Hour</h1>
            <nav>
                <Link to='/cocktailHour/User'>
                    <button>Home</button>
                </Link>
                <Link to='mapView'>
                    <button>Map View</button>
                </Link>
                <Link to='postForm'>
                    <button>Post</button>
                </Link>
                <Link to='/cocktailHour'>
                    <button>Logout</button>
                </Link>
            </nav>
        </header>
    )
}

export default UserHeader