// ランダムで０，１，２を返す関数
const randomFanc = function() {
  return Math.floor(Math.random() * 3)
}

const wording = ['「アイコでしょ！」', '「あなたの勝ち！」', '「あなたの負け！」']
const rockPaperScissors = { 0: 'グー', 1: 'チョキ', 2: 'パー' }
const combination = [
  [wording[0], wording[1], wording[2]], // ユーザー：グー　[あいこ、勝ち、負け]
  [wording[2], wording[0], wording[1]], // ユーザー：チョキ　[負け、あいこ、勝ち]
  [wording[1], wording[2], wording[0]], // ユーザー：パー　[勝ち、負け、あいこ]
]

let loopBool = true
while (loopBool === true) {
  const inputstr = window.prompt('「じゃんけん・・・」\n 0.グー 1.チョキ 2.パー') // 入力
  if (!inputstr || isNaN(inputstr) || parseInt(inputstr) > 2) {
    alert('ただ数数値を入力してください。') // 入力
    loopBool = true
  } else {
    console.log('「ぽい！」')
    const comp = randomFanc()
    console.log('＊コンピュータ：' + rockPaperScissors[comp])
    console.log('＊あなた ：' + rockPaperScissors[inputstr])
    if (comp === parseInt(inputstr)) {
      console.log(combination[inputstr][comp])
      loopBool = true
    } else {
      console.log(combination[inputstr][comp])
      loopBool = false
    }
  }
}

// 作業時間約30分
// 参考サイトは特になし
