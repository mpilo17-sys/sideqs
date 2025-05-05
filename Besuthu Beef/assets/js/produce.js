// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the navbar toggler button
    const navbarToggler = document.querySelector('.navbar-toggler');
  
    // Get the navbar nav content
    const navbarNavAltMarkup = document.getElementById('navbarNavAltMarkup');
  
    // Add a click event listener to the navbar toggler button
    if (navbarToggler && navbarNavAltMarkup) {
      navbarToggler.addEventListener('click', () => {
        // Toggle the 'show' class on the navbar nav content
        navbarNavAltMarkup.classList.toggle('show');
  
        // Toggle the 'aria-expanded' attribute on the navbar toggler button
        navbarToggler.setAttribute('aria-expanded', navbarNavAltMarkup.classList.contains('show'));
      });
    }
  });

document.addEventListener("DOMContentLoaded", () => {
    let cartIcon = document.querySelector('#cart-icon','.floating-button');
    let cart = document.querySelector('.cart');
    let closecart = document.querySelector('#close-cart');

    cartIcon.onclick = () => {
        cart.classList.add('active');
    }
    closecart.onclick = () => {
        cart.classList.remove('active');
    }

    // Set up event listeners for cart functionality
    function ready() {
        var removeCartButtons = document.getElementsByClassName('cart-remove');
        for (var i = 0; i < removeCartButtons.length; i++) {
            var button = removeCartButtons[i];
            button.addEventListener('click', removeCartItem);
        }

        var addCartButtons = document.getElementsByClassName('add-cart');
        for (var i = 0; i < addCartButtons.length; i++) {
            var button = addCartButtons[i];
            button.addEventListener('click', addToCart);
        }

        var quantityInputs = document.getElementsByClassName('cart-quantity');
        for (var i = 0; i < quantityInputs.length; i++) {
            var input = quantityInputs[i];
            input.addEventListener('change', quantityChanged);
        }
    }

    function addToCart(event) {
        var button = event.target;
        var product = button.parentElement;
        var title = product.getElementsByClassName('title')[0].innerText;
        var price = product.getElementsByClassName('price')[0].innerText;
        var productImg = product.getElementsByClassName('image')[0].src;

        addProductToCart(title, price, productImg);
        updatetotal();
    }

    function addProductToCart(title, price, productImg) {
        var cartContent = document.getElementsByClassName('cart-content')[0];
        var cartItemNames = cartContent.getElementsByClassName('cart-product-title');

        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText === title) {
                alert('This item is already added to the cart');
                return;
            }
        }

        var cartBox = document.createElement('div');
        cartBox.classList.add('cart-box');
        var cartBoxContent = `
            <img src="${productImg}" alt="${title}" class="cart-img">
            <div class="details">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <i class="bx bxs-trash-alt cart-remove"></i>
        `;
        cartBox.innerHTML = cartBoxContent;
        cartContent.appendChild(cartBox);

        cartBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
        cartBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
    }

    function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updatetotal();
    }

    function quantityChanged(event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatetotal();
    }

    function updatetotal() {
        var cartContent = document.getElementsByClassName('cart-content')[0];
        var cartBoxes = cartContent.getElementsByClassName('cart-box');
        var total = 0;
        for (var i = 0; i < cartBoxes.length; i++) {
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName('cart-price')[0];
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            var price = parseFloat(priceElement.innerText.replace("$", ""));
            var quantity = quantityElement.value;
            total += price * quantity;
        }
        document.getElementsByClassName('total-price')[0].innerText = "$" + total.toFixed(2);
    }

    ready();
});
