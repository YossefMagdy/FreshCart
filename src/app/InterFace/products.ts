import { Brand } from './brand';
import { Subcategory } from './subcategory';
import { Category } from './category';

export interface products {
    _id: string
    title: string
    slug: string
    description: string
    quantity: number
    sold: number
    price: number
    imageCover: string
    images: string[]
    category: Category
    subcategory: Subcategory[]
    brand: Brand
    ratingsAverage: number
    ratingsQuantity: number
    createdAt: string
    updatedAt: string
    id: string
    priceAfterDiscount?: number
    availableColors?: any[]
  }