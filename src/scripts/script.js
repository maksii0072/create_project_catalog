
const containerCards = document.querySelector('.catalog__cards');
const template = document.querySelector('#template').content;


const initialCards = [

	{
		name: 'Холодильные витрины',
		link: 'images/cards/Холодильник.png',
		title: 'Каталог'
	},
	{
		name: 'Холодильные горки',
		link: 'images/cards/Холод_горки.png',
		title: 'Каталог'
	},
	{
		name: 'Ларь бонеты',
		link: 'images/cards/Ларь_бонеты.png',
		title: 'Каталог'
	},
	{
		name: 'Промо–витрины',
		link: 'images/cards/Промо_витрины.png',
		title: 'Каталог'
	},
	{
		name: 'Торговые стеллажи',
		link: 'images/cards/Торг_витрины.png',
		title: 'Каталог'
	},
	{
		name: 'Складские стеллажи',
		link: 'images/cards/Склад_стелажи.png',
		title: 'Каталог'
	},
	{
		name: 'Технологическое оборудование',
		link: 'images/cards/Тех_оборудывавние.png',
		title: 'Каталог'
	},
	{
		name: 'Кассовые боксы',
		link: 'images/cards/Кассовые_бокс.png',
		title: 'Каталог'
	},
	{
		name: 'Холодильные камеры',
		link: 'images/cards/Холод_камеры.png',
		title: 'Каталог'
	},
	{
		name: 'Холодильные установки',
		link: 'images/cards/Холод_установки.png',
		title: 'Каталог'
	},
	{
		name: 'Воздухоохладители',
		link: 'images/cards/Воздух_охлодители.png',
		title: 'Каталог'
	},
	{
		name: 'Воздушные конденсаторы',
		link: 'images/cards/Воздух_конденцаторы.png',
		title: 'Каталог'
	}

];


function createCards (item) {

	const templateElement = template.querySelector('.catalog__card').cloneNode(true);
	const elementImg = templateElement.querySelector('.catalog__img');
	const elementDescr = templateElement.querySelector('.catalog__descritpion');
	const elementTitle =templateElement.querySelector('.catalog__title');

	elementImg.src = item.link;
	elementImg.alt.textContent = item.name;
	elementDescr.textContent = item.name;
	elementTitle.textContent = item.title;


return templateElement;

}
const addCard = (item, container) => {
	const newCard = createCards(item);
	container.append(newCard);
}

initialCards.forEach(function (item) {
	addCard(item, containerCards);

});