let cartContent = document.querySelector('.cart-content');
let cartVisible = true;
let listCartHTML = document.querySelector('.listCart');

let listProducts = []; 

if (cartVisible){
	cartContent.style.display = 'none';
	cartVisible = false;
}

function showCart(){
	if (cartVisible){
		cartContent.style.display = 'none';
		cartVisible = false;
	}
	else{
		cartContent.style.display = 'block';
		cartVisible = true;
	}
}

const addDataToHTML = () => {
	listCartHTML.innerHTML = '';
	if(listProducts.length > 0){
		listProducts.forEach(product => {
			let newProduct = document.createElement('div');
			newProduct.classList.add('item');
			newProduct.innerHTML = `
				<img src = "${info.image}">
				<h2> ${info.name} </h2>
				<div class = "price"> ${info.price} </div>
				<button class = "addCart">
					Add To Cart
				</button>
			`;
			listCartHTML.appendChild(newProduct);
		})
	}
}
listCartHTML.addEventListener('click', (event) => {
	let positionClick = event.target;
	if(positionClick.classList.contains('addCart')){
		alert('1');
	}
})

const initApp = () => {
	fetch('info.json')
	.then(response => response.json())
	.then(data => {
		listProducts = data;
	})
} 
initApp();
