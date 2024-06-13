import React from "react";
import Component from "../../component/test-dynamic/Component";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../component/test-dynamic/Component"), {
  loading: () => <p>…Loading</p>,
  ssr: false,
});
const Index = () => {
  return (
    <div>
      <Header />
      <Component />
      <div>Dynamic Import</div>
    </div>
  );
};

export default Index;
