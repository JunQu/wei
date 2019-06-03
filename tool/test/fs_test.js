const fs = require('fs')
const pin = require('chinese-to-pinyin')


function midir(dirName) {
    dirNames.forEach(dirName => {
        fs.mkdir(dirName,e=>{
            if (e) {
                console.log(`${dirName}创建失败！`)
            } else {
                console.log(`${dirName}创建成功`)
            }
        })
    })
}

function mkPromise(dirName) {
    return new Promise((resolve, reject)=>{
        fs.mkdir(dirName,err => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

const mkName = ['a','b','c','d','e']

// midir(mkName)
async function  asMkdir(dirNames) {
    for (let i = 0; i < dirNames.length; i++) {
        const dir = dirNames[i]
        try {
            await mkPromise(dir)
            console.log(dir+'创建成功！')
        } catch (e) {
            console.log(dir + '创建失败！')
        }
    }
}
// asMkdir(mkName)
console.log(pin('零陵区'))