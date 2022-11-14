import {IManagement} from "./IManagement";
import {Product} from "./Product";

export class ProductManager implements IManagement<Product> {
    listProduct: Product[] = [];
    add(t: Product): void {
        this.listProduct.push(t);
    }

    edit(id: number, t: Product): void {
        let index = this.findById(+id);
        if (index === -1) {
            console.log('Không tìm thấy');
        } else {
            this.listProduct[index] = t;
            console.log('Sửa thành công');
        }
    }

    findAll(): Product[] {
        return this.listProduct;
    }

    remove(id: number): void {
        let index = this.findById(+id);
        if (index === -1 ) {
            console.log('Không tìm thấy sản phẩm này');
        } else {
            this.listProduct.splice(index,1);
            console.log('Xóa thành công');
        }
    }

    findById(id: number): number {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id === id) {
                return i;
            }
        }
        return -1;
    }

}