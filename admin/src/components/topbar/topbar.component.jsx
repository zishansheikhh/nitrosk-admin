import { Link } from "react-router-dom/dist";
import './topbar.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
    return (
        <div>
            <div className="container m-auto">
                <div className="topbar-wrapper">
                    <div>
                        <Link to='/' className="light-text f-size-1">Nitrosk Admin</Link>
                    </div>
                    <div className="topbar-links">
                        <ul>
                            <li><FontAwesomeIcon icon="fa-solid fa-user" /></li>
                            <li><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Topbar;