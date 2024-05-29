import { Flex, Layout } from "antd";
import React from "react";
import MainHeader from "../../../components/header";
import Footer from "../../../components/footer";
import useLayout from "../../../assets/theme/useLayout";
import DashboardGrid from "../../../components/dashboardGrid";

function FleetPage() {
  const layoutStyle = useLayout();
  const feturedData = new Array(20).fill(0);
  return (
    <Flex className="" gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <MainHeader />
        <DashboardGrid data={feturedData} label={"Fleet"} />
        <Footer />
      </Layout>
    </Flex>
  );
}

export default FleetPage;
