export type TProductDto = {
  id: number
  slug: string
  title: string
  description?: string
  image?: string
  price: number
  compareAtPrice?: number
  costPerItem?: number
  quantity: number
  SKU?: string
  barcode?: string
  status: EProductStatus
  rate?: number
  totalReviews?: number
  createdAt: string
  updatedAt: string
  deletedAt?: string

  categoryId?: string
};

export enum EProductStatus {
  active = 'active',
  draft = 'draft'
}
