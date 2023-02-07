export interface Categoria {
  id: number,
  name: string,
  image: string,
  creationAt:string,
  updatedAt: string
}

export interface Producto {
  id: number,
  title: string,
  price: number,
  description: string,
  images: string[],
  creationAt:string,
  updatedAt: string,
  category: Categoria
}

export interface Filtro {
  preMin: number,
  preMax:number
}