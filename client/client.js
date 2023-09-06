async function api(){
    let res=await fetch('http://localhost:4000')
    let superboys=await res.json()
    let div=document.querySelector(".super-boys")
    superboys.forEach(superboy=> {
        div.innerHTML+=`<h4>${superboy.name}</h4>`
        div.innerHTML+=`<h4>${superboy.ability}</h4>`
        div.innerHTML+=`<h4>${superboy.strength}</h4>`
    });
}
api()
