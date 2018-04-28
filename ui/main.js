// counter code
var button = document.getElementById('counter');

button.onclick = function() {
    //create a request
    var request = new XMLHttpRequest();
    
    //capture the response and store the variable
    request.onreadystatechange=function() {
        if(request.readystate == XMLhttpRequest.DONE) {
            //take some action
            if(request.status === 200){
                var counter = request.reponseText();
                var span=document.getElementById('count');
                span.innerHTML = counter.tostring();
                
            }
        }
    };