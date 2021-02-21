import React from "react";
import MainLayout from "../components/layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="container">
        <h1>Home Page</h1>
        {[...Array(20)].map((val, index) => (
          <p key={index}>
            {index + 1}. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Soluta aliquid maiores id odit ea quibusdam nulla beatae commodi,
            est nihil illum perferendis ex esse exercitationem quidem quas quis
            fuga recusandae.
          </p>
        ))}
      </div>
    </MainLayout>
  );
};

export default Home;
