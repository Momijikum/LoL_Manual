document.addEventListener('DOMContentLoaded', () => {
    const collapsibleBtns = document.querySelectorAll('.collapsible-btn');

    collapsibleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 18px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px 18px";
            }
        });
    });

    // 初期状態で最初のアコーディオンを開く
    if(collapsibleBtns.length > 0) collapsibleBtns[0].click();
});
