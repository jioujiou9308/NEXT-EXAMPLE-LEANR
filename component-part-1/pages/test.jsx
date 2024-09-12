import React from "react";
import List from "../component/List";
import requestIp from "request-ip";

export async function getServerSideProps({ req }) {
  const clientIp = requestIp.getClientIp(req);

  return {
    props: {
      clientIp: clientIp,
    },
  };
}

const Test = ({ clientIp }) => {
  console.log("clientIp", clientIp);
  const source = [1, 2, 3];
  return (
    <>
      <List items={source} />
      <List items={source} />
      <List items={source} />
    </>
  );
};

export default Test;
