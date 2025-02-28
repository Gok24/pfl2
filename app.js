sidex = document.querySelector(".sidex")
more = document.querySelector(".mobmenu")

body = document.querySelector("body")

more.onclick = function(){
    more.querySelector("i").classList.toggle("down")
    sidex.classList.toggle("on")
}


switx = document.querySelector(".switch")

switx.onclick = function(){
    body.classList.toggle("dark")
    switx.classList.toggle("active")
    

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
}

document.body.addEventListener('click', (e) => {
    if (!sidex.contains(e.target) && !more.contains(e.target)){
      sidex.classList.remove('on');
      more.querySelector("i").classList.remove("down")
    }
  });


  function applyDarkModePreference() {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
      document.body.classList.add('dark');
      switx.classList.add("active")
    } else {
      document.body.classList.remove('dark');
      switx.classList.remove("active")
    }
  }

  applyDarkModePreference();