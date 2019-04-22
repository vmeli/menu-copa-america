let btnSearch = document.getElementById('js-animation-search');
let inputSearch = document.getElementById('search-mobile__form');

function animation(e) {
	let element = e.target;
	if(element.nodeName == "I") {
		element = e.target.parentElement;
	}
	element.classList.add('s-hidden');

	let original = this,
		clone = inputSearch.cloneNode(true);

element.classList.add('s-hidden');
		clone.classList.add("s--cloned");

	let searchOverlay = document.createElement('div');
	searchOverlay.setAttribute('class', 'search-overlay');
	searchOverlay.appendChild(clone);
	document.body.insertAdjacentElement('afterbegin', searchOverlay);
	console.log(this, clone,searchOverlay);

	let triggerLayout = searchOverlay.offsetTop;
	let originalRect = original.getBoundingClientRect();
	let cloneRect = clone.getBoundingClientRect();
	
	offsetX = originalRect.left - cloneRect.left;
	offsetY = originalRect.top - cloneRect.top;
	
	

	clone.style.transform = "translate("+ offsetX +"px, "+ offsetY +"px)";

clone.classList.add("s--moving");

    clone.setAttribute("style", "");
	
	console.log(offsetX);
}

btnSearch.addEventListener('click', animation);