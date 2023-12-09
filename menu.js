function menuAcessar(){
    var list = document.getElementById('list')
    const menu = document.getElementById('menu')

    if(list.style.display == 'none'){
        list.style.display = 'block'
    }else{
        list.style.display = 'none'
    }

}