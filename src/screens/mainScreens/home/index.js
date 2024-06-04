import React from "react";
import { Layout, Flex } from "antd";
import webBanner from "../../../assets/icons/webBanner.png";
import MainHeader from "../../../components/header";

import iconDropdown from "../../../assets/icons/iconDropdown.png";
import mark from "../../../assets/icons/mark.png";
import DashboardGrid from "../../../components/dashboardGrid";
import Footer from "../../../components/footer";

const layoutStyle = {
  backgroundColor: "#000000",
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};
const HomeScreen = () => {
  const feturedData = new Array(8).fill(0);

  return (
    <Flex className="" gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <MainHeader />
        <div className="flex justify-center">
          <div className="absolute left-[6%] lg:mt-[6%] md:mt-[4%] sm:mt-[2%]">
            <h2 className="text-black md:text-2xl lg:text-4xl sm:text-xl font-semibold mt-8 md:mt-4 ">
              Easy way to book <br></br> your travel need.
            </h2>
            <p className="text-black text-xs md:text-xl  md:block  mt-4">
              Providing professional , reliable<br></br>,safe and comfortable
              services
            </p>
            <div className="bg-primary-gold item-center py-2 rounded-md px-3 w-3/4 md:w-2/6 mt-[4%] md:mt-[8%]">
              <p className="text-white text-center">Book Now</p>
            </div>
          </div>
          <img
            className="mt-4 w-11/12 md:h-auto rounded-xl h-44 object-cover "
            src={webBanner}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mt-6 px-4 lg:px-[4%]">
          <div className="bg-slate-800 w-full lg:w-full px-4  mb-4 lg:mb-0 lg:mr-8 rounded-lg">
            <div className="flex justify-center mt-4 items-center">
              <img className="h-4" src={mark} alt="Mark" />
              <p className="font-semibold ml-2 text-primary-gold">
                Booking info for search
              </p>
            </div>

            <div className="flex flex-col lg:flex-row w-full  justify-around mt-4 lg:mt-4 mb-4">
              <div className="flex flex-col">
                <p className="font-semibold text-primary-gold">Location</p>
                <div className="flex mt-2 items-center">
                  <p className="text-xs text-white mr-4">Select your city</p>
                  <img className="h-4" src={iconDropdown} alt="Dropdown" />
                </div>
              </div>
              <div className="flex flex-col mt-4 lg:mt-0 lg:ml-8">
                <p className="font-semibold text-primary-gold">Date</p>
                <div className="flex mt-2 items-center">
                  <p className="text-xs text-white mr-4">Select your date</p>
                  <img className="h-4" src={iconDropdown} alt="Dropdown" />
                </div>
              </div>
              <div className="flex flex-col mt-4 lg:mt-0 lg:ml-8">
                <p className="font-semibold text-primary-gold">Time</p>
                <div className="flex mt-2 items-center">
                  <p className="text-xs text-white mr-4">Select your time</p>
                  <img className="h-4" src={iconDropdown} alt="Dropdown" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-gold item-center py-2 rounded-md px-3 lg:h-[32%] lg:w-[10%]">
            <p className="text-white text-center">Search Now</p>
          </div>
        </div>

        <DashboardGrid data={feturedData} label={"Search Recomendations"} />

        <Footer />
      </Layout>
    </Flex>
  );
};
export default HomeScreen;
