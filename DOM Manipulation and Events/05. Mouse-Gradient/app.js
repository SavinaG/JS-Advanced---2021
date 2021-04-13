function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', e => {
        let position = e.offsetX / (e.target.clientWidth - 1); // let position = e.clientX;
        let percentage = Math.trunc(position * 100);           // let percentage = Math.trunc((position - 9) / 3);
        resultElement.textContent = `${percentage}%`;
        /*let offset = e.offsetX;
        let width = e.currentTarget.offsetWidth;

        let percent = Math.trunc((offset / width) * 100);

        resultElement.textContent = `${percent}%`;*/
    });
    gradientElement.addEventListener('mouseout', e => {
        resultElement.textContent = "";
    })
}