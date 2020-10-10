//BUTTONS
let addportbtn = document.getElementById('addportbtn')
let addpopportsbtn = document.getElementById('addpopportsbtn')
let submitportsbtn = document.getElementById('submitportsbtn')
let UseMyIpBTN = document.getElementById('usemyipbtn')
var userip = '';
let ipinput = document.getElementById('ipinput')
//BUTTONS

function getIP(json) {
    userip = (json.ip);
}


let portslist = document.getElementById('ports-list')

let portsnumber = 0
let popportsnumber = 0

addportbtn.addEventListener('click', ()=>{
    addport()
})

function addport(port){
    let ports = document.getElementsByClassName('port-input')
    if(typeof port == 'undefined'){
        ++portsnumber
        portslist.insertAdjacentHTML('beforeend',
        `<div class="port-input" data-port='`+portsnumber+`'>
            <input type="text" maxlength="5" placeholder="00000">
            <i data-removeport='`+portsnumber+`' class="fas fa-trash-alt"></i>
        </div>`
        )
        
        let removeportnumber = ports[portsnumber].dataset.port

        ports[portsnumber].querySelector('i').addEventListener('click', ()=>{
            removeport(removeportnumber)
        })
    
    }
    else{
        ++portsnumber
        portslist.insertAdjacentHTML('beforeend',
        `<div class="port-input" data-port='`+portsnumber+`'>
            <input type="text" maxlength="5" placeholder="00000" value='`+port+`'>
            <i data-removeport='`+portsnumber+`' class="fas fa-trash-alt"></i>
        </div>`
        )
        
        let removeportnumber = ports[portsnumber].dataset.port

        ports[portsnumber].querySelector('i').addEventListener('click', ()=>{
            removeport(removeportnumber)
        })
    }
}

function removeport(a){
    for (let i of document.getElementsByClassName('port-input')){
        if(i.dataset.port==a){
            i.classList.add('removeport')
            console.log(portsnumber+' removed')
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
            addport(popports[i])
            console.log(portsnumber)
            let removeportnumber = ports[portsnumber].dataset.port
            console.log('remove port number '+removeportnumber)
            ports[portsnumber].querySelector('input').style.color = '#396afc'
            ports[portsnumber].querySelector('i').addEventListener('click', ()=>{
                popportsnumber--
                if(popportsnumber==0){
                    addpopportsbtn.classList.remove('locked')
                }
            })
        }
    }   
})

UseMyIpBTN.addEventListener('click', ()=>{
    ipinput.value = userip
})

//SUBMIT PORTS
submitportsbtn.addEventListener('click', submitports)
function submitports(e){
    e.preventDefault()
}
//SUBMIT PORTS
