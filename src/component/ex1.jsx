import "./ex1.css"
import Footer from "./footer"
const Ex1 = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img className="logo-icon" src="/img1.png" alt="" />
                    <span className="logo-text">Cheffy</span>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search recipes..." />
                </div>

                <nav className="nav-links">
                    <a href="#">What to cook</a>
                    <a href="#">Recipes</a>
                    <a href="#">Ingredients</a>
                    <a href="#">Occasions</a>
                    <a href="#">About Us</a>
                </nav>

                <div className="user-section">
                    <button className="recipe-box">Your Recipe Box</button>
                    <img className="user-avatar" src="/img1.png" alt="" />
                </div>
            </div>

            <div className="body">
                <div className="left">
                    <img src="/img2.png" alt="" />

                </div>
                <div className="right">
                    <div className="right__logo">
                        <h2>Sorry no results were found for "cakescascsa"</h2>
                        <img className="logo-icon" src="/img3.png" alt="" />
                        <h4>We have all your Independence Day sweets covered.</h4>
                    </div>
                    <div className="wrapper">
                        <button>Your Recipe Box</button>
                        <button>Your Recipe Box</button>
                        <button>Your Recipe Box</button>
                        <button>Your Recipe Box</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Ex1