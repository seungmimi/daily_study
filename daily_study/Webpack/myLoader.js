//로더 제작 후 반드시 webpack.config.js에 등록을 해야 사용가능
module.exports = function myLoader(item){
    console.log('hello myloader!');
    return item.replace('console.log','alert')
}