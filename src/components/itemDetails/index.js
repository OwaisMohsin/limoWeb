import React from "react";

import iconHeartfill from '../../assets/icons/iconHeartfill.png';
import { useNavigate } from "react-router-dom";

const ItemDetails = () => {

    const navigate = useNavigate()
    const images = new Array(3).fill(0)


    return (
        <div className="flex justify-center mt-6">
            <div className="flex flex-col lg:flex-row w-full max-w-screen-xl">
                {/* Left Section */}
                <div className="md:px-0 px-4 flex-1 lg:mr-4 mb-4 lg:mb-0">
                    <img
                        src="https://goodtimelimo.ca/wp-content/uploads/2023/09/Night-Out-Limousine-service-in-Newmarket-1024x507.png"
                        alt="Product"
                        className="w-full h-full object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Right Section */}
                <div className="flex-1 px-4 md:px-0">
                    <div className="max-w-md bg-white mx-auto p-4  rounded-xl">
                        <div className="flex justify-between" >
                            <h2 className="text-3xl font-bold mb-4">Nissan GT - R</h2>
                            <img className="h-4 w-auto mt-2" src={iconHeartfill} />
                        </div>
                        <p className="text-slate-500 mb-4">
                            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                        </p>
                        <div className="flex justify-between items-center" >
                            <p className="text-gray-700 text-lg">
                                Car model: <span className="text-slate-400">Brand</span>
                            </p>
                            <p className="text-gray-700 text-lg">
                                Capacity: <span className="text-slate-400">2 Person</span>
                            </p>
                        </div>
                        <div className="flex justify-between items-center mt-4" >
                            <p className="text-gray-700 text-lg">
                                Steering: <span className="text-slate-400">Manual</span>
                            </p>
                            <p className="text-gray-700 text-lg">
                                Gasoline: <span className="text-slate-400">70L</span>
                            </p>
                        </div>
                        <div className="flex justify-between items-center my-4 mt-8">
                            <div>
                                <span className="text-lg font-semibold">$80.00/ <span className="text-sm text-slate-400" >days</span></span>
                                <p className="text-slate-400 line-through" >$100.00</p>
                            </div>
                            <button onClick={() => { navigate("/checkout") }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* Image row */}
                    <div className="flex flex-row overflow-x-auto justify-center lg:mt-8 md:px-4">
                        {
                            images.map((item, index) => {
                                return (
                                    <img key={index} src={"https://goodtimelimo.ca/wp-content/uploads/2023/09/Night-Out-Limousine-service-in-Newmarket-1024x507.png"} alt={`Image ${index + 1}`} className="ml-4 rounded-lg h-24 mt-4 lg:mb-0" />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
