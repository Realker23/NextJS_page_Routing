import Link from "next/link"

export default function products(){
   const  productId = 100
    return <>
    <Link href = "/"> Home</Link>
    <h1 className="font-bold">Products display</h1>
    <h2><Link href="products/1">Product 1</Link></h2>
    <h2><Link href="products/2">Product 2</Link></h2>
    <h2><Link href="products/3" replace>Product 3</Link></h2>
    <h2><Link href={`products/${productId}`}>Product {productId}</Link></h2>
    </>
}