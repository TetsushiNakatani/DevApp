// 文字列の中で同じ単語をカウントする関数
const counter = function(str) {
  return inputstr.split(str).length - 1
}
const inputstr = window.prompt('文章を入力してください。').replace('　', ' ') // 全角空白を半角の空白に置換
const arry_str = inputstr.split(' ') // 入力文字を半角の空白で分割
const buf_arry_str = {} // 出力用のオブジェクトの初期化
for (let n = 0; n < arry_str.length; n++) {
  buf_arry_str[arry_str[n]] = counter(arry_str[n])
}
console.log(buf_arry_str)

// 作業時間約15分 + 前回の作業時間30分
// 参考サイトは特になし
