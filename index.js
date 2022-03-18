const contianer = document.querySelector(".contianer")


function addDivs(rows, columns) {
    columns = prompt("choice ch7al tdir div")
    rows = columns


    function calcDivs() {
        let width = 800;
        let height = 800;
        let etch = document.querySelector(".etch")
        return width / rows
    }

    if (columns > 100) return alert("columns most")


    let mos = ` width : ${calcDivs ()  }px;  height : ${calcDivs ()}px; `


    for (let i = 0; i < columns * rows; i++) {
        let etch = document.createElement("div");
        contianer.append(etch)
        etch.setAttribute("style" , mos )
        etch.addEventListener("mouseover" , function () { 
            if (etch.style.backgroundColor  ) return    
            etch.style.backgroundColor =   getRandomColor()
        })

    }
    

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    let button = document.querySelector("button")
    button.addEventListener("click", function () {
        window.location.reload()
    })

}
addDivs()