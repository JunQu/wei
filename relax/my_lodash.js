;(function () {
    const runInContext = (function runInContext() {
        function add(a,b) {
            console.log('it works')
            return a+b
        }
        function lodash() {
            return {}
        }
        function chunk(ary, size=1) {
            if (!ary||!ary.length||size<1) {
                return []
            }
            size = size|0
            return ary.reduce((arr,current)=>{
                if (arr[arr.length - 1].length === size) {
                    arr.push([current])
                } else {
                    arr[arr.length - 1].push(current)
                }
                return arr
            },[[]])
        }
        const compact = ary=>ary.filter(Boolean)
        function concat(ary, ...values)  {
            let ret = []
            if (Array.isArray(ary)) {
                ary.forEach(val=>ret.push(val))
            } else if (arguments.length) {
                ret.push(ary)
            }
            if (values.length) {
                values.forEach(value => {
                    if (!Array.isArray(value)) {
                        ret.push(value)
                    } else {
                        value.forEach(val=>ret.push(val))
                    }
                })
            }
            return ret
        }
        const baseDifference = () => {

        }


        /*-----------------------------------------------*/
        function after(n,func) {
            if (typeof func !== 'function') {
                throw 'not a function'
            }
            n = n < 0 ? 0 : n
            return function (...args) {
                if (--n < 1) {
                    func.apply(this,...args)
                }
            }
        }

        lodash.add = add
        lodash.chunk = chunk
        lodash.compact = compact
        lodash.concat = concat
        lodash.baseDifference = baseDifference
        lodash.templateSettings = {
            'imports': {
                '_' : lodash
            }
        }
        // console.log(lodash);
        return lodash
    })
    var _ = runInContext()
    module.exports = _;
    // (module.exports = _)._ = _;
    exports = _
}.call(this));

