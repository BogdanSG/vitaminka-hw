"use strict";

export default class CartService{

    constructor($cookies, CatalogService){

        this.cart = [];

        this.$cookies = $cookies;

        try {

            let cookies = JSON.parse(this.$cookies.get('cart'));

            if(cookies && Array.isArray(cookies)){

                let ids = [];

                cookies.forEach(item => {

                    ids.push(item.id);

                });

                CatalogService.getProductByIDS(ids).then(cart => {

                    for (let i = 0; i < cart.length; i++){

                        cart[i].amount = cookies[i].amount;

                    }//for

                    cart.forEach(item => {

                        this.cart.push(item);

                    });

                });

            }//if

        }//try
        catch (Exception) {

            console.log('Exception: ', Exception);

        }//catch

    }//constructor

    getCart(){

        return this.cart;

    }//getCart

    addProduct(product){

        let exists = this.cart.some( p => {
            return p.id === product.id;
        });

        if(!exists){

            this.cart.push(product);

        }//if
        else{

            for (let i = 0; i < this.cart.length; i++){

                let p = this.cart[i];

                if(p.id === product.id){

                    p.amount++;

                    break;

                }//if

            }//for i

        }//else

        this.saveToCookies();

    }//addProduct

    deleteProductByIndex(index){

        this.cart.splice(index, 1);

        this.saveToCookies();

    }//removePhone

    saveToCookies(){

        this.$cookies.put('cart', JSON.stringify(this.getSimpleCart()));

    }//saveToCookies

    getSimpleCart(){

        let simpleCart = [];

        this.cart.forEach(item => {

            simpleCart.push({ 'id': item.id, 'amount': item.amount });

        });

        return simpleCart;

    }//getSimpleCart


}//CartService