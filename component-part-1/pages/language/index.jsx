import React from "react";

export async function getStaticProps(context) {
  console.log("context", context);
  return {
    props: {},
  };
}

const Index = () => {
  return <div>Index</div>;
};

export default Index;
