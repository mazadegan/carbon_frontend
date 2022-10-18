import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSliders } from "@fortawesome/free-solid-svg-icons";
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
                        <span className="relative flex justify-center items-center w-6 h-6 rounded-full text-neutral-500 hover:text-neutral-800 transition cursor-pointer">
                            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                            <span className="absolute w-2 h-2 bg-orange-600 rounded-full top-0.5 right-0.5 animate-ping"></span>
                            <span className="absolute w-2 h-2 bg-orange-600 rounded-full top-0.5 right-0.5 z-10"></span>
                        </span>
                        <span className="flex justify-center items-center w-6 h-6 rounded-full text-neutral-500 hover:text-neutral-800 transition cursor-pointer">
                            <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
                        </span>
                    </span>
                    <span className="flex items-center space-x-2">
                        <span className="text-sm font-semibold tracking-tighter">Jim Kardashian</span>
                        <span className="flex justify-center items-center h-8 w-8 rounded-full bg-blue-500"></span>
                    </span>
                </span>
            </div>
        );
    }
}

export default DashboardHeader;