const sBtn = document.querySelector('.s_btn');
const str = document.querySelector('.search');
const array = [
	'Cause',
	'Effect',
	'Prevention',
];

sBtn.addEventListener('click', () => {
	let strL = str.value;
	for (let index = 0; index < array.length; index++) {
		if ((array[index].toLowerCase()).trim() == (strL.toLowerCase()).trim()) {
			
			if (0 == index) {
				//window.location.href = `https://www.youtube.com/watch?v=DzLqp6TpcQA`;
				window.location.href = 'https://www.youtube.com/watch?v=COmpU-ky-88';
				break;
			} else if (1==index) {
				//window.location.href = `https://www.youtube.com/watch?v=jKlwxf5eL2g`;
				window.location.href = 'https://www.youtube.com/watch?v=4Uy9b87cYRs';
				break;
			} else if (2== index ) {
				window.location.href = `https://www.youtube.com/watch?v=nXndl6cqWEw`;
				break;
			} 
             else {
				continue;
			}
		} else {
			continue;
		}
	}
	str.value = ' ';
});
