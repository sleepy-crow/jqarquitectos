window.onscroll = function(){
    if (document.documentElement.scrollTop > 100)
    {
        document.querySelector('.cielo').classList.add('show');
    }
    else
    {
        document.querySelector('.cielo').classList.remove('show');
    }
};

document.querySelector('.cielo').addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
});