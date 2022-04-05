const $html = document.querySelector('html');
var items = JSON.parse(localStorage.getItem('todo-list')) || [];

function onClickMenu(){
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

function testStorage(){
  if(localStorage.theme == null ){
    localStorage.theme = "Light";
  }
  if(localStorage.language == null ){
    localStorage.language = "en";
  }
}

function updateLang(){
  if (localStorage.language === "pt"){
    document.getElementById("menu1").innerHTML="English";
    document.getElementById("menu4").innerHTML="Portif&oacute;lio";
    document.getElementById("newtask").innerHTML="Nova Tarefa";
    document.getElementById("TaskDescr").innerHTML="Nome da tarefa";
    document.getElementById("create-task").innerHTML="Criar";
    document.getElementById("cancel-task").innerHTML="Cancelar";
    document.getElementById("msg").innerHTML="Feito com &#10084;&#65039; por Luan Nascimento";
  }
  if(localStorage.language === "en"){
    document.getElementById("menu1").innerHTML="Portugu&ecirc;s";
    document.getElementById("menu4").innerHTML="Portfolio";
    document.getElementById("newtask").innerHTML="New Task";
    document.getElementById("TaskDescr").innerHTML="Task name";
    document.getElementById("create-task").innerHTML="Create";
    document.getElementById("cancel-task").innerHTML="Cancel";
    document.getElementById("msg").innerHTML="Made With &#10084;&#65039; by Luan Nascimento";
  }
}

function updateTheme(){
  if (localStorage.theme === "Dark"){
    document.getElementById("menu2").innerHTML="Light Mode";
    $html.classList.toggle("dark-mode");
  }
  if (localStorage.theme === "Light"){
    document.getElementById("menu2").innerHTML="Dark Mode";
  }
}

  // selector .btnMenu
  const btnMenu1 = document.querySelector('.btnMenu1');
  const btnMenu2 = document.querySelector('.btnMenu2');
  const btnMenu3 = document.querySelector('.btnMenu3');
  const btnMenu4 = document.querySelector('.btnMenu4');
  const btnMenu5 = document.querySelector('.btnMenu4');
  
  // click buttons to close
    btnMenu1.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    if(localStorage.language === "pt"){
      localStorage.language = "en";
      updateLang();
    }else{
      localStorage.language = "pt";
      updateLang();
    }
  })
  
  btnMenu2.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    if(localStorage.theme === "Dark"){
      localStorage.theme = "Light";
      theme = localStorage.theme;
      updateTheme();
    }else{
      localStorage.theme = "Dark";
      theme = localStorage.theme;
      updateTheme();
    }
    document.location.reload(true);
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

  btnMenu5.addEventListener('click', function() {
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
  let input = document.getElementById('task-name');
  let text = input.value;
  if (text === ""){
    return alert("You need some task");
  }
  if (localStorage.language === "pt"){
    items.push({
      value: text, time: (new Date()).toLocaleDateString("pt-BR")
    });
  }
  if (localStorage.language === "en"){
    items.push({
      value: text, time: (new Date()).toLocaleDateString("en-US")
    });
  }

  localStorage.setItem('todo-list', JSON.stringify(items));
  listItems();

  input.value = "";
  document.getElementById('task-window').style.display = 'none';

}

function openUpdate(index) {
  let update = prompt("", "");
  items[index].value = update;
  localStorage.setItem('todo-list', JSON.stringify(items));
  listItems();
}

function checkItem(index) {
  let text = items[index].value;
  items[index].value = "<s>"+ text +"</s>";
  localStorage.setItem('todo-list', JSON.stringify(items));
  listItems();
}


function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem('todo-list', JSON.stringify(items))
  listItems();
}

function markAsDone(index) {
  items[index].done = !items[index].done;
  localStorage.setItem('todo-list', JSON.stringify(items));
  listItems();
}

function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<dt class"+ (items[i].done ? "done" : "") +">";
    list += items[i].value + "<br>";
    list += "<small onclick='markAsDone("+ i +")'>"+ items[i].time +"</small><br>";
    list += "<span onclick='deleteItem("+ i +")'><button id='delete'></button></span>";
    list += "<span><button id='space'></button></span>";
    list += "<span onclick='openUpdate("+ i +")'><button id='update'></button></span>";
    list += "<span><button id='space'></button></span>";
    list += "<span onclick='checkItem("+ i +")'><button id='check'></button></span></dt><br>";
  }
  document.querySelector("#tasklist-container").innerHTML = list;
}

(function() {
  testStorage();
  listItems();
  updateLang();
  updateTheme();
})();