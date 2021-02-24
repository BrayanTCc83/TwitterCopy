const checkContent = (e) => {
    if(e.target.value===null || e.target.value===undefined || e.target.value===""){
        e.target.classList.remove("haveContent")
    }else{
        e.target.classList.add("haveContent")
    }
}
const checkContentList = (e) => {
    let value = e.target.textContent
    let dropdown = e.target.parentNode.parentNode
    if(dropdown.classList.contains('dropdown')){
        let ac = document.getElementById(dropdown.id+'-res')
        ac.innerHTML=value
        dropdown.classList.add("haveContent")
    }
}
export {
    checkContent,
    checkContentList
}