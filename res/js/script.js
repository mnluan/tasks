const $html = document.querySelector('html');
var theme = false;

function onClickMenu(){
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
  
  // selector .btnMenu
  const btnMenu1 = document.querySelector('.btnMenu1')
  const btnMenu2 = document.querySelector('.btnMenu2')
  const btnMenu3 = document.querySelector('.btnMenu3')
  const btnMenu4 = document.querySelector('.btnMenu4')
  
  // click buttons to close
    btnMenu1.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  })
  
  btnMenu2.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    if (theme == false){
        $html.classList.toggle("dark-mode");
        document.getElementById("menu2").innerHTML="Light Mode";
        theme = true;
    }else{
        $html.classList.toggle("dark-mode");
        document.getElementById("menu2").innerHTML="Dark Mode";
        theme = false;
    }
    
  })
  
  btnMenu3.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  })
  
  btnMenu4.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  })

//Tasks menu
function addTask() {
    document.getElementById('task-window').style.display = 'block';
}

function cancelTask() {
    document.getElementById('task-window').style.display = 'none';
}

function newTask() {
    var input = document.getElementById('task-name');
    var text = input.value;
    var time = date = new Date().toLocaleDateString();
    var element = document.getElementById('tasklist-container');
    element.innerHTML = '<div id="tasks" class="tasks">'+ text + '<br>' + time + '</div><br>';
    document.getElementById('task-window').style.display = 'none';
}

