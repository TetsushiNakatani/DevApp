const inputstr = window.prompt('好きな数字を入力してください') // 入力
let smuNum = 0
const addfunc = function(nowNum, inputNum) {
  smuNum = smuNum + nowNum
  if (nowNum >= inputNum) {
    console.log('出力：' + smuNum)
  } else {
    nowNum++
    addfunc(nowNum, inputNum)
  }
}
console.log('入力：' + inputstr)
addfunc(0, parseInt(inputstr))
// 作業時間約15分
// 参考サイトは特になし
