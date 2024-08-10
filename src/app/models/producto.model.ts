

export interface ProductoModel{
    id_producto?: number
    id_categoria: number
    codigo: string
    nombre: string
    descripcion: string
    stock: number
    precio_venta: number
}

export interface CategoriaModel{
    id_categoria: number
    categoria: string
}

export enum TipoOperacion{
    INGRESO = 1,
    SALIDA = 2
}