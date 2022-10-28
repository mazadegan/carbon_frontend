import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faLeaf, faSliders } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

class DashboardHeader extends Component {
    state = {}
    render() {
        return (
            <div className="flex justify-between items-center w-full bg-neutral-100 border-b p-3">
                <span className='flex items-center h-full space-x-2 cursor-pointer'>
                    <span className='flex justify-center items-center h-10 w-10 bg-green-500'>
                        <span className='text-white text-xl'>
                            <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
                        </span>
                    </span>
                    <span className='text-xl font-semibold'>GreenMail</span>
                </span>
                <span className="flex items-center space-x-6">
                    <span className="flex items-center space-x-2">
                        <span className="relative flex justify-center items-center w-7 h-7 rounded-full text-neutral-500 hover:text-neutral-800 transition cursor-pointer">
                            <FontAwesomeIcon icon={faBell} className='text-lg'></FontAwesomeIcon>
                            <span className="absolute w-2 h-2 bg-orange-600 rounded-full top-0.5 right-0.5 animate-ping"></span>
                            <span className="absolute w-2 h-2 bg-orange-600 rounded-full top-0.5 right-0.5 z-10"></span>
                        </span>
                        <span className="flex justify-center items-center w-6 h-6 rounded-full text-neutral-500 hover:text-neutral-800 transition cursor-pointer">
                            <FontAwesomeIcon icon={faSliders} className='text-lg'></FontAwesomeIcon>
                        </span>
                    </span>
                    <span className="flex items-center space-x-2 hover:bg-neutral-200 h-full p-2 rounded-lg cursor-pointer">
                        <span className="flex flex-col flex-grow ">
                            <span className="text-sm font-bold tracking-tighter">{this.props.userData != null ? this.props.userData.FullName : null}</span>
                            <span className="text-xs font-semibold text-gray-500 tracking-tighter">{this.props.userData != null ? this.props.userData.OrganizationName : null}</span>
                        </span>
                        <FontAwesomeIcon icon={faCaretDown} className='text-xs'></FontAwesomeIcon>
                        <span className="flex justify-center items-center h-8 w-8 rounded-full bg-blue-500"></span>
                    </span>
                </span>
            </div>
        );
    }
}

export default DashboardHeader;
