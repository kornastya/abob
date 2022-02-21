//const btn = document.querySelector('.btn')
//const clock = document.querySelector('.clock')


//const timerClock = () =>{
    //let timer = 0

    //setInterval(() => {
        //clock.textContent = timer
        //timer++
    //}, 1000);
    //btn.removeEventListener('click', timerClock)
//}

//btn.addEventListener('click', timerClock)

//const timerOnline = () =>{
    //let timer = 20

    //setInterval(() => {
        //if(timer>0){
        //clock.textContent = timer
        //timer--  
        //}
        
    //}, 1000);
    //btn.removeEventListener('click', timerOnline)

    
//}


//btn.addEventListener('click', timerOnline)

//onst btn = document.querySelector('.btn')
//const popUp = document.querySelector('.pop__up')

//btn.addEventListener('click', ()=>{
    //setTimeout(() => {
       //popUp.classList.add('show__pop__up')
        //setTimeout(() => {
           // popUp.classList.remove('show__pop__up')
        //}, 2000);
   // }, 1500);
//})


// const btn = document.querySelector('.btn')
// const clock = document.querySelector('.clock')


// const showDate= () =>{
//     let today = new Date()
//     let day = today.getDate()
//     let month = today.getMonth() +1
//     let year = today.getFullYear()
//     let hour = today.getHours()
//     let minuts = today.getMinutes()
//     let sec = today.getSeconds()
//     setInterval(() => {
//         let today = new Date()
//     let day = today.getDate()
//     let month = today.getMonth() +1
//     let year = today.getFullYear()
//     let hour = today.getHours()
//     let minuts = today.getMinutes()
//     let sec = today.getSeconds()

//     clock.textContent = `${day}/${month}/${year} 
//      ${hour}:${minuts}:${sec}`
        

//     }, 1000);


// }

// btn.addEventListener('click', showDate)

// const btn = document.querySelector('.btn')
// const img = document.querySelector('.img')


// btn.addEventListener('click' , ()=>{
//     let num = 1
//      setInterval(() => {
//           if(num == undefined || num == 3){
//             num = 1
//           } else{
//           num++
//            }
//            img.src = `${num}.png`
    
//      }, 1000);
// })


const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    setInterval(() => {
        const img1 = document.querySelector('.img1')
        const img2 = document.querySelector('.img2')
        const img3 = document.querySelector('.img3')
        let temp = img1.src
        img1.src = img2.src
        img2.src = img3.src
        img3.src = temp
    }, 1100);
})