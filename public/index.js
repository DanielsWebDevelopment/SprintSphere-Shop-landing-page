
// ========== Watch products Array
const products = [
    {
        id: 1,
        title: "Apple Watch Series 7",
        image: "watch1.png",
        price: 299.87
    },
    {
        id: 2,
        title: "Apple Watch Series 8",
        image: "watch2.png",
        price: 259.87
    },
    {
        id: 3,
        title: "Apple Watch Series 7",
        image: "watch3.png",
        price: 259.87
    },
    {
        id: 4,
        title: "Apple Watch Series 6",
        image: "watch1.png",
        price: 249.87
    },
    {
        id: 5,
        title: "Apple Watch Series 9",
        image: "watch2.png",
        price: 309.87
    },
    {
        id: 6,
        title: "Apple Watch Series 7",
        image: "watch3.png",
        price: 209.87
    },
    {
        id: 7,
        title: "Apple Watch Series 9",
        image: "watch1.png",
        price: 329.87
    },
    {
        id: 8,
        title: "Apple Watch Series 5",
        image: "watch2.png",
        price: 279.87
    },
    {
        id: 9,
        title: "Apple Watch Series 8",
        image: "watch3.png",
        price: 379.87
    },
    {
        id: 10,
        title: "Apple Watch Series 6",
        image: "watch1.png",
        price: 279.87
    },
    {
        id: 11,
        title: "Apple Watch Series 7",
        image: "watch2.png",
        price: 359.87
    },
    {
        id: 12,
        title: "Apple Watch Series 5",
        image: "watch3.png",
        price: 239.87
    },
];

// ========== Sneaker products Array
const nextPageProducts = [
    {
        id: 1,
        title: "Nike Runners",
        image: "S1.png",
        price: 108.98
    },
    {
        id: 2,
        title: "nike Fit Runners",
        image: "S2.png",
        price: 98.99
    },
    {
        id: 3,
        title: "Nike Air Max",
        image: "S8.png",
        price: 130.00
    },
    {
        id: 4, 
        title: "Nike Red Fits",
        image: "S3.png",
        price: 220.00
    },
    {
        id: 5,
        title: "Nike Runners 4.0",
        image: "S4.png",
        price: 120.00
    },
    {
        id: 6,
        title: "Nike New Balance",
        image: "S5.png",
        price: 110.98
    },
    {
        id: 7,
        title: "Nike Jungles",
        image: "S6.png",
        price: 80.00
    },
    {
        id: 8,
        title: "Nike Winters",
        image: "S7.png",
        price: 115.76
    },
    {
        id: 9,
        title: "Nike fit 3",
        image: "S9.png",
        price: 100.88
    },
    {
        id: 10,
        title: "Nike fit 4.2",
        image: "S9.png",
        price: 120.88
    },
    {
        id: 11,
        title: "Nike Runners",
        image: "S9.png",
        price: 80.88
    },
]

const navbarToggle = document.getElementById('navbar-toggle');
const sidebar = document.getElementById('sidebar_nav');
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});
// ========== cart button / fade-in animation 
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.getElementById('open-cart-btn');
    const shoppingCart = document.getElementById('shopping-cart');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartMessage = document.querySelector('.empty-cart-message');

    window.addEventListener('scroll', function() {
        var element = document.querySelector('.plan-section');
        var positionFromTop = element ? element.getBoundingClientRect().top : null;
        var screenHeight = window.innerHeight;

        if (element && positionFromTop - screenHeight <= 0){
            if (!element.classList.contains('fade-in')) {
                element.classList.add('fade-in');
            }
        } else if (element){
            element.classList.remove('fade-in');
        }
    });

    cartBtn.addEventListener('click', () => {
        shoppingCart.style.right = '0';
    });

    closeCartBtn.addEventListener('click', () => {
        shoppingCart.style.right = '-350px';
    });

// display message for  no stored products.
    function toggleEmptyCartMessage() {
        if (products.length <= 0){
            cartMessage.style.display = "none";
        } else {
            cartMessage.style.display = 'block';
        }
    }

    toggleEmptyCartMessage();
});


function newProducts(){
    const newProductContainer = document.getElementById('product_items');
};



// ============= product Rendering function / implemention
function renderproducts(){
    const productsContainer = document.getElementById('product_items');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // =========== Products cards 
        card.innerHTML = `
        <div class="product_card">
            <div class="top-product-card">
                <div class="product_icons">
                    <div class="s-icon">
                        <span><i class="fa-regular fa-star"></i></span>
                    </div>
                    <div class="h-icon">
                        <span><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
                <div class="product_image">
                    <img src="./assets/${product.image}" alt="${product.title}">
                </div>
                <div class="product__desc">
                    <div class="product_title">${product.title}</div>
                    <p class="p-desc">It is a long established fact that a reader will 
                    be distracted by the readable content of a page .</p>
                </div>
                <div class="product_info">$${product.price.toFixed(2)}</div>
            </div>
            <div class="bottom-product-card">
                <div class="arrival-stats">
                    <small>New Arrival</small>
                </div>
                <div class="add_to-cart-btn" data-id="${product.id}">
                    <button>Add</button>
                </div>
            </div>
        </div>
        `;
        productsContainer.appendChild(card);
    })
}

let cart = [];

// rendering the products and adding them to the cart. 
document.addEventListener("DOMContentLoaded", () => {

    // Calling the renderproducts function.
    renderproducts();
    newProducts();
    
    // Adding items to the cart and implementing animation for add buttons so that cart opens. 
    const addToCartButtons = document.querySelectorAll('.product-card .add_to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-id'));
            const productToAdd = products.find(product => product.id === productId);

            const shoppingCart = document.getElementById('shopping-cart');
            shoppingCart.style.right = '0';

            // Checking if the item already exists in the cart.
            const existingProductIndex = cart.findIndex(item => item.id === productId);
            if (existingProductIndex !== -1) {
                alert("Item already exists in cart");
                return;
            }

            if (productToAdd) {
                cart.push({ ...productToAdd, originalPrice: productToAdd.price });
                updateCart();
            }
        })
    });

    // Adding items to the cart. 
    const newAddToCartBtns = document.querySelectorAll('.next-page-content-cards .add_to-cart-btn');
       
        newAddToCartBtns.forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-id'));
                const productToAdd = nextPageProducts.find(product => product.id === productId);

                if(productToAdd) {
                    cart.push(productToAdd);
                    updateCart();
                }
            });
        });

    // Update cart Function
    function updateCart(){
        const cartContent = document.querySelector('.cart-content');

        cartContent.innerHTML = '';

        let subTotal = 0;

        cart.forEach(product => {
            const productEl = document.createElement('div');
            productEl.classList.add('cart-item');

             if (!product.quantity) {
                product.quantity = 1;
            }

            // Creating new cart element to be displayed in the cart.
            productEl.innerHTML = `
            <div class="c-content">
                <div class="top-cart-details">
                    <div class="cart-item-details">
                        <img src="./assets/${product.image}" alt="${product.title}" class="cart-item-image">
                    </div>
                    <div class="product__counter">
                        <div class="increase">
                            <button class="increase-btn" data-id="${product.id}">+</button>
                        </div>
                        <div class="counter">
                            <span class="cart-item-count">${getProductQuantity(product.id)}</span>
                        </div>
                        <div class="decrease">
                            <button class="decrease-btn" data-id="${product.id}">-</button>
                        </div>
                    </div>
                    <div class="cart-price">
                        <div class="cart-item-price">$${product.price.toFixed(2)}</div>
                    </div>
                </div>
                <div class="cart-t">
                    <div class="cart-item-title">${product.title}</div>
                    <button class="remove-from-cart-btn" data-id="${product.id}">Remove</button>
                </div>
            </div>
            `;

            subTotal += product.price + product.quantity;
            cartContent.appendChild(productEl);

        });

        const subTotalAmount = document.querySelector('.sub__total_amount span');
        const totalAmount = document.querySelector('.total_amount span');
        subTotalAmount.textContent = `$${subTotal.toFixed(2)}`;
        totalAmount.textContent = `$${subTotal.toFixed(2)}`;

         // increase and decrease implementation
        const increaseButtons = document.querySelectorAll('.increase-btn');
        increaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-id'));
                increaseProductQuantity(productId);
                updateCart();
            });
        });

        // implementing the descrease button.
        const descreaseButtons = document.querySelectorAll('.decrease-btn');
        descreaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-id'));
                decreaseProductQuantity(productId);
                updateCart();
            });
        });

        // creating a function to increase or decrease the quantity. 
        function getProductQuantity(productId){
            const product = cart.find(item => item.id === productId);
            return product && product.quantity !== undefined ? product.quantity : 0;
        }

        function increaseProductQuantity(productId){
            const product = cart.find(item => item.id === productId);
            if(product){
                product.quantity = (product.quantity || 0) + 1;
                product.price += product.originalPrice;
            }
        }

        function decreaseProductQuantity(productId){
            const product = cart.find(item => item.id === productId);
            if(product && product.quantity > 1) {
                product.quantity -= 1;
                product.price -= product.originalPrice;
            }
        }

        // Removing the cart Items.
        const removeFromCartButtons = document.querySelectorAll('.remove-from-cart-btn');
        removeFromCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-id'));
                cart = cart.filter(product => product.id !== productId);
                updateCart();
            });
        });
        toggleEmptyCartMessage();
    }
});

function toggleEmptyCartMessage() {
    const cartMessage = document.querySelector('.empty-cart-message');
    if (cartMessage) {
        if(cart.length <= 0){
            cartMessage.style.display = 'block';
        } else {
            cartMessage.style.display = 'none';
        }
    }
}

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const nextPage = document.getElementById('next');
const prevPage = document.getElementById('prev');
nextPage.onclick = function(){
    page1.style.left = '-150%';
    page2.style.left = '0%';
}

prevPage.onclick = function(){
    page1.style.left = '0%';
    page2.style.left = '-150%';
}