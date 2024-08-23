import React, { useEffect } from "react";

const fetch1 = async () => {
  try {
    const response = await fetch("/api/test/1");
    const data1 = await response.json();
    return data1;
  } catch (error) {
    console.log("error", error);
  }
};

const fetch2 = async () => {
  try {
    const response = await fetch("/api/test12/2");
    const data2 = await response.json();
    return data2;
  } catch (error) {
    console.log("子層");
    throw { message: "fetch2 error", status: 400 };
  }
};
const fetch3 = async () => {
  try {
    const response = await fetch("/api/test/1");
    const data3 = await response.json();
    return data3;
  } catch (error) {
    console.log("error", error);
  }
};

const fetchAll = async () => {
  try {
    await fetch1();
    await fetch2();
    await fetch3();
    return "success";
  } catch (error) {
    console.log("內層error", error);
    throw error;
  }
};

const TryCatch = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAll();
      } catch (error) {
        console.log(" 外層 error", error);
      }
    };
    fetchData();
  });
  return <div>TryCatch</div>;
};

export default TryCatch;
