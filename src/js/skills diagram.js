// function createScale(containerId, percent) { 
//     const canvas = document.createElement('canvas'); 
//     canvas.width = 100; 
//     canvas.height = 100; 
//     const context = canvas.getContext('2d'); 
//     const centerX = canvas.width / 2; 
//     const centerY = canvas.height / 2; 
//     const radius = 40; 
//     const startAngle = -Math.PI / 2; 
//     const endAngle = startAngle + (percent / 100) * 2 * Math.PI; 
//     context.beginPath(); 
//     context.arc(centerX, centerY, radius, startAngle, endAngle); 
//     context.strokeStyle = '#85586f'; 
//     context.lineWidth = 10; 
//     context.stroke(); 
//     const text = percent + '%'; 
//     context.font = '20px Roboto'; 
//     const textWidth = context.measureText(text).width; 
//     context.fillStyle = '#85586f'; 
//     context.fillText(text, centerX - textWidth / 2, centerY + 7); 
//     const container = document.getElementById(containerId); 
//     container.appendChild(canvas); 
// } 
 
// createScale('html-css', 90); 
// createScale('pug-sass', 90); 
// createScale('js', 60);
// createScale('bootstrap', 90);

function createScale(canvasId, percent) { 
    const canvas = document.getElementById(canvasId); 
    const context = canvas.getContext('2d'); 
    const centerX = canvas.width / 2; 
    const centerY = canvas.height / 2; 
    const radius = canvas.width / 2 - 10; 
    const startAngle = -Math.PI / 2; 
    const endAngle = startAngle + (percent / 100) * 2 * Math.PI; 
 
    // Зберігаємо початкові параметри шкали 
    const initialAngle = startAngle; 
    const initialPercent = 0; 
    const initialEndAngle = initialAngle + (initialPercent / 100) * 2 * Math.PI; 
 
    let currentPercent = 0; 
    let currentEndAngle = initialEndAngle; 
    let currentAngle = initialAngle; 
 
    const animationDuration = 1000; // 1 секунда 
    const animationSteps = 60; // 60 кадрів в секунду 
 
    const step = (endPercent) => { 
        // Знаходимо приріст відсотків та кута, який потрібно змінити на поточному кроці анімації 
        const percentChange = (endPercent - currentPercent) / animationSteps; 
        const angleChange = (endAngle - currentEndAngle) / animationSteps; 
 
        // Очищуємо канвас та малюємо шкалу з поточними параметрами 
        context.clearRect(0, 0, canvas.width, canvas.height); 
        context.beginPath(); 
        context.arc(centerX, centerY, radius, initialAngle, currentEndAngle); 
        context.strokeStyle = '#000'; 
        context.lineWidth = 10; 
        context.stroke(); 
 
        // Оновлюємо текст з відсотками 
        const text = currentPercent.toFixed() + '%'; 
        context.font = '35px Roboto'; 
        const textWidth = context.measureText(text).width; 
        context.fillStyle = '#000'; 
        context.fillText(text, centerX - textWidth / 2, centerY + 7); 
 
        // Якщо ми досягли кінцевого відсотка, зупиняємо анімацію 
        if (currentPercent >= endPercent) { 
            return; 
        } 
 
        // Оновлюємо параметри шкали та відсотки 
        currentEndAngle += angleChange; 
        currentPercent += percentChange; 
        currentAngle += angleChange; 
 
        // Рекурсивно викликаємо функцію наступного кроку анімації через 1/60 секунди 
        setTimeout(() => step(endPercent), animationDuration / animationSteps); 
    }; 
 
    // Запускаємо анімацію 
    step(percent); 
} 
 
function adaptCanvas(canvasEl) { 
    const pixelRatio = window.devicePixelRatio || 1; 
    const canvasWidth = canvasEl.clientWidth * pixelRatio; 
    const canvasHeight = canvasEl.clientHeight * pixelRatio; 
    canvasEl.width = canvasWidth; 
    canvasEl.height = canvasHeight; 
} 
 
const canvasEls = document.querySelectorAll('.progress canvas'); 
canvasEls.forEach(adaptCanvas); 
 
createScale('html-css', 90); 
createScale('pug-sass', 90); 
createScale('js', 60);
createScale('bootstrap', 60);