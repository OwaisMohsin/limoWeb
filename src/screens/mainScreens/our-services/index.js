import { Flex, Layout } from "antd";
import React from "react";
import MainHeader from "../../../components/header";
import Footer from "../../../components/footer";
import useLayout from "../../../assets/theme/useLayout";
import Service from "./component/service";
import images from "../../../assets";

function OurServices() {
  const layoutStyle = useLayout();
  return (
    <Flex className="" gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <MainHeader />
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col">
              <div class="flex flex-wrap sm:flex-row flex-col justify-center items-center py-6 mb-12">
                <h1 class="sm:w-2/5 text-center text-primary-gold font-medium title-font text-3xl mb-2 sm:mb-0">
                  Our Services
                </h1>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <Service
                title="The Catalyzer"
                description="Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual."
                image={images?.carImage1}
              />
              <Service
                title="Shooting Stars"
                description="Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual."
                image={images?.carImage2}
              />

              <Service
                title="Neptune"
                description="Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual."
                image={images?.carImage3}
              />
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    </Flex>
  );
}

export default OurServices;
