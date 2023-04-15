import { Product1 } from "./product1"

export interface CardDetails {
    _id? : string
  cartOwner?: string
  products?: Product1[]
  createdAt?: string
  totalCartPrice?: number
  updatedAt?: string
  __v?: number
}
