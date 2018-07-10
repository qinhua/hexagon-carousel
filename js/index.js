/**
 * Created by 金橘柠檬 on 2018/7/10.
 */
window.onload = function () {
    var icons = document.querySelector('.icons-group'), items = document.querySelectorAll('.icons');
    for (var i = 0; i < items.length; i++) {
        var obj = items[i];
        this.index = i;
        obj.addEventListener('click', function (e) {
            for (var j = 0; j < items.length; j++) {
                var obj1 = items[j];
                obj1.classList.remove('active');
            }
            if (!this.classList.contains('active')) {
                this.classList.add('active');
            } else {
                this.classList.remove('active');
            }
        }, false)
    }
    /*icons.addEventListener('click', function (e) {
     var isShot= e.target.classList.contains('icons')||e.target.classList.contains('icon-font');
     if(isShot){

     }
     }, false)*/
}