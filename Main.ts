import {ProductManager} from "./ProductManager";
import {Product} from "./Product";

let readlineSync = require('readline-sync');

let productManagement = new ProductManager();
let product = new Product(1,'Xe máy',200,1,'Đẹp');

productManagement.add(product);
console.log(productManagement.findAll());

function add() {
    console.log('------Hiển thị form thêm mới-------');
    let id = +readlineSync.question('Enter id : ');
    let name = readlineSync.question('Enter name : ');
    let price = +readlineSync.question('Enter price : ');
    let amount = +readlineSync.question('Enter amount : ');
    let description = readlineSync.question('Enter description : ');
    let product = new Product(id,name,price,amount,description);
    productManagement.add(product);
}

function display() {
    console.log('-------Hiển thị sản phẩm---------');
    console.log(productManagement.findAll());
}

function deleteProduct() {
    let idDelete = +readlineSync.question('Enter id delete : ');
    productManagement.remove(idDelete);
}

function editProduct() {
    let idEdit = +readlineSync.question('Enter id edit : ');
    console.log('------Form sửa sản phẩm-------');
    let id = +readlineSync.question('Enter id : ');
    let name = readlineSync.question('Enter name : ');
    let price = +readlineSync.question('Enter price : ');
    let amount = +readlineSync.question('Enter amount : ');
    let description = readlineSync.question('Enter description : ');
    let product = new Product(id,name,price,amount,description);
    productManagement.edit(idEdit, product);
}


function main() {
    let menu = `--------Menu chính----------
    1.Thêm sản phẩm
    2.Hiển thị sản phẩm
    3.Xóa sản phẩm
    4.Sửa sản phẩm
    0.Thoát chương trình`

    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question('Enter choice : ');
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                display();
                break;
            case 3:
                deleteProduct();
                break;
            case 4:
                editProduct();
                break;
        }
    } while (choice !== 0)

}
main();