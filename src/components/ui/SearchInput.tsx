import * as React from "react"

import { cn } from "@/lib/utils"
import { SearchInput } from "../commons/inputs/SearchInput"
import { Button } from "./button"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="container w-full">
        <SearchInput />
        <div className="mt-7 container  w-44">
          <Button className=" p-6 rounded-full bg-violet-700 h-12 w-full">
            <p className="text-white font-mono font-bold text-xs">
              Explorer
            </p>
          </Button>
        </div>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
