import { createContext } from "react";

interface Coffee {
 id: string
 title: string
 description: string
 tags: string[]
 price: number
 image: string
}

interface CheckoutContextType {
  
}

export const CheckoutContext = createContext({} as )