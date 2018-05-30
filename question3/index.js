// ランダムで０，１，２を返す関数
const play = function() {
  return Math.floor(Math.random() * 3)
}
const rock_paper_scissors = { 0: 'グー', 1: 'チョキ', 2: 'パー' }
const combination = [
  ['アイコでしょ！', 'あなたの勝ち！', 'あなたの負け！'], // ユーザー：グー　[あいこ、勝ち、負け]
  ['あなたの負け！', 'アイコでしょ！', 'あなたの勝ち！'], // ユーザー：チョキ　[負け、あいこ、勝ち]
  ['あなたの勝ち！', 'あなたの負け！', 'アイコでしょ！'], // ユーザー：パー　[勝ち、負け、あいこ]
]

let inputstr = window.prompt('「じゃんけん・・・」\n 0.グー 1.チョキ 2.パー') // 入力
let result = true
while (result === true) {
  console.log('「ぽい！」')
  const comp = play()
  console.log('＊コンピュータ：' + rock_paper_scissors[comp])
  console.log('＊あなた ：' + rock_paper_scissors[inputstr])
  if (comp === parseInt(inputstr)) {
    console.log('「アイコでしょ！」')
    inputstr = window.prompt('「じゃんけん・・・」\n 0.グー 1.チョキ 2.パー') // 入力
    result = true
  } else {
    console.log(combination[inputstr][comp])
    result = false
    break
  }
}

// 作業時間約30分
// 参考サイトは特になし
