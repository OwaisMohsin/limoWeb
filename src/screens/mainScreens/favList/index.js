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

    backgroundColor: "#000000",
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};
const FavScreen = () => {



    const feturedData = new Array(8).fill(0)




    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <MainHeader />




                <DashboardGrid isFav={true} data={feturedData} label={"My Favorites"} />




                <Footer />
            </Layout>


        </Flex>
    )
};
export default FavScreen;