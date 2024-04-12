let stock = []

function register(id, name, amount) {
    let item = {
        id: id,
        name: name,
        amount: amount
    }

    return item
}

function search(id) {
    for (let item of stock) {
        if (item.id == id) {
            return item
        }
    }
}

function add(item) { stock.push(item) }

function list() { return stock }

function remove(id) { stock = stock.filter((item) => { return item.id != id }) }

function edit(id, amount) { search(id).amount = amount }

module.exports = { register, search, add, list, remove, edit }