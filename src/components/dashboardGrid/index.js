import React from 'react';
import { Link } from 'react-router-dom';

const DashboardGrid = (props) => {

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-20">
            <p className="text-center mt-8 font-semibold text-2xl">{props.label}</p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-8">
                <div className="flex flex-wrap justify-center md:justify-start md:space-x-8">
                    {props.menuList.map((item, index) => (
                        <p key={index} className="text-black text-xs font-semibold mt-4 md:mt-0">{item}</p>
                    ))}
                </div>
                <div className="bg-black justify-center hidden md:flex md:w-auto md:py-1">
                    <span className="text-white text-xs">Show All</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start mx-auto mt-6">
                {props.data.map((item, index) => (
                    <Link key={index} to={"/productDetails"} className="w-full md:w-1/4 p-4">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center py-4">
                            <div className="flex justify-center">
                                <img src={"https://basitcomputers.com/wp-content/uploads/2022/09/wd-500.jpg"} className="max-w-full h-auto" alt="Product" />
                            </div>
                            <p className="text-sm font-semibold mt-4 text-center">ST4000NM0023 - Seagate 4TB 7200RPM SAS 6Gb/s 128MB 3.5-Inch</p>
                            <div className="flex justify-between mt-2 w-full px-3">
                                <p className="text-sm text-gray-500">Hard Drive</p>
                                <p className="text-sm text-black font-semibold">$63.85</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DashboardGrid;
