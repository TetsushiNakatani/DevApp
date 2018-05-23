// 文字列の中で同じ単語をカウントする関数
const counter = function(str) {
  return inputstr.split(str).length - 1
}
// 配列から重複文字を除去する関数
const RemovalStr = function(m_array) {
  return m_array.filter(function(value, index) {
    return index === m_array.indexOf(value) // 配列の若い番号に同じ文字列がある場合は遅い番号のデータを除去
  })
}
const inputstr = window.prompt('文章を入力してください。').replace('　', ' ') // 全角空白を半角の空白に置換
const arry_str = inputstr.split(' ') // 入力文字を半角の空白で分割
const buf_arry_str = [] // 出力用の一時配列の初期化
for (let n = 0; n < arry_str.length; n++) {
  buf_arry_str.push(arry_str[n] + `=>` + counter(arry_str[n]))
}
console.log(RemovalStr(buf_arry_str))

// 作業時間約30分　参考サイトは特になし
