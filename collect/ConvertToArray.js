/*
*
* arraylike转为array的几种方式
* 来源：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments
*
* */
function test() {
    // ES5可用
    const ary1 = Array.prototype.slice.call(arguments)
    const ary2 = [].slice.call(arguments)

    // ES6可用
    const ary3 = Array.from(arguments)
    const ary4 = [...arguments]

    // 追求优化
    const ary5 = (arguments.length===1?[arguments[0]] : Array.apply(null, arguments))

    return [ary1,ary2,ary3,ary4,ary5]
}
console.log(test(1,2,3,4,5))