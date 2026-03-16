// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        navbar.style.padding = '1rem 0';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 表单验证
function validateForm(form) {
    const inputs = form.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        if (input.required) {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        }

        // 邮箱验证
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        }

        // 密码验证（暂时移除长度验证，允许使用root作为密码）
        if (input.name === 'password') {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        }

        // 确认密码验证
        if (input.name === 'confirmPassword') {
            const passwordInput = form.querySelector('input[name="password"]');
            if (input.value !== passwordInput.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        }
    });

    return isValid;
}

// 后台登录表单验证
const adminLoginForm = document.querySelector('#adminLoginForm');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm(this)) {
            // 登录成功，跳转到后台管理页面
            window.location.href = 'admin-dashboard.html';
        } else {
            alert('请填写正确的登录信息');
        }
    });
}

// 退出登录功能
function logout() {
    if (confirm('确定要退出登录吗？')) {
        window.location.href = 'admin-login.html';
    }
}

// 侧边栏导航
document.querySelectorAll('.admin-sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 移除所有active类
        document.querySelectorAll('.admin-sidebar a').forEach(item => {
            item.classList.remove('active');
        });
        
        // 添加active类到当前点击的链接
        this.classList.add('active');
        
        // 滚动到对应的内容区域
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 输入框焦点效果
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#4CAF50';
    });

    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.style.borderColor = '#ddd';
        }
    });
});