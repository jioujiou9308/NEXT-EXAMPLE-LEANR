import React, { useEffect } from "react";
import { useRouter } from "next/router";

export const getStaticProps = async (context) => {
  const { product } = context.params;
  const color = ["red", "white", "black", "blue"];
  const existColor = ["white"];
  const url1 = ["y60", "y70"];
  const checkExist = existColor.includes(product[1]);

  const newUrl = `/product2/${url1[0]}/${color[1]}`;

  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const result = await data.json();
  const body = result.body;

  if (!body) {
    if (process.env.npm_lifecycle_event === "build")
      return {
        notFound: true,
      };
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  
  // if(!checkExist){
  //   return { notFound: true };
  // }

  // if (!checkExist) {
  //   return {
  //     props: {
  //       redirect: true,
  //       newUrl,
  //     },
  //   };
  // }

  return {
    props: { product, redirect: false },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { product: ["y60", "red"] } },
      { params: { product: ["y60", "white"] } },
      { params: { product: ["y60", "black"] } },
      { params: { product: ["y60", "blue"] } },
    ],
    fallback: false,
  };
};
const Product = ({ product, redirect, newUrl }) => {
  const router = useRouter();

  if (redirect) {
    return <p>redirect</p>;
  }

  return <div>{product}</div>;
};

export default Product;
