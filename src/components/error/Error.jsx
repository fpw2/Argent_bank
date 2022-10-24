import { NavLink } from "react-router-dom";
 /**
  * Display the page error when the path in url is wrong
  */
export default function Error() {
    return (
        <div className="error">
            <h1>This page does not exist</h1>
            <NavLink to="/">Back to home</NavLink>
        </div>

    )
}