var menuIcon = document.querySelector('.burger');

menuIcon.addEventListener('click', function() {
    var linksEl = document.querySelectorAll('.links')
   
    menuIcon.setAttribute('style','text-align: center;')
    for(var i = 0; i < linksEl.length; i++)
    if(linksEl[i].style.display === 'block') {
        linksEl[i].style.display = 'none'
    } else {
        linksEl[i].style.display = 'block'
    }
})