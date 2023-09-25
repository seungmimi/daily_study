const pinchContainer = document.getElementById('pinchContainer');
let initialDistance = 0;
let currentDistance = 0;

pinchContainer.style.scale = 1;

pinchContainer.addEventListener('touchstart', (e) => {
    if (e.touches.length >= 2) {
        initialDistance = calculateDistanceBetweenTouches(e.touches);
    }
});

pinchContainer.addEventListener('touchmove', (e) => {
    if (e.touches.length >= 2) {
        currentDistance = calculateDistanceBetweenTouches(e.touches);

        if (currentDistance > initialDistance) {
            // 핀치 인 (확대)
            pinchIn();
        } else {
            // 핀치 아웃 (축소)
            pinchOut();
        }

        // 현재 거리를 초기 거리로 설정하여 다음 이동에 대비
        initialDistance = currentDistance;
    }
});

function calculateDistanceBetweenTouches(touches) {
    const x1 = touches[0].pageX;
    const y1 = touches[0].pageY;
    const x2 = touches[1].pageX;
    const y2 = touches[1].pageY;

    return Math.hypot(x2 - x1, y2 - y1);
}

function pinchIn() {
    pinchContainer.style.scale = pinchContainer.style.scale * 1.1;
}

function pinchOut() {
    pinchContainer.style.scale = pinchContainer.style.scale * 0.92;
}