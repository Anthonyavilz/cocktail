import { Link } from 'react-router-dom'


const CocktailHeader = () => {
    return (
        <header className='navBar'>
            <h1>Cocktail Hour</h1>
            <nav>
                <Link to='/cocktailHour'>
                    <button>Home</button>
                </Link>
                <Link to='aboutChristina'>
                    <button>About Christina</button>
                </Link>
                <Link to='aboutMe'>
                    <button>About Me</button>
                </Link>
                <Link to='authForm'>
                    <button>Login/Register</button>
                </Link>
            </nav>
        </header>
    )
}

export default CocktailHeader