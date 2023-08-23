import { Link } from 'react-router-dom'
import landing from './srcImages/cocktailhour-20.jpg' 

const EntryPage = () => {
    return (
        <div className="main-background" >
            <Link to='/cocktailHour' >
                <img
                    src={landing}
                    alt=''
                />
            </Link>
        </div>
    )
}

export default EntryPage