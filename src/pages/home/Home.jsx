import React from "react";
import { userData } from "../../assets/dummyData";
import "./home.css";
import LineChart from "../../components/chart/LineChart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import MemberWidget from "../../components/memberWidget/MemberWidget";
import TransWidget from "../../components/transWidget/TransWidget";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <LineChart
        userData={userData}
        title="Active Users"
        dataKey="activeUser"
      />
      <div className="widgets">
        <MemberWidget />
        <TransWidget />
      </div>
    </div>
  );
};

export default Home;
