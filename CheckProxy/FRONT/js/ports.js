let addportbtn = document.getElementById('addportbtn')
let addpopportsbtn = document.getElementById('addpopportsbtn')
let submitportsbtn = document.getElementById('submitportsbtn')
let portsnumber = 0
let portslist = document.getElementById('ports-list')
var popportsnumber = 0
addportbtn.addEventListener('click', addport)
function addport(){
    ++portsnumber
    
    let ports = document.getElementsByClassName('port-input')
    
    portslist.insertAdjacentHTML('beforeend', `<div class="port-input" data-port='`+portsnumber+`'>
    <input type="text" maxlength="5" placeholder="00000">
    <i data-removeport='`+portsnumber+`' class="fas fa-trash-alt"></i>
    </div>`)
    
    let removeportnumber = ports[portsnumber].dataset.port
    console.log(removeportnumber)
    ports[portsnumber].querySelector('i').addEventListener('click', ()=>{
        removeport(removeportnumber)
    })

}

function removeport(a){
    for (let i of document.getElementsByClassName('port-input')){
        if(i.dataset.port==a){
            i.classList.add('removeport')
            console.log('removed '+a)
            portsnumber--
            setTimeout(()=>{
                i.remove()
            },500)
            break
        }
    }
}



addpopportsbtn.addEventListener('click',()=>{
    if(popportsnumber==0){
        addpopportsbtn.classList.add('locked')
        let popports = ['8080','3000','5500']
        popportsnumber = popports.length
        
        let ports = document.getElementsByClassName('port-input')
        for(let i = 0; i<popports.length; ++i){
            
            ++portsnumber

            portslist.insertAdjacentHTML('beforeend', `<div class="port-input" data-port='`+portsnumber+`'>
            <input type="text" maxlength="5" placeholder="00000" style="color:#396afc" value='`+popports[i]+`'>
            <i data-removeport='`+portsnumber+`' class="fas fa-trash-alt"></i>
            </div>`)

            let removeportnumber = ports[portsnumber].dataset.port
            console.log(removeportnumber)
            ports[portsnumber].querySelector('i').addEventListener('click', ()=>{
                removeport(removeportnumber)
                popportsnumber--
                if(popportsnumber==0){
                    addpopportsbtn.classList.remove('locked')
                }
            })
        }
}
})







submitportsbtn.addEventListener('click', submitports)
function submitports(e){
    e.preventDefault()
}
//addportbtn.addEventListener('click', alert('ss'))

