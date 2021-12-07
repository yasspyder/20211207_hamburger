class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }


    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Манометр', price: 1200, img: 'manometr.png' },
            { id: 2, title: 'Термометр', price: 2000, img: 'termometr.png' },
            { id: 3, title: 'Датчик давления', price: 10000, img: 'pressure.png' },
            { id: 4, title: 'Расходомер', price: 50000, img: 'rashodomer.png' },
            { id: 5, title: 'Термометр2', price: 3000, img: 'termometr.png' },
            { id: 6, title: 'Датчик давления2', price: 12000, img: 'pressure.png' },
            { id: 7, title: 'Расходомер2', price: 55000, img: 'rashodomer.png' },
            { id: 8, title: 'Манометр2', price: 2200, img: 'manometr.png' },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
    getSum() {

        let res = this.allProducts.reduce((s, item) => s + item.price, 0);
        alert(res);
    }
}


class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;

    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }

    render() {

    }
}

class ElemBasket {
    render() { }

}