let watch = document.querySelector('.watch-screen')

let heading = document.createElement('h1')
watch.append(heading)

const currTime =()=>{
    let time = new Date()
    let onlyTime = time.toLocaleTimeString()
    heading.textContent = onlyTime
}
currTime()
setInterval(() => {
    currTime()
}, 1000);
