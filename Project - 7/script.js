let lists = document.getElementsByClassName('list');
let leftBox = document.getElementsByClassName('left');
let rightBox = document.getElementsByClassName('right');

for( let list of lists){
    list.addEventListener("dragstart",function (e) {
        let selected = e.target;

        rightBox.addEventListener("dragover",function(e) {
            e.preventDefault();
        });
        rightBox.addEventListener("drop",function(e) {
            rightBox.appendChild(selected);
            selected = null;
        });

        
    })
}