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
      { params: { products: "a" } },
      { params: { products: "b" } },
      { params: { products: "c" } },
    ],
    fallback: false,
  };
}

const Index = () => {
  return <div>Index</div>;
};

export default Index;
