import React from "react";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  console.log("params", params);
  const data = ["a", "b", "c", "d"];
  const data2 = ["c", "d", "f", "g", "h"];
  const url = `/dynamic-route/array-paths/${data[2]}/${data2[1]}`;
  return {
    props: {
      params,
      url,
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

const Index = ({ url }) => {
  const router = useRouter();
  function handle() {
    router.push(url);
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => handle()}>按鈕</button>
    </div>
  );
};

export default Index;
