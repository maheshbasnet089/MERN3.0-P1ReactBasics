import { Link } from 'react-router-dom'
import './Home.css'

function Home(){

    return (
       <>
        <nav className="navbar">
        <div className="container">
            <a href="#" class="brand">My Website</a>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>

 
    <div className="main-content">
        <div className="container">
            <h1>Welcome to My Website</h1>
            <p>This is a simple page with a navbar and some content in the middle.</p>
            <p>You can customize this template to fit your needs. Happy coding!</p>
        </div>
    </div>
       </>
    )
}

export default Home