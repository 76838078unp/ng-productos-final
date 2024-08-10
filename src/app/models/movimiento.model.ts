
export interface MovimientoModel {
    idHistorial: number;
    id_operacion: number;
    id_producto: number;
    cantidad: number;
    precio_venta?: number;
    precio_compra?: number;
}
