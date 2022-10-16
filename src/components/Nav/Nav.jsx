import { Component } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
    state = {}
    render() {
        return (
            <div className='fixed flex justify-between w-full h-12 bg-white shadow-sm z-20'>

                <Link to={'/'} className='flex items-center h-full space-x-2 cursor-pointer'>
                    <span className='flex justify-center items-center h-12 w-12 bg-green-500'>
                        <span className='text-white text-2xl'>
                            <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
                        </span>
                    </span>
                    <span className='text-xl font-bold'>GreenMail</span>
                </Link>

                <div className='flex items-center'>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default Nav;