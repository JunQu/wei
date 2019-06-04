
const promise = new Promise(function (resolve, reject) {
    resolve(42)
})
promise.then(value => {
    console.log(value)
}).catch(error=>{
    console.log(error)
})

function asyncFunction() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve('Async hello world')
        }, 1600)
    })
}

// asyncFunction()
//     .then(value => {
//         console.log(value)
//         return 52
//     })
//     .then(value => {
//         setTimeout(()=>console.log(value),1000)
//     })
//     .catch(error=>{
//     console.log(error)
// })

function getURL(url) {
   return new Promise((resolve, reject)=>{
       const req = new XMLHttpRequest();
       req.open('GET',url,true);
       req.onload = function () {
           if (req.status >= 200 && req.status < 400) {
               resolve(req.responseText)
           } else {
               reject(new Error(req.statusText))
           }
       }
       req.onerror = () =>{
           reject(new Error(req.statusText))
       }
       req.send()
   })
}



