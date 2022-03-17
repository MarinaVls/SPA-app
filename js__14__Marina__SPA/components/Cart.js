function Cart () {
    this.create =(cartData) => {
        const cart = document.createElement ('div');
        cart.classList.add('cart');

        if (cartData.length == 0) {
            cart.innerHTML = `<div class="container">
                                <div class="cart__wrapper">
                                    <h2>No products</h2>
                                </div>
                            </div>`
            return cart
        }else {
            let list ="";

            cartData.forEach(({title, price, count, image}) => {
                list += `<div class="cart__item__wrapper">
                                <div class="cart__item__title">
                                    ${title}
                                </div>
                                <div class="cart__item__img">
                                    <img src="${image}">
                                </div>
                                <div class="cart__item__count">
                                    Count:${count}
                                </div>
                                <div class="cart__item__price">
                                    Price:<span>${price * count} </span>BYN
                                </div>
                                <div class="button">
                                    <button class="cart__btn">Delete</button>
                                </div>
                        </div> `

                cart.innerHTML = `<div class="container">
                                    <div class="cart__wrapper">
                                        ${list}
                                    </div>
                                </div>`
            });

            return cart;
        }
    }

    this.deletBtnCart = () => {
        const DelBtnCartItem = document.querySelectorAll('.cart__btn');

        DelBtnCartItem.forEach((delBtn) => {
            delBtn.addEventListener('click' , (event) => {
                this.onDelete(event.target.id)
            })

        })

    }

    this.init= () => {
        const cartLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem ('cart')) : []

        return this.create(cartLocalStorage);
    }
}

const cart = new Cart()
export default cart;