import React from "react";

export async function getStaticProps({ params }) {
  console.log("params", params);
  return {
    props: {
      params,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { products: ["a", "b"] } },
      { params: { products: ["c", "d"] } },
    ],
    fallback: false,
  };
}

const Index = () => {
  return <div>Index</div>;
};

export default Index;
