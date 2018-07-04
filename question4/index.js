const inputstr = window.prompt('好きな数字を入力してください') // 入力
const addfunc = function(inputNum) {
  if (inputNum > 0) {
    return inputNum + addfunc(inputNum - 1)
  } else {
    return 0
  }
}
console.log('入力：' + inputstr)
const result = addfunc(parseInt(inputstr))
console.log('出力：' + result)
// 作業時間約15分 + 修正30分
// 参考サイトは以下
// https://qiita.com/chuck0523/items/2c40a5da90a1d73ab956
