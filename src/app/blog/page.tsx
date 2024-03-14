import { Metadata } from "next"
import Link from "next/link"



export const metadata:Metadata = {
    title: 'Blog',
  }


export default function Blog(){
    return <>
    <h1>My Blogs</h1>
    <Link href="/">Home</Link>
    </>
}