const popularCountainer = document.querySelector(".popular > .container > .slider");
const salesCountainer = document.querySelector(".sales > .container");
const BestDeals = document.querySelector(".BestDeals > .container")
const prev_btn = document.querySelector(".slider__btn-prev")
const next_btn = document.querySelector(".slider__btn-next")



let position = 0
let slidesToScroll = 1
let slidesToShow = 5
const itemWidth = popularCountainer.scrollWidth / slidesToShow
const movePosition = slidesToScroll * itemWidth;
let itemCount = 0

const setPosition = () => {
  popularCountainer.style.transform = `translateX(${position - 8}px)`
}

next_btn.addEventListener('click', (e) => {
	prev_btn.disabled = false
  const mnacord = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

	console.log(mnacord, slidesToScroll)
  position -= mnacord >= slidesToScroll ? movePosition : mnacord * itemWidth;
	next_btn.disabled = Math.trunc(mnacord) == slidesToScroll
  setPosition();
})

prev_btn.addEventListener('click', (e) => {
	next_btn.disabled = false
  const mnacord = Math.abs(position) / itemWidth;
  position += mnacord >= slidesToScroll ? movePosition : mnacord * itemWidth;
	prev_btn.disabled = Math.trunc(mnacord) == slidesToScroll
  setPosition();
})

async function readData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function readPopularItems() {
  const items = await readData('./data/data.json')
  itemCount = items.length
  items.forEach(element => {
    popularCountainer.insertAdjacentHTML("beforeend", `
				<article class="popular__items slide">
						<img src=${element.image} alt="popular-${element.id}" />
						<div class="popular__content">
							<h3>${element.title}</h3>
							<p class="place">
								<span></span>
								${element.place}
							</p>
							<p class="price">${element.price}</p>
							<button class="button button__popular">Order now</button>
						</div>
				</article>
			`)
  });
}

function rederSales() {
  fetch("./data/sales.json")
    .then(response => response.json())
    .then(data => {

      data.forEach(element => {
        salesCountainer.insertAdjacentHTML('beforeend', `
			<article class="sales__items">
				<div class="sales__imageBox">
					<img src=${element.image} alt=${element.id}>
						<div class="sales__procent">
							<p class="sales__count">${element.procent}</p>
							<p class="sales__second">%</p>
							<p class="sales__off">off</p>
						</div>
				</div>
				<div class="sales__content">
					<h2>${element.title}</h2>
					<h3 class="sales__remaining">
						${element.remaning} Days Remaining
					</h3>
				</div>
				</article>
			`)
      })
    })
}

async function readBestDealsItems() {
  const data = await readData("./data/data1.json")
  data.forEach((element, i) => {
    BestDeals.insertAdjacentHTML("beforeend", `
        
     <div class="BestDeals__items">
				<img src="${element.image}" alt="BestDeals-${element.id}" />
				<div class="BestDeals__content">
				<h3>${element.title}</h3>
     <p class="place"><span></span>
     ${element.text}
     </p>
     <button class="button">Proceed to order</button>
 </div>
</div>
 
 
     `)
  });
  // BestDeals[2].style="flex-direction: row"
  BestDeals.children[1].style = "flex-direction: row"
}

const btn_login = document.querySelector(".button__login");




btn_login.addEventListener('click', (e) => {
  location.href = "login.html"
})

function start() {
  readPopularItems()
  readBestDealsItems()
  rederSales()

	prev_btn.disabled = true;	
}

start()