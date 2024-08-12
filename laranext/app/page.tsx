import Link from 'next/link'
import React from 'react'
import ProductCard from './components/ProductCard'

export default function Index() {
  return (
    <main>
      <h1>Hello, Next.js!</h1>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>
  )
}