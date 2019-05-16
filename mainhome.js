function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState != 'loading')
                fn();
        });
    }
}

function domReadyToGo() {

    function callObj(obj) {
        return obj.run();
    }
    
    window.onload = function (e) {
        //Este método se llama cuando se termina de cargar toda la pagina
    }

    /******* HeaderCopaAmerica ********/
        /*** Menú responsive ***/
    let btnBurguer = document.getElementById('js_com_menu_responsive_btn') ? document.getElementById('js_com_menu_responsive_btn') : null;
    let navMainList = document.getElementById('nav_MainList') ? document.getElementById('nav_MainList') : null; 

    function setToogleClassMainMenu(e) {
        let tagHtml = document.querySelector('html');
        let tagBody = document.querySelector('body');

        navMainList.classList.toggle("is-active-responsive");
        this.classList.toggle("is-active-responsive");

        tagBody.classList.toggle("is-active-responsive");
        tagHtml.classList.toggle("is-active-responsive");
   }

    btnBurguer.addEventListener('click', setToogleClassMainMenu);

    /*** MÁS INFORMACIÓN - DROPDOW ***/
    //var acc = document.getElementsByClassName("js-trigger");
    //var i;
    //for (i = 0; i < acc.length; i++) {
    //    acc[i].onclick = function() {
    //        this.classList.toggle("content-visible");
    //        var menuOpcion = this.nextElementSibling;
    //        if (menuOpcion.style.maxHeight) {
    //            menuOpcion.style.maxHeight = null;
    //        } else {
    //            menuOpcion.style.maxHeight = menuOpcion.scrollHeight + "px";
    //        }
    //    }
    //}
    /******* End - HeaderCopaAmerica ********/

    /*  HEADER - STICKY - HOME  */
	if(document.querySelector('.tem-Wrapper')) {
		var wrapper = document.querySelector('.tem-Wrapper');
		var temWrapperHeader = document.querySelector('.tem_Wrapper-header');
		var headerHeight = temWrapperHeader.getBoundingClientRect().height;
    	var sticky = (wrapper.getBoundingClientRect().top)*(-1);
		var sum = sticky + headerHeight;
		function myFunction() {
		//console.log("scroll",window.pageYOffset,"distancia",sum);
			if (window.scrollY >= sum || window.pageYOffset >= sum) {
				wrapper.classList.add("sticky");
				//wrapper.style.marginTop = headerHeight + 'px';
			} else {
				wrapper.classList.remove("sticky");
				//wrapper.removeAttribute('style');
			}
		}
		window.onscroll = function() {myFunction()};

	}

	/* AnimationSearch */

	if(document.getElementById('js-animation-search')) {
        var btnSearch = document.getElementById('js-animation-search');

        function createElementModal() {
            let htmlTemplate = `<style>
                            @media (min-width: 1000px) {
                                html.animation-search {
                                    overflow: hidden;
                                }
                                body.animation-search {
                                    padding-right: 16px;
                                } 
                                #modal-container {
                                    position: fixed;
                                    height: 100vh;
                                    width: 100%;
                                    top: 0;
                                    left: 0;
                                    right: 0;
                                    bottom: 0;
                                    transform: scale(0);
                                    z-index: 3;
                                    background: rgba(55, 95, 210, 0.9);
                                    overflow-x: hidden;
                                    overflow-y: auto;
                                }
                                #modal-container .modal-background {
                                    text-align: center;
                                    height: 100%;
                                    width: 100%;
                                    display: flex;
                                    padding: 15px 0;
                                }
                                #modal-container .modal-background::before {
                                    content: "X";
                                    position: absolute;
                                    top: 1.5rem;
                                    right: 1.5rem;
                                    color: #FFF;
                                    font-size: 3rem;
                                    opacity: 0.5;
                                    font-family: 'Helvetica', 'Arial', 'GothamMedium';
                                    font-weight: 500;
                                }
                                #modal-container .modal-background:hover::before {
                                    cursor: pointer;
                                }
                                #modal-container .modal {
                                    width: 80%;
                                    max-width: 639px;
                                    position: relative;
                                    margin: auto;
                                }
                                #modal-container .modal img {
                                    width: 100%;
                                }
                                #modal-container.one {
                                    transform: scaleY(0.01) scaleX(0);
                                    animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                                }
                                #modal-container.one .modal-background .modal {
                                    transform: scale(0);
                                    animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                                }
                                #modal-container.one.out {
                                    transform: scale(1);
                                    animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                                }
                                #modal-container.one.out .modal-background .modal {
                                    animation: zoomOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
                                }
                                @keyframes unfoldIn {
                                    0% {
                                        transform:scaleY(.005) scaleX(0);
                                    }
                                    50% {
                                        transform:scaleY(.005) scaleX(1);
                                    }
                                    100% {
                                        transform:scaleY(1) scaleX(1);
                                    }
                                }
                                @keyframes zoomIn {
                                    0% {
                                        transform:scale(0);
                                    }
                                    100% {
                                        transform:scale(1);
                                    }
                                }
                                @keyframes unfoldOut {
                                    0% {
                                        transform:scaleY(1) scaleX(1);
                                    }
                                    50% {
                                        transform:scaleY(.005) scaleX(1);
                                    }
                                    100% {
                                        transform:scaleY(.005) scaleX(0);
                                    }
                                }
                                @keyframes zoomOut {
                                    0% {
                                        transform:scale(1);
                                    }
                                    100% {
                                        transform:scale(0);
                                    }
                                }
                            }
                            </style>
                            <div id="modal-background" class="modal-background">
                                <div class="modal atm-input__search-mobile">
                                    <form action="/buscador" method="GET" class="search-mobile__form" autocomplete="off">
                                        <input name="buscando" type="search" placeholder="Buscar en Líbero ..." results=0 class="search-mobile__input">
                                        <button type="submit" class="search-mobile__submit">
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>`;

            return htmlTemplate;
        }
        function closeModal(e) {
            let modalBackground = document.getElementById("modal-background"),
                modalContainer = document.getElementById("modal-container");
            if ((e.type === 'click' && e.target === modalBackground) || 
                (e.type === 'keyup' && (e.keycode === 27 || e.which ===27))){
                    //tagBody.classList.remove("modal-active");
                    modalContainer.classList.add("out");
                    setTimeout(endAnimation, 1500);
            }
            document.body.classList.remove('animation-search');
            document.documentElement.classList.remove('animation-search');            
        }
        function endAnimation() {
            let modalContainer = document.getElementById("modal-container");
            modalContainer.remove();
        }
        function animation(e){
            let element = e.target;
            if(element.nodeName == "I") {
                element = e.target.parentElement;
            }

            let modalContainer = document.createElement('div');
            modalContainer.setAttribute('id', 'modal-container');
            modalContainer.setAttribute('class', 'one');
            modalContainer.innerHTML = createElementModal();

            document.body.classList.add('animation-search');
            document.documentElement.classList.add('animation-search');


            document.body.appendChild(modalContainer);

            modalContainer.addEventListener('click', closeModal);
        }
        btnSearch.addEventListener('click', animation);
    }

	/* End -AnimationSearch */
}
setTimeout(function () {
    ready(domReadyToGo);
}, 2000);






