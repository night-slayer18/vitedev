import { Link, Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <p>Welcome to my blog</p>
        {/* child routing */}
        <div className="child">
            <ul>
                <li>
                    <Link to="/home/component1">Component 1</Link>
                </li>
                <li>
                    <Link to="/home/component2">Component 2</Link>
                </li>
                <li>
                    <Link to="/home/component3">Component 3</Link>
                </li>
            </ul>
        </div>
        <Outlet/>
    </div>
  )
}

export default Home
