class InventoryManager {

    constructor(capacity) {

        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (this.items.length == this.capacity) {
            throw new Error("The inventory is already full.")
        }




        if (!this.items.hasOwnProperty(itemName)) {
            this.items.push({ [itemName]: quantity })

            return `Added ${quantity} ${itemName}(s) to the inventory.`
        }
        let index = this.items.findIndex(el => el.hasOwnProperty(itemName));
        this.items[index][itemName] += quantity;
        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        let idx = this.items.findIndex(el => el.hasOwnProperty(itemName));
        if (idx == -1) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        let idx2 = this.items.findIndex(el => el[itemName] < quantity);
        if (idx2 != -1) {
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        }

        let idx3 = this.items.findIndex(el => el.hasOwnProperty(itemName));

        this.items[idx3][itemName] -= quantity;

        if (this.items[idx3][itemName] == 0) {

            let removed = this.items.splice(idx3, 1)

            this.outOfStock.push(removed[0]);

        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

    restockItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        let index = this.items.findIndex(el => el.hasOwnProperty(itemName));

        if (index == -1) {
            this.items.push({ [itemName]: quantity })
        } else {
            this.items[index][itemName] += quantity
        }
        let outOfStockIndex = this.outOfStock.findIndex(el => el.hasOwnProperty(itemName));
        if (outOfStockIndex != -1) {
            this.outOfStock.splice(outOfStockIndex, 1);
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }

    getInventorySummary() {

        let result = [];
        let buff = []
        let string = "Out of Stock: ";
        result.push("Current Inventory:")
        for (let item of this.items) {
            let key = Object.keys(item);
            result.push(`${key}: ${item[key]}`);
        }
        if (this.outOfStock.length > 0) {


            for (let item of this.outOfStock) {
                let [names] = Object.keys(item)
                buff.push(names)
            }
            string += buff.join(", ")
        }
        result.push(string)
        return result.join("\n")
    }
}


// const manager = new InventoryManager(2);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));
// console.log(manager.items)


// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Paintbrush", 2));




// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));




const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
