import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../../../components/header';
import Footer from '../../../components/footer';

import airportIcon from '../../../assets/icons/hp.png'
import corporateIcon from '../../../assets/icons/dell.png'
import eventIcon from '../../../assets/icons/ibm.png'
import cityIcon from '../../../assets/icons/seagate.png'

const services = [
    {
        title: 'Airport Transfers',
        description: 'Reliable airport transfer service to and from all major airports.',
        icon: airportIcon,
    },
    {
        title: 'Corporate Events',
        description: 'Professional transportation solutions for corporate events and meetings.',
        icon: corporateIcon,
    },
    {
        title: 'Weddings & Special Occasions',
        description: 'Luxurious transportation for weddings, parties, and special events.',
        icon: eventIcon,
    },
    {
        title: 'City Tours',
        description: 'Explore the city in style with our guided city tour services.',
        icon: cityIcon,
    },
];

const LandingScreen = () => {
    return (
        <Layout style={{ overflow: 'hidden', width: 'calc(100% - 8px)', maxWidth: 'calc(100% - 8px)', backgroundColor: "#000000", }}>
            <MainHeader />

            {/* Services Section */}
            <section className="px-6 py-8">

                <p className="text-primary-gold font-semibold text-xl">Services We Offer</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
                    {services.map((service, index) => (
                        <div className="bg-slate-800 rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-center bg-slate-300 rounded-full w-16 h-16 mb-4 mx-auto">
                                {/* Replace 'icon' with your actual icon component */}
                                <img src={service.icon} alt={service.title} className="w-8 h-8" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mb-2 text-primary-gold">{service.title}</h2>
                            <p className="text-sm text-slate-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </Layout>
    );
};

export default LandingScreen;
