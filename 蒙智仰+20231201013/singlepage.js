// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有按钮
    const buttons = document.querySelectorAll('button[data-page]');
    // 获取所有页面div（只选择以page开头的div，排除其他div）
    const pages = document.querySelectorAll('div[id^="page"]');
    
    // 默认显示第一个页面
    if (pages.length > 0) {
        pages[0].style.display = 'block';
    }
    
    // 为每个按钮添加点击事件
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            
            // 隐藏所有页面（只隐藏以page开头的div）
            pages.forEach(page => {
                page.style.display = 'none';
            });
            
            // 显示选中的页面
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.style.display = 'block';
            }
        });
    });
});