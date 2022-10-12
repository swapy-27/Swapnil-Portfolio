const sectionId = document.getElementsByClassName('section-links')
const navSection = document.getElementById('header')
const menuBar = document.getElementById('menu-bars');
const navMenu = document.getElementById('nav-div-2');
const collapseBars = document.getElementById('collasped-bars')
var isBarCollapsed = true;

window.addEventListener('scroll', function () {
    if (this.document.documentElement.scrollTop > 100) {
        navSection.classList.add('header_background')

    }
    else {
        navSection.classList.remove('header_background')

    }
})

for (let i = 0; i < sectionId.length; i++) {
    sectionId[i].addEventListener('click', function () {
        const targetSection = document.getElementById(sectionId[i].getAttribute('data-value'));
        const currPos = document.documentElement.scrollTop;
        const targetHeight = targetSection.offsetTop;
        if (isBarCollapsed == false) {
            collapseBars.classList.add('collaspe');
            isBarCollapsed = true;
        }
        setTimeout(
            () => {
                scrollFunc(currPos, targetHeight)
            }
            ,
            200
        )

    })
}




var scrollFunc = function (curr, target) {

    if (curr > target) {
        var scrollId = setInterval(
            () => {

                if (curr <= target) {
                    clearInterval(scrollId)
                }
                window.scrollBy(0, -50)
                curr -= 50;

            }
            ,
            50
        )

        return;
    }

    var scrollId = setInterval(
        () => {

            if (curr >= target) {
                clearInterval(scrollId)
            }
            window.scrollBy(0, 50)
            curr += 50;

        }
        ,
        50
    )


}



menuBar.addEventListener('click', function () {
    if (isBarCollapsed) {
        collapseBars.classList.remove('collaspe');
        isBarCollapsed = false;
    }
    else {
        collapseBars.classList.add('collaspe');
        isBarCollapsed = true;
    }
})