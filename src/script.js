var tableOpen=false;

function showApps(){
    // document.getElementById("app-list-id").classList.toggle("show");
    document.getElementById("app-list-id").classList.toggle("show");   
}

window.onclick = function(e) {
  if (!e.target.matches('#app-btn')) {
  var myDropdown = document.getElementById("app-list-id");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}