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
import DetailsHeader from '../../../components/detailsHeader';
import ItemDetails from '../../../components/itemDetails';


const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};
const ProductDetails = () => {

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
                <DetailsHeader />
                <ItemDetails />



                <p className='text-center mt-8 font-semibold text-2xl' ></p>
                <DashboardGrid menuList={bestSellingMenuList} data={bestSellingData} label={"Related Products"} />


                <Footer />
            </Layout>


        </Flex>
    )
};
export default ProductDetails;