let navbar = document.querySelector('.header .navbar');
let div = document.querySelectorAll('.services .box');
let a = document.querySelector('.box a')

// div.forEach(d => {
//     d.addEventListener('click', function (e) {
//         let parent = document.getElementById('parent')
//         let children = parent.lastChild
//         window.location.href = children.href
//     })
// })


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})