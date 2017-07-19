/**
 * Created by beelarr on 7/18/17.
 */


let text_input = document.querySelector('textarea');
let output = document.querySelector('#card');
let del_button = document.querySelector('#reset');



document.querySelector('#create').addEventListener('click', function(){
    output.innerHTML += `<div class="container">
                <p>${text_input.value}</p>
                <button id="reset" type="reset" onclick="del_it()">Delete</button></div>`
});



function del_it() {
    let parent = document.querySelector('#card')
    let child = document.querySelector('.container');
    parent.removeChild(child)

}


