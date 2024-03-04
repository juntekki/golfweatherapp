/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HjPGmkkAnZj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export default function Search() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input placeholder="Search" type="search" />
      <Button className="h-8 w-8 p-0" variant="outline">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
