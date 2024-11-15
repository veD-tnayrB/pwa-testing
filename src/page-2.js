const button = document.querySelector('button');
const videoSection = document.querySelector('.video-section');

button.addEventListener('click', toggleVideo);

function toggleVideo() {
	const isHidden = videoSection.style.display;

	if (isHidden) {
		videoSection.style.display = 'flex';
		button.textContent = 'Hide';
		return;
	}

	videoSection.style.display = 'none';
	button.textContent = 'Show';
}
