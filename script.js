// script.js
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('recover-btn').addEventListener('click', function() {
    alert('وظيفة استرجاع الملفات لم تُنفذ بعد.');
});

document.getElementById('search-btn').addEventListener('click', function() {
    let searchQuery = document.getElementById('search-input').value;
    alert('البحث عن: ' + searchQuery);
});

// ساعة الحائط الرقمية
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// إنشاء مجلد
document.getElementById('create-folder-btn').addEventListener('click', function() {
    alert('وظيفة إنشاء المجلد لم تُنفذ بعد.');
});

// تحويل الصور إلى فيديو
document.getElementById('convert-btn').addEventListener('click', function() {
    alert('وظيفة تحويل الصور إلى فيديو لم تُنفذ بعد.');
});

// تحميل مقطع صوتي
document.getElementById('upload-audio-btn').addEventListener('click', function() {
    alert('وظيفة تحميل مقطع صوتي لم تُنفذ بعد.');
});