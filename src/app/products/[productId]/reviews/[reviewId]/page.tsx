"use client";
//to recover after getting error using tryagain need to convert page.tsx to client side - "use client"
import {notFound} from "next/navigation";

function randomNumberGeneration(n: number): number {
  return Math.floor(Math.random() * n);
}

export default function ReviewIdPage({
  params,
}: {
  params: {productId: string; reviewId: string};
}) {
  const rand = randomNumberGeneration(2);

  if (rand === 1) {
    throw new Error("Error in review page");
  }

  if (parseInt(params.reviewId) > 100) {
    return notFound();
  }

  return (
    <h1>
      {" "}
      this page is for product {params.productId} with review {params.reviewId}
    </h1>
  );
}
