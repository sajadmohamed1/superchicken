// تأثير عند التمرير
const menuItems = document.querySelectorAll('.menu-item');

// إضافة تأثير للظهور
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
});


menuItems.forEach(item => {
    observer.observe(item);
});

// وظيفة لإظهار العناصر بناءً على الفئة
function showMenu(category) {
    menuItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, 0);
        } else {
            item.style.opacity =0;
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 500); // الانتظار حتى انتهاء الانيميشن
        }
    });
}

          document.getElementById('facebook').onclick = function() {
            alert('تم النقر على رابط فيسبوك!');
        };
        document.getElementById('twitter').onclick = function() {
            alert('تم النقر على رابط تويتر!');
        };
        document.getElementById('instagram').onclick = function() {
            alert('تم النقر على رابط إنستغرام!');
        };
        document.getElementById('linkedin').onclick = function() {
            alert('تم النقر على رابط لينكدإن!');
        };