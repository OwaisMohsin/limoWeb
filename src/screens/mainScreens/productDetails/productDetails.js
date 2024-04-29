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



    const bestSellingData = new Array(4).fill(0)


    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <MainHeader />
                <p className="text-blue-600 font-semibold text-xl mt-6 mx-8">Car Details/Reviews </p>

                <ItemDetails />




                <DashboardGrid data={bestSellingData} label={"Search Recomendations"} />


                <Footer />
            </Layout>


        </Flex>
    )
};
export default ProductDetails;