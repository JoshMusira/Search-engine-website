

function search() {

    let input = document.getElementById("search-item").value.toUpperCase();
    let item = document.querySelectorAll(".product");
    let name = document.getElementsByTagName("h2");
    
    for (let i = 0; i <= name.length;i++){
        let name = item[i].getElementsByTagName("h2")[0];
        let value = name.innerHTML || name.innerText || name.innerTextContent;
        if(value.toUpperCase().indexOf(input) > -1){
            item[i].style.display = "";
        }
        else{
            item[i].style.display = "none";
        }
    }


}