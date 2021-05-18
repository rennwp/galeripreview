const thumb = document.querySelector('.container');
let jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
const button = document.querySelector('.button')

thumb.addEventListener('click', function(e){
    if(e.target.classList.contains('jumbo')){
        return;
    }
    
    jumbo.src = e.target.src;


    jumbo.classList.add('fade');
    setTimeout(function(){
        jumbo.classList.remove('fade')
    }, 400)

    thumbs.forEach(function(thumb) {
        if(thumb.classList.contains('active')){
            thumb.classList.remove('active')
        }
    })

    e.target.classList.add('active');

});

button.addEventListener('click', function() {
    document.body.classList.toggle('invert');
    button.classList.toggle('invert');
    if( button.classList.contains('invert') ){
        button.innerHTML = 'Dark Mode'
    }else{
        button.innerHTML = 'Light Mode'
    }
})
