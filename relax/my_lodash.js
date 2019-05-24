;(function () {
    const runInContext = (function runInContext() {
        function add(a,b) {
            console.log('it works')
            return a+b
        }
        function lodash() {
            return {}
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

