//code for hover ichange lang if sa backenders
var items = document.getElementsByTagName("li");

for(let item of items){


    var pathName = window.location.pathname // /websiteSIA/order.html
    var pathNameArray = pathName.split("/")
    var namee = pathNameArray[pathNameArray.length-1].split(".")[0]
    
    if(namee === item.id){
        item.style.backgroundColor = "#DCB672"
    }

    item.addEventListener("click", (e) => {
        window.location.href = `/websiteSIA/${e.target.id}.html`
    })
}