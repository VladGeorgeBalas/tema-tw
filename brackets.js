let HoverList = document.getElementsByClassName("hover")

for(let i = 0; i < HoverList.length; i++){
    HoverList[i].addEventListener("mouseover", (e)=>{
        e.target.innerText = e.target.innerText.substring(1, e.target.innerText.length-1)
        e.target.innerText = "[" + e.target.innerText + "]"
    })

    HoverList[i].addEventListener("mouseleave", (e)=>{
        e.target.innerText = e.target.innerText.substring(1, e.target.innerText.length-1)
        e.target.innerText = String.fromCharCode(160) + e.target.innerText + String.fromCharCode(160)
    })
}
