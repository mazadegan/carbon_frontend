import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import {Navigate} from "react-router-dom";
import APITab from "../components/Dashboard/APITab";
import ComposerTab from "../components/Dashboard/ComposerTab";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
// import SchedulerTab from "../components/Dashboard/SchedulerTab";
import SidebarButton from "../components/Dashboard/SidebarButton";
import jwt_decode from "jwt-decode"

class DashBoard extends Component {
    state = {
        activeTab: 'Composer',
        loggedIn: true,
        decodedToken: null,
        token: null
    }

    setActiveTab = (tab) => {
        console.log('Setting tab: ', tab);
        this.setState({
            activeTab: tab
        });
    }
    
    apiUrl = 'https://greenmail-backend.herokuapp.com'

    componentDidMount = () => {
        // handle redirect for if you're not logged in

        const token = sessionStorage.getItem('jwt');

        if (token != null) {
            const decoded = jwt_decode(token)
            this.setState({
                token: sessionStorage.getItem('jwt'),
                decodedToken: decoded,
                userData: {
                    FullName: decoded.FullName,
                    Email: decoded.Email,
                    OrganizationName: decoded.OrganizationName
                }
            })
        } else {
            this.setState({loggedIn: false})
            alert('Error: Unauthorized. Please log in.')
        }
        
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
                        {/*<SidebarButton selected={this.state.activeTab === 'Scheduler'} icon={faCalendar} title={'Scheduler'} func={() => { this.setActiveTab('Scheduler') }}></SidebarButton>*/}
                        <SidebarButton selected={this.state.activeTab === 'API'} icon={faCode} title={'API'} func={() => { this.setActiveTab('API') }}></SidebarButton>
                    </div>
                </div>

                <div className="flex flex-col flex-grow bg-neutral-50">
                    <DashboardHeader userData={this.state.userData}></DashboardHeader>
                    {this.state.activeTab === 'Composer' && <ComposerTab jwt={this.state.token} apiUrl={this.apiUrl}></ComposerTab>}
                    {/*this.state.activeTab === 'Scheduler' && <SchedulerTab></SchedulerTab>*/}
                    {this.state.activeTab === 'API' && <APITab jwt={this.state.token}></APITab>}
                </div>

                {this.state.loggedIn === false && <Navigate to={'/login'} replace={true}></Navigate>}

            </div>
        );
    }
}

export default DashBoard;
