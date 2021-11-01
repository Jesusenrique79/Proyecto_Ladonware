export class Producto{
    constructor(
        public _id: string,
        public nombre: string,
        public categoria: string,
        public precio: number,
        public cantidad: number,
        public inventario: string,
        public image: string
    ){}
}