import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLeaf, faList, faKey, faDoorOpen, faCog } from "@fortawesome/free-solid-svg-icons";

class DashBoard extends Component {
    state = {}
    render() {
        return (
            <div className="flex w-full h-screen bg-neutral-300">
                <div className="flex h-full p-8">
                    <div className="flex flex-col justify-between w-full h-full bg-neutral-100 shadow rounded-3xl p-12">
                        <div className="flex flex-col items-center justify-center w-full space-y-10">

                            <span className='flex items-center space-x-2 cursor-pointer'>
                                <span className='flex justify-center items-center h-12 w-12 bg-green-500'>
                                    <span className='text-white text-2xl'>
                                        <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
                                    </span>
                                </span>
                                <span className='text-xl font-bold'>GreenMail</span>
                            </span>
                            <div className="flex flex-col items-center space-y-4 w-full">
                                <span className="flex justify-center items-center text-center font-light text-white w-28 h-28 bg-opacity-80 bg-green-500 rounded-full"></span>
                                <span className="text-neutral-600 font-light tracking-tight">Welcome back,</span>
                                <span className="text-3xl font-bold tracking-tight">Jim Kardashian</span>
                            </div>

                        </div>

                        <div className="flex flex-col items-center justify-center w-full space-y-4 text-lg font-light h-full">
                            <span className="flex items-center space-x-2 text-neutral-900 hover:text-neutral-900 cursor-pointer tracking-tight">
                                <FontAwesomeIcon icon={faEnvelope} className='text-lg'></FontAwesomeIcon>
                                <span>Mail Composer</span>
                            </span>
                            <span className="flex items-center space-x-2 text-neutral-500 hover:text-neutral-900 cursor-pointer tracking-tight">
                                <FontAwesomeIcon icon={faList} className='text-lg'></FontAwesomeIcon>
                                <span>Mailing Lists</span>
                            </span>
                            <span className="flex items-center space-x-2 text-neutral-500 hover:text-neutral-900 cursor-pointer tracking-tight">
                                <FontAwesomeIcon icon={faKey} className='text-lg'></FontAwesomeIcon>
                                <span>API Keys</span>
                            </span>
                            <span className="flex items-center space-x-2 text-neutral-500 hover:text-neutral-900 cursor-pointer tracking-tight">
                                <FontAwesomeIcon icon={faCog} className='text-lg'></FontAwesomeIcon>
                                <span>Preferences</span>
                            </span>
                        </div>

                        <div className="flex w-full justify-center">
                            <span className="flex w-full justify-center items-center space-x-2 text-neutral-500 hover:text-neutral-900 cursor-pointer tracking-tighter">
                                <FontAwesomeIcon icon={faDoorOpen} ></FontAwesomeIcon>
                                <span>Log Out</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-grow h-full p-8">
                    <div className="flex w-full h-full justify-center items-center bg-neutral-100 rounded-3xl shadow">
                        <span className="text-xl font-light tracking-tighter">Tools go here.</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;