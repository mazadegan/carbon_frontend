import axios from "axios";
import { Component } from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ComposerTab extends Component {
    state = {
        Subject: "",
        Body: "",
        SendDate: new Date().toLocaleDateString('en-ca'),
        disabled: true
    }

    reset = () => {
        console.log('Resetting...')
        this.setState({
            Subject: "",
            Body: "",
            SendDate: new Date().toLocaleDateString('en-ca'),
        })
    }

    saveLetter = () => {
        const data = {
            Subject: this.state.Subject,
            Body: this.state.Body,
            SendDate: this.state.SendDate,
            MailingList: this.state.MailingList,
            jwt: this.props.jwt,
        }
        axios.post(`${this.props.apiUrl}/saveletter`, data)
        .then((res) => {
            console.log(res);
            toast("Letter scheduled!");
            this.reset();
        })
        .catch((err) => {
            console.log(err);
        })
        
    }

    updateDisabled = () => {
        const currState = this.state;
        if (currState.Subject === "" || currState.Body === "" || currState.SendDate === "") {
            // console.log(this.state, true);
            this.setState({disabled: true})
        } else {
            this.setState({disabled: false})
            // console.log(this.state, false);
        }
    }

    render() {
        return (
            <div className="flex justify-center items-center flex-grow px-6">
                <ToastContainer></ToastContainer>
                <div className="flex flex-col w-2/5 space-y-6 p-8 border rounded-lg">
                    <span className="flex flex-col w-full space-y-2">
                        <span className="text-xl font-bold tracking-tight">Compose your letters</span>
                    </span>
                    <span className="flex flex-col w-full space-y-1">
                        <span className="tracking-tighter text-sm">Subject:</span>
                        <input value={this.state.Subject} type="text" className="flex p-1 border rounded-lg tracking-tight w-full" onChange={(e) => {this.setState({Subject: e.target.value}, this.updateDisabled())}}/>
                    </span>
                    <span className="flex flex-col w-full space-y-1">
                        <span className="tracking-tighter text-sm">Body:</span>
                        <textarea value={this.state.Body} className="flex p-1 border rounded-lg tracking-tight w-full h-32" onChange={(e) => {this.setState({Body: e.target.value}, this.updateDisabled)}}></textarea>
                    </span>
                    <span className="flex flex-col w-full space-y-2">
                        <span className="flex items-center space-x-1">
                            <input type="radio" className="accent-green-500" checked={true} readOnly/>
                            <span className="tracking-tight">Add to existing mailing list </span>
                            <select className="flex p-0.5 border rounded-lg tracking-tight font-medium" name="" id="">
                                <option value="">My Marketing Letter</option>
                                <option value="" disabled>My Newsletter</option>
                            </select>
                        </span>
                        <span className="flex items-center space-x-1">
                            <input type="radio" className="accent-green-500" disabled/>
                            <span className="tracking-tight">Create new mailing list</span>
                            <input type="text" className="flex p-0.5 border rounded-lg tracking-tight " disabled/>
                        </span>
                    </span>
                    <span className="flex flex-grow items-center space-x-1">
                        <span className="tracking-tight">Send on</span>
                        <input type={"date"} value={this.state.SendDate} className={"border rounded-lg tracking-tight"} min={new Date().toLocaleDateString('en-ca')} onChange={(e) => {this.setState({SendDate: e.target.value}, this.updateDisabled())}}></input>
                    </span>
                    <span className="flex justify-end w-full space-x-2">
                        <button className="px-4 py-2 bg-neutral-100 border-neutral-600 border-2 text-neutral-800 rounded-lg hover:text-white hover:bg-neutral-600 transition" onClick={this.reset}>Reset</button>
                        <button className={`px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition ${this.state.disabled ? 'cursor-not-allowed bg-green-300 hover:bg-green-300' : null}`} onClick={this.saveLetter} disabled={this.state.disabled}>Save</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default ComposerTab;
