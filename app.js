document.querySelector('.blue').addEventListener('click', function() {
    document.querySelector('.whole-page').style.background= '#0392bf'
    document.querySelector('.whole-page').style.color = 'white'
    document.getElementById('final-btn').style.background = '#ed48ba'
    document.getElementById('link').style.color = 'white'
})

document.querySelector('.pink').addEventListener('click', function() {
    document.querySelector('.whole-page').style.background= '#ed48ba'
    document.querySelector('.whole-page').style.color = 'white'
    document.getElementById('final-btn').style.background = '#000'
    document.querySelector('#link').style.color = 'white'

})

document.querySelector('.yellow').addEventListener('click', function() {
    document.querySelector('.whole-page').style.background = '#FBEC06'
    document.querySelector('.whole-page').style.color = '#000'
    document.getElementById('link').style.color = '#000'
    document.getElementById('final-btn').style.background = '#ed48ba'

    
})

document.querySelector('.white').addEventListener('click', function() {
    document.querySelector('.whole-page').style.background = '#B3D4E0'
    document.querySelector('.whole-page').style.color = '#000'
    document.getElementById('final-btn').style.background = '#ed48ba'
    document.querySelector('#link').style.color = '#000'

    
    
})

