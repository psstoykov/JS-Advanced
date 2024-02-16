class FashionRetailInventory {

    constructor(storehouse, location) {
        this.storehouse = storehouse,
            this.location = location,
            this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {

        for (let item of this.productStock) {
            if (item["productName"] == productName && item['size'] == size) {
                item['quantity'] += quantity;
                return `You added ${quantity} more pieces of product ${productName} size ${size}`
            }
        }
        let product = {
            "productName": productName,
            "size": size,
            "quantity": quantity,
            "price": price
        }
        this.productStock.push(product)
        return `The product ${productName}, size ${size} was successfully added to the inventory`

    }

    sendProduct(productName, size) {

        const index = this.productStock.findIndex(
            (product) => product.productName === productName && product.size === size
        );

        if (index == -1) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
            const removedProduct = this.productStock.splice(index, 1)[0];
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }

    findProductsBySize(size) {
        let result = [];

        for (let item of this.productStock) {
            if (item['size'] == size) {
                result.push(`${item['productName']}-${item['quantity']} pieces`);
            }
        }
        if (result.length == 0) {
            return `There are no products available in that size`
        } else {
            let stringResult = result.join(", ");
            return stringResult

        }
    }

    listProducts() {
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`;
        }
        let result = []
        result.push(`${this.storehouse} storehouse in ${this.location} available products:`);

        this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));

        for (let product of this.productStock) {
            result.push(`${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`)
        }
        return result.join("\n")
    }

}


// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));


// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));


// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));


const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());
