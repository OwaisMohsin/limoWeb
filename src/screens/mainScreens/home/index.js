import React from 'react';
import { Layout, Flex } from 'antd';
import webBanner from '../../../assets/icons/webBanner.png';
import MainHeader from '../../../components/header';

import hp from '../../../assets/icons/hp.png'
import ibm from '../../../assets/icons/ibm.png'
import seagate from '../../../assets/icons/seagate.png'
import toshiba from '../../../assets/icons/toshiba.png'
import dell from '../../../assets/icons/dell.png'
import DashboardGrid from '../../../components/dashboardGrid';
import Footer from '../../../components/footer';


const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};
const HomeScreen = () => {

    const featuredMenuList = [
        "SERVER HARD DRIVES",
        "POWER SUPPLIES",
        "SOLID STATE DRIVES",
        "SERVER MEMORY",
        "NETWORK & ACCESSORIES",

    ]

    const feturedData = new Array(8).fill(0)
    const bestSellingData = new Array(4).fill(0)

    const bestSellingMenuList = [
        "All Products",
        "RAM",
        "SSD",
        "Memory"
    ]

    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <MainHeader />
                <div className='flex justify-center' >

                    <img className='mt-4 w-11/12' src={webBanner} />
                </div>




                {/* <DashboardGrid menuList={featuredMenuList} data={feturedData} label={"Featured Products"} />


                <DashboardGrid menuList={bestSellingMenuList} data={bestSellingData} label={"Best selling Products"} /> */}


                <Footer />
            </Layout>


        </Flex>
    )
};
export default HomeScreen;