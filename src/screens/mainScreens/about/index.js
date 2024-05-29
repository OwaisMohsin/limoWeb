import { Flex, Layout } from "antd";
import React from "react";
import MainHeader from "../../../components/header";
import Footer from "../../../components/footer";
import useLayout from "../../../assets/theme/useLayout";
import images from "../../../assets";

function About() {
  const layoutStyle = useLayout();
  return (
    <Flex className="" gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <MainHeader />
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={images?.carImage4}
                />
              </div>
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"></div>
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-primary-gold text-lg">
                      Phoebe Caulfield
                    </h2>
                    <div class="w-12 h-1 bg-primary-gold rounded mt-2 mb-4"></div>
                    <p class="text-base text-primary-gold ">
                      Raclette knausgaard hella meggs normcore williamsburg
                      enamel pin sartorial venmo tbh hot chicken gentrify
                      portland.
                    </p>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-primary-gold sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-lg mb-4 text-primary-gold ">
                    Our mission is to redefine the standards of luxury
                    transportation, combining cutting-edge technology with
                    timeless elegance and sophistication. We strive to deliver
                    unparalleled comfort, safety, and reliability, while
                    maintaining a commitment to excellence and a passion for
                    exceeding our customers' needs. Through our dedicated team
                    of professional chauffeurs and meticulously maintained
                    fleet, we aim to build lasting relationships and provide
                    unforgettable experiences for every passenger. Through our
                    meticulously maintained fleet and dedicated team of
                    professional chauffeurs, we aim to create unforgettable
                    experiences that exceed our clients' expectations.
                  </p>
                  <p class="leading-relaxed text-lg mb-4 text-primary-gold ">
                    At Empire Link, we are passionate about building lasting
                    relationships and providing exceptional chauffeuring
                    services that make a difference. Join us on this exciting
                    journey and discover a new level of luxury transportation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    </Flex>
  );
}

export default About;
