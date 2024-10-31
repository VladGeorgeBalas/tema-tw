let FieldList = document.getElementsByClassName("field")

for(let i = 0; i < FieldList.length; i++){
    FieldList[i].addEventListener("focus", (e) => {
        let field_name = e.currentTarget.parentElement.children[0]
        field_name.innerText = field_name.innerText.substring(0, field_name.innerText.length - 1) + ">"
    })
    FieldList[i].addEventListener("focusout", (e) => {
        let field_name = e.currentTarget.parentElement.children[0]
        field_name.innerText = field_name.innerText.substring(0, field_name.innerText.length - 1) + ":"
    })
}

