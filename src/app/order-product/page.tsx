"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("order is placed");
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button className="border " onClick={handleClick}>
        Order
      </button>
    </>
  );
}
