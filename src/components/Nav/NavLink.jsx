import { Component } from "react";
import { Link } from "react-router-dom";

class NavLink extends Component {
    state = {}
    render() {
        return (
            <Link to={this.props.route} className='flex items-center h-full px-4 hover:bg-neutral-100 cursor-pointer'> {this.props.children} </Link>
        );
    }
}

export default NavLink;