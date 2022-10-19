import { Component } from "react";

class ComposerTab extends Component {
    state = {}

    render() {
        return (
            <div className="flex justify-center items-center flex-grow px-6">
                <div className="flex flex-col w-2/5 space-y-6 p-8 border rounded-lg">
                    <span className="flex flex-col w-full space-y-2">
                        <span className="text-xl font-bold tracking-tight">Compose your letters</span>
                    </span>
                    <span className="flex flex-col w-full space-y-1">
                        <span className="tracking-tighter text-sm">Subject:</span>
                        <input type="text" name="" id="" className="flex p-1 border rounded-lg tracking-tight w-full" />
                    </span>
                    <span className="flex flex-col w-full space-y-1">
                        <span className="tracking-tighter text-sm">Body:</span>
                        <textarea name="" id="" className="flex p-1 border rounded-lg tracking-tight w-full h-32"></textarea>
                    </span>
                    <span className="flex flex-col w-full space-y-2">
                        <span className="flex items-center space-x-1">
                            <input type="radio" name="" id="" className="accent-green-500" />
                            <span className="tracking-tight">Add to existing mailing list </span>
                            <select className="flex p-0.5 border rounded-lg tracking-tight font-medium" name="" id="">
                                <option value="">My Newsletter</option>
                                <option value="">My Marketing Letter</option>
                            </select>
                        </span>
                        <span className="flex items-center space-x-1">
                            <input type="radio" name="" id="" className="accent-green-500" />
                            <span className="tracking-tight">Create new mailing list</span>
                            <input type="text" name="" id="" className="flex p-0.5 border rounded-lg tracking-tight " />
                        </span>
                    </span>
                    <span className="flex justify-end w-full space-x-2">
                        <button className="px-4 py-2 bg-neutral-500 text-white rounded-lg hover:bg-neutral-600 transition">Cancel</button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Save</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default ComposerTab;