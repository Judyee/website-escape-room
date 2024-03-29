// index
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtns = document.querySelectorAll('.active-exact');
    // console.log(toggleBtns)

    for (i = 0; i < toggleBtns.length; i++) {
        toggleBtns[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

// help頁面
var coll = document.getElementsByClassName("faq-list");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var toggle = this.querySelector('.toggle'); // 获取按钮内的 toggle 元素
        if (content.style.display === "block") {
            content.style.display = "none";
            toggle.textContent = "+"; // 如果内容块已显示，则设置 toggle 内容为 "+"
        } else {
            content.style.display = "block";
            toggle.textContent = "-"; // 如果内容块未显示，则设置 toggle 内容为 "-"
        }
    });
}

// news頁面
$(document).ready(function () {
    $("#act").hide(); // 隐藏ID=act的div
    $("#imp").hide(); // 隐藏ID=update的div

    $("#allBtn").click(function () {
        $("#act").hide()
        $("#imp").hide()
        $("#all").show()
    });

    $("#actBtn").click(function () {
        $("#all").hide()
        $("#imp").hide()
        $("#act").show()
    });

    $("#impBtn").click(function () {
        $("#act").hide()
        $("#all").hide()
        $("#imp").show()
    });
});

// contect頁面
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.contect-timeBtn');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // 移除所有按钮的选中状态
            buttons.forEach(function (btn) {
                btn.classList.remove('selected');
            });
            // 将当前点击的按钮设为选中状态
            this.classList.add('selected');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const infoTime = document.querySelector('.contect-info-time');
    const moreInfo = document.querySelector('.contect-moreinfo-time-bg');

    infoTime.addEventListener('click', function () {
        this.classList.toggle('selected'); // 切换选中状态
        moreInfo.style.display = (moreInfo.style.display === 'block') ? 'none' : 'block'; // 切换展开/折叠
    });
});