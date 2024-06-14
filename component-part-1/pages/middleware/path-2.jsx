import React, { useEffect } from "react";

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

const Path2 = () => {
  useEffect(() => {
    fetch("/api/cookies/get-cookie", { method: "GET" })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div>Path2</div>;
};

export default Path2;
