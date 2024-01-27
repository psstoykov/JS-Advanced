function attachGradientEvents() {

    let gradientRef = document.getElementById('gradient');
    gradientRef.addEventListener('mousemove', gradientMove);
    gradientRef.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {

        const gradientBoxWidth = event.target.clientWidth;
        const mousePos = event.offsetX / (gradientBoxWidth - 1);
        const percentage = Math.trunc(mousePos * 100);
        document.getElementById('result').textContent = percentage + '%'
    }

    function gradientOut() {
        document.getElementById('result').textContent = ''
    }
}