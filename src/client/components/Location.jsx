import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";
import CourtsContainer from "./CourtsContainer";
import "antd/dist/antd.css";
import axios from "axios";

const { Header, Content, Footer } = Layout;

export default () => {
  const [state, setData] = useState({ courts: [] });

  useEffect(() => {
    const url = "/courts";

    axios.get(url).then(function (axiosTestResult) {
      // console.log(axiosTestResult.data);
      setData(axiosTestResult.data);
    });
  }, []);

  return (
    <div>
      <Layout>
        <Header>
          <LocationHeader />
        </Header>
        <Layout>
          <Content>
            <CourtsContainer courts={state.courts} />
          </Content>
        </Layout>
        <Footer>
          <LocationFooter />
        </Footer>
      </Layout>
    </div>
  );
};
