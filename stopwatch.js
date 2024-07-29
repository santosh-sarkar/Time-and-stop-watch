let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')
let getBtn = document.getElementById('get')
let screen = document.querySelector('#screen')
let getDiv = document.querySelector('.get-time')

let count=0;
let interval=null;

let start =()=>{
    if(!interval){
       interval = setInterval(() => {   
            count++
            screen.innerText = count
        }, 1000);
    }
}


let stop =()=>{
    clearInterval(interval)
    interval=null
    get('Timer stopped')
}


let reset =()=>{

    clearInterval(interval)
    interval=null
    count = 0
    screen.innerText = count
}


let get =(str)=>{
    let p= document.createElement('p')
    p.innerText=`${str} at ${count} second`
    p.style.textAlign='center'
    getDiv.insertBefore(p, getDiv.firstChild);
    setTimeout(() => {
        p.remove()
    }, 5000);
}




startBtn.addEventListener('click',()=>{
    start()
})
stopBtn.addEventListener('click',()=>{
    stop()
})
resetBtn.addEventListener('click',()=>{
    reset()
})
getBtn.addEventListener('click',()=>{
    get('')
})
