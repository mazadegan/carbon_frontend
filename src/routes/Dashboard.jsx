import { faCalendar, faClipboard, faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCode, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import SidebarButton from "../components/Dashboard/SidebarButton";

class DashBoard extends Component {
    state = {}
    render() {
        return (
            <div className="flex w-full h-screen bg-neutral-100">

                <div className="flex flex-col items-center bg-neutral-100 p-2.5 space-y-7 border-r">
                    <span className="flex justify-center items-center w-12 h-12 rounded-full text-neutral-800 hover:bg-neutral-200 cursor-pointer transition">
                        <FontAwesomeIcon icon={faBars} className={'text-xl'}></FontAwesomeIcon>
                    </span>
                    <div className="flex flex-col items-center w-full space-y-4 text-neutral-800">
                        <SidebarButton selected={false} icon={faEnvelope} title={'Composer'}></SidebarButton>
                        <SidebarButton selected={false} icon={faCalendar} title={'Scheduler'}></SidebarButton>
                        <SidebarButton selected={true} icon={faCode} title={'API'}></SidebarButton>
                    </div>
                </div>

                <div className="flex flex-col flex-grow bg-neutral-50">
                    <DashboardHeader></DashboardHeader>
                    <div className="flex justify-center items-center flex-grow px-6">
                        <div className="flex flex-col max-w-lg space-y-6 p-8 border rounded-lg">
                            <span className="flex flex-col w-full space-y-2">
                                <span className="text-xl font-bold tracking-tight">Subscribe readers to your letters</span>
                                <span className="tracking-tight">Choose the mailing list you want to add your readers to and we'll generate your GET request.</span>
                            </span>
                            <span className="flex w-full border-b"></span>
                            <span className="flex items-center space-x-1">
                                <span className="tracking-tight">Subscribe readers to </span>
                                <select className="flex p-0.5 border rounded-lg tracking-tight font-medium" name="" id="">
                                    <option value="">My Newsletter</option>
                                    <option value="">My Marketing Letter</option>
                                </select>
                                <span>.</span>
                            </span>
                            <span className="relative flex flex-col p-4 bg-neutral-200 rounded-lg ibm text-sm">
                                <FontAwesomeIcon className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-900 transition cursor-pointer" icon={faClipboard}></FontAwesomeIcon>
                                <span className="flex overflow-x-auto font-light">http://www.greenmail.xyz/api/subscribe?key=auyw4i7h32ef2&mailing_list=my_newsletter</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;