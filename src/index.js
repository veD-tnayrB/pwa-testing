const button = document.querySelector('button');
let swLocation = '/service-worker.js';

if (navigator.serviceWorker) {
	console.log('NAVIGATOR.SERVICEWORKER: ', swLocation);
	navigator.serviceWorker.register(swLocation);
}

button.addEventListener('click', changeColor);

function changeColor() {
	const currentValue = button.style.background;

	if (currentValue === 'red') {
		button.style.background = 'blue';
		return;
	}

	button.style.background = 'red';
}
