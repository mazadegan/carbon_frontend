import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SidebarButton extends Component {
    state = {}
    render() {
        return (
            <span className="flex flex-col w-full items-center space-y-0.5 cursor-pointer">
                <span className={`flex p-1 justify-center items-center rounded-full w-full ${this.props.selected ? 'bg-neutral-200' : 'bg-neutral-100'} hover:bg-neutral-200 transition`}>
                    <FontAwesomeIcon icon={this.props.icon}></FontAwesomeIcon>
                </span>
                <span className="text-xs font-semibold tracking-tighter">{this.props.title}</span>
            </span>
        );
    }
}

export default SidebarButton;