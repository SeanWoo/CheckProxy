let themeswitcher = document.getElementById('theme-switcher');
let isDark = (readCookie('isDark') == 'true');

if(isDark){
    document.body.classList.add("darkbody");
    themeswitcher.querySelector('i').className = "fas fa-sun";
    isDark = !isDark;
    createCookie('isDark', true, '10');
}
else if(!isDark){
    document.body.classList.remove("darkbody");
    themeswitcher.querySelector('i').className = "fas fa-moon";
    isDark = !isDark;
    createCookie('isDark', false, '10');
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

themeswitcher.addEventListener('click', ()=>{
    switchtheme();
})

function switchtheme(){
    if(isDark){
        document.body.classList.remove("darkbody");
        themeswitcher.querySelector('i').className = "fas fa-moon";
        isDark = !isDark;
        createCookie('isDark', false, '10');
    }
    else if(!isDark){
        document.body.classList.add("darkbody");
        themeswitcher.querySelector('i').className = "fas fa-sun";
        isDark = !isDark;
        createCookie('isDark', true, '10');
    }
    else if(isDark!=false&isDark!=true){
        document.body.classList.add("darkbody");
        themeswitcher.querySelector('i').className = "fas fa-sun";
        isDark = !isDark;
        createCookie('isDark', true, '10');
    }
}

