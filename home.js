var TODOS = [];

class Todo {
	constructor(info, check_val){
		this.info = info;
		this.check_val = check_val;
	}
}

function add_box(){
	LoadList();
	console.log("hi");
	document.getElementById("main_body").innerHTML = "<div class='well'><div class='row'><div class='col-sm-12'><div class='form-group'><label for='comment'></label><textarea class='form-control' rows='2' id='comment'></textarea></div><button type='button' class=' btn btn-default  pull-right' onclick='convert()'>Done</button></div></div></div></div>";
}

function convert(){
	var new_todo = document.getElementById("comment").value;
	let td = new Todo(new_todo, "uc");

	TODOS.push(td);
	console.log(TODOS[0].info);
	console.log(TODOS[0].check_val);
	
	document.getElementById("main_body").innerHTML = "";
	
	LoadList();
}

function LoadList(){
	var inside = "";
	for (i=0;i<TODOS.length;i++){
		var info = TODOS[i].info;
		var checked = TODOS[i].check_val;
		if (checked == "c"){
			inside = inside + "<div class='well' id='" + i + "'><div class='row'><div class='checkbox col-sm-1 pull-left'><label><input type='checkbox' value=''" + "checked" +  " id='check" + i + "' onclick='checkbox_change(" + i + ")'></label></div><div class='col-sm-10 pull-left' id='info" + i + "'>" + info + " </div></div></div>";
		}
		else if (checked == "uc"){
			inside = inside + "<div class='well' id='" + i + "'><div class='row'><div class='checkbox col-sm-1 pull-left'><label><input type='checkbox' value='' id='check" + i + "' onclick='checkbox_change(" + i + ")'></label></div><div class='col-sm-10 pull-left' id='info" + i + "'>" + info + " </div></div></div>";
		}		
	}
	document.getElementById("text_body").innerHTML = inside;
	SaveList();
}

function LoadListDelete(){
	var inside = "";
	for (i=0;i<TODOS.length;i++){
		var info = TODOS[i].info;
		var checked = TODOS[i].check_val;
		if (checked == "c"){
			inside = inside + "<div class='well' id='" + i + "'><div class='row'><div class='checkbox col-sm-1 pull-left'><label><input type='checkbox' value=''" + "checked" +  " id='check" + i + "' onclick='checkbox_change(" + i + ")'></label></div><div class='col-sm-10 pull-left' id='info" + i + "'>" + info + " </div><div class='col-sm-1'><button type='button' class=' btn btn-default  pull-right' onclick='removeTodo(" + i + ")'>Remove</button></div></div></div>";
		}
		else if (checked == "uc"){
			inside = inside + "<div class='well' id='" + i + "'><div class='row'><div class='checkbox col-sm-1 pull-left'><label><input type='checkbox' value='' id='check" + i + "' onclick='checkbox_change(" + i + ")'></label></div><div class='col-sm-10 pull-left' id='info" + i + "'>" + info + " </div><div class='col-sm-1'><button type='button' class='btn btn-default  pull-right' onclick='removeTodo(" + i + ")'>Remove</button></div></div></div>";
		}		
	}
	document.getElementById("text_body").innerHTML = inside;
}

function LoadListEdit(){
	var inside = "";
	for (i=0;i<TODOS.length;i++){
		var info = TODOS[i].info;
		var checked = TODOS[i].check_val;
		if (checked == "c"){
			inside = inside + "<div class='well' id='" + i + "'><div class='row'><div class='checkbox col-sm-1 pull-left'><label><input type='checkbox' value=''" + "checked" +  " id='check" + i + "' onclick='checkbox_change(" + i + ")'></label></div><div class='col-sm-10 pull-left' id='info" + i + "'>" + info + " </div><div class='col-sm-1'><button type='button' class=' btn btn-default  pull-right' onclick='editTodo(" + i + ")'>Edit</button></div></div></div>";
		}
		else if (checked == "uc"){
			inside = inside + "<div class='well' id='" + i + "'><div class='row'><div class='checkbox col-sm-1 pull-left'><label><input type='checkbox' value='' id='check" + i + "' onclick='checkbox_change(" + i + ")'></label></div><div class='col-sm-10 pull-left' id='info" + i + "'>" + info + " </div><div class='col-sm-1'><button type='button' class=' btn btn-default  pull-right' onclick='editTodo(" + i + ")'>Edit</button></div></div></div>";
		}		
	}
	document.getElementById("text_body").innerHTML = inside;
}

function editDone(place){
	console.log("done");
	var new_todo = document.getElementById("comment").value;
	console.log(new_todo);
	TODOS[place].info = new_todo;
	document.getElementById("main_body").innerHTML = "";
	LoadList();
}

function editTodo(place){
	var inside = "";
	for (i=0;i<TODOS.length;i++){
		if (i != place){
			var info = TODOS[i].info;
			var checked = TODOS[i].check_val;
			if (checked == "c"){
				inside = inside + "<div class='well' id='" + i + "'><div class='row'><div class='checkbox col-sm-1 pull-left'><label><input type='checkbox' value=''" + "checked" +  " id='check" + i + "' onclick='checkbox_change(" + i + ")'></label></div><div class='col-sm-10 pull-left' id='info" + i + "'>" + info + " </div><div class='col-sm-1 pull-left'></div></div></div>";
			}
			else if (checked == "uc"){
				inside = inside + "<div class='well' id='" + i + "'><div class='row'><div class='checkbox col-sm-1 pull-left'><label><input type='checkbox' value='' id='check" + i + "' onclick='checkbox_change(" + i + ")'></label></div><div class='col-sm-10 pull-left' id='info" + i + "'>" + info + " </div><div class='col-sm-1 pull-left'></div></div></div>";
			}	
		}
	}
	document.getElementById("text_body").innerHTML = inside;
	
	
	var info = TODOS[place].info;
	document.getElementById("main_body").innerHTML = "<div class='well'><div class='row'><div class='col-sm-12'><div class='form-group'><label for='comment'></label><textarea class='form-control' rows='2' id='comment'>" + info + "</textarea></div><button type='button' class=' btn btn-default  pull-right' onclick='editDone(" + place + ")'>Done</button></div></div></div></div>";
}

function removeTodo(place) {
	TODOS.splice(place,1);
	LoadList();
}

function checkbox_change(place){
	console.log("hello");
	
	if (TODOS[place].check_val == "c"){
		TODOS[place].check_val = "uc";
	}
	else if (TODOS[place].check_val == "uc"){
		TODOS[place].check_val = "c";
	}
	
	SaveList();
}


function SaveList(){
	localStorage.clear();
	
	var count = TODOS.length.toString();
	localStorage.setItem("count", count);
	console.log(localStorage.getItem("count"));
	
	for (i=0;i<TODOS.length;i++){
		localStorage.setItem("td" + i.toString(), TODOS[i].info);
	}
	for (i=0;i<TODOS.length;i++){
		localStorage.setItem("ck" + i.toString(), TODOS[i].check_val);
	}
	
}

function StartLoadList(){
	PWA();
	var count = localStorage.getItem("count");
	for (i=0;i<count;i++){
		var new_todo = localStorage.getItem("td" + i.toString());
		var check = localStorage.getItem("ck" + i.toString());
		
		let td = new Todo(new_todo, check);

		TODOS.push(td);
		console.log(TODOS[0].info);
		console.log(TODOS[0].check_val);
	}
	LoadList();
}


function PWA(){

if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('./service-worker.js', { scope: './' })
    .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.log("Service Worker Failed to Register", err);
    })

}



// Function to perform HTTP request
var get = function(url) {
  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var result = xhr.responseText
                result = JSON.parse(result);
                resolve(result);
            } else {
                reject(xhr);
            }
        }
    };
    
    xhr.open("GET", url, true);
    xhr.send();

  }); 
};





}


















