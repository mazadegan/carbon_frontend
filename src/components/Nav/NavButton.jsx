import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class NavButton extends Component {
    state = {}
    render() {
        return (
            <Link to={this.props.route} className='flex items-center space-x-2 mx-1 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-sm h-10 transition'><span>{this.props.children}</span> <span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
        );
    }
}

export default NavButton;