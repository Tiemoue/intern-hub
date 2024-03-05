import Sidebar from "../components/sidebar/Sidebar";
import { AiOutlineFolderOpen } from "react-icons/ai";

export default function LayoutWithSidebar() {
    // State and functions for handling sidebar logic can go here


    return (
        <div className="flex h-screen ">
            <Sidebar props="Dashboard" />

            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col md:flex-row w-full justify-between p-4 md:p-10 md:gap-16">
                    <div>
                        <h1 className="text-4xl text-black font-bold m-2">Welcome Back, Collins!</h1>
                        <h2 className="text-black font-semibold m-2">Check out your top matches and saved jobs down below!</h2>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-5 space-y-4 md:space-y-0 md:space-x-4">
                            <button style={{ background: '#f7b59f' }} className="btn btn-active rounded-full text-black border border-black">View Matches</button>
                            <button style={{ background: '#f7b59f' }} className="btn btn-active rounded-full text-black border border-black">Change Preferences</button>
                        </div>
                    </div>

                    <div style={{ background: '#f7b59f' }} className="bg-slate-300 shadow-xl w-64 h-3/6 mx-auto my-6 p-4 md:mr-8 border border-black rounded-lg">
                        <div>
                            <span className="flex items-center text-3xl justify-evenly">
                                <AiOutlineFolderOpen /><span className="text-lg inline text-black font-bold"> Application: 20</span>
                            </span>
                        </div>

                    </div>
                </div>



            </div>

        </div>


    );
}
