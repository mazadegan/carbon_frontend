import { faCalendar, faClipboard, faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCode, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import APITab from "../components/Dashboard/APITab";
import ComposerTab from "../components/Dashboard/ComposerTab";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import SchedulerTab from "../components/Dashboard/SchedulerTab";
import SidebarButton from "../components/Dashboard/SidebarButton";

class DashBoard extends Component {
    state = {
        activeTab: 'API',
    }

    setActiveTab = (tab) => {
        console.log('Setting tab: ', tab);
        this.setState({
            activeTab: tab
        });
    }

    componentDidMount = () => {
        document.title = 'GreenMail | Dashboard'
    }

    render() {
        return (
            <div className="flex w-full h-screen bg-neutral-100">

                <div className="flex flex-col items-center bg-neutral-100 p-2.5 space-y-7 border-r">
                    <span className="flex justify-center items-center w-12 h-12 rounded-full text-neutral-800 hover:bg-neutral-200 cursor-pointer transition">
                        <FontAwesomeIcon icon={faBars} className={'text-xl'}></FontAwesomeIcon>
                    </span>
                    <div className="flex flex-col items-center w-full space-y-4 text-neutral-800">
                        <SidebarButton selected={this.state.activeTab === 'Composer'} icon={faEnvelope} title={'Composer'} func={() => { this.setActiveTab('Composer') }}></SidebarButton>
                        <SidebarButton selected={this.state.activeTab === 'Scheduler'} icon={faCalendar} title={'Scheduler'} func={() => { this.setActiveTab('Scheduler') }}></SidebarButton>
                        <SidebarButton selected={this.state.activeTab === 'API'} icon={faCode} title={'API'} func={() => { this.setActiveTab('API') }}></SidebarButton>
                    </div>
                </div>

                <div className="flex flex-col flex-grow bg-neutral-50">
                    <DashboardHeader></DashboardHeader>
                    {this.state.activeTab === 'Composer' && <ComposerTab></ComposerTab>}
                    {this.state.activeTab === 'Scheduler' && <SchedulerTab></SchedulerTab>}
                    {this.state.activeTab === 'API' && <APITab></APITab>}
                </div>
            </div>
        );
    }
}

export default DashBoard;