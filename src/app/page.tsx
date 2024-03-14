import Link from "next/link"


export default function Home(){
    return(
    <>
     <h1>Welcome to Next js</h1>
    <Link href="/blog" className=" underline">Blog</Link>
    &nbsp;
    <Link href="/products">Products</Link>
    </>
    )
}