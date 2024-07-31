module.exports = function reverse (n) {
        let tmp = Math.abs(n), res = '';
        while (tmp) {
            res += String(tmp % 10);
            res = (res.startsWith('0') ? res.slice(1,-1) : res)
            tmp = Math.floor(tmp / 10)
        }
    
        return res
    }
    

