const inputstr = window.prompt('文章を入力してください。').replace('　', ' ') // 全角空白を半角の空白に置換
const arry_str = inputstr.split(' ') // 入力文字を半角の空白で分割
const buf_obj_str = {} // 出力用のオブジェクトの初期化
for (let n = 0; n < arry_str.length; n++) {
  if (!buf_obj_str[arry_str[n]]) {
    buf_obj_str[arry_str[n]] = 1
  } else {
    buf_obj_str[arry_str[n]] = buf_obj_str[arry_str[n]] + 1
  }
}
console.log(buf_obj_str)

// 作業時間約15分 + 前回の作業時間30分
// 参考サイトは特になし
