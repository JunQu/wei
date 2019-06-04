const fsPromises = require('fs').promises

async function mkdir(dirNames) {
    for (let i = 0; i < dirNames.length; i++) {
        try {
            await fsPromises.mkdir(dirNames[i])
        } catch (e) {
            console.log(e)
        }
    }
}

const mkNames = ['a','b','c','d','e']


