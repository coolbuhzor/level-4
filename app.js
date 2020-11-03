document.querySelector('.blue').addEventListener('click', function() {
    document.querySelector('.whole-page').style.background= '#0392bf'
    document.querySelector('.whole-page').style.color = 'white'
    document.getElementById('final-btn').style.background = '#ed48ba'
    var els = document.getElementsByClassName('fff');
    for (var i = 0; i < els.length; i++) {
      els[i].style.color = '#000';
    }
    var els = document.getElementsByClassName('fa-star');
    for (var i = 0; i < els.length; i++) {
      els[i].style.color = '#fbec06';
    }
})

document.querySelector('.pink').addEventListener('click', function() {
    document.querySelector('.whole-page').style.background= '#ed48ba'
    document.querySelector('.whole-page').style.color = 'white'
    document.getElementById('final-btn').style.background = '#000'
    var els = document.getElementsByClassName('link');
    for (var i = 0; i < els.length; i++) {
      els[i].style.color = '#fff';
    }
    var els = document.getElementsByClassName('fa-star');
    for (var i = 0; i < els.length; i++) {
      els[i].style.color = '#fbec06';
    }

})

document.querySelector('.yellow').addEventListener('click', function() {
    document.querySelector('.whole-page').style.background = '#FBEC06'
    document.querySelector('.whole-page').style.color = '#000'
    var els = document.getElementsByClassName('link');
    for (var i = 0; i < els.length; i++) {
      els[i].style.color = '#000';
    }
    document.getElementById('final-btn').style.background = '#ed48ba'
    var els = document.getElementsByClassName('fa-star');
    for (var i = 0; i < els.length; i++) {
      els[i].style.color = '#ed48ba';
    }

    
})

document.querySelector('.white').addEventListener('click', function() {
    document.querySelector('.whole-page').style.background = '#B3D4E0'
    document.querySelector('.whole-page').style.color = '#000'
    document.getElementById('final-btn').style.background = '#ed48ba'
    var els = document.getElementsByClassName('link');
    for (var i = 0; i < els.length; i++) {
      els[i].style.color = '#000';
    }
    var els = document.getElementsByClassName('fa-star');
    for (var i = 0; i < els.length; i++) {
      els[i].style.color = '#fbec06';
    }

    
    
})

