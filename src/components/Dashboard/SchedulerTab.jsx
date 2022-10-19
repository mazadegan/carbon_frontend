import { Component } from "react";

class SchedulerTab extends Component {
    state = {}
    render() {
        return (
            <div className="flex justify-center items-center flex-grow px-6">
                <div className="flex flex-col max-w-lg space-y-6 p-8 border rounded-lg">
                    <span className="flex flex-col w-full space-y-2">
                        <span className="text-xl font-bold tracking-tight">Schedule your deliveries</span>
                        <span className="text-neutral-600 tracking-tight">Choose the mailing list you want to create a schedule for.</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <span className="tracking-tight">Schedule delivery of </span>
                        <select className="flex p-0.5 border rounded-lg tracking-tight font-medium" name="" id="">
                            <option value="">My Newsletter</option>
                            <option value="">My Marketing Letter</option>
                        </select>
                    </span>
                    <span className="flex items-center space-x-1">
                        <span className="tracking-tight">Send letters on </span>
                        <input type="date" name="" id="" className="flex p-0.5 border rounded-lg tracking-tight font-medium" />
                    </span>
                    <span className="flex flex-col w-full space-y-0.5">
                        <span className="flex items-center space-x-1">
                            <span className="tracking-tight">Schedule delivery between </span>
                            <input type="time" name="" id="" className="flex p-0.5 border rounded-lg tracking-tight font-medium" />
                            <span> and </span>
                            <input type="time" name="" id="" className="flex p-0.5 border rounded-lg tracking-tight font-medium" />
                        </span>
                        <span className="text-xs font-semibold tracking-tighter text-green-500">Remember, a larger window means more CO2 savings.</span>
                    </span>
                    <span className="flex justify-end w-full">
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Set Schedule</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default SchedulerTab;