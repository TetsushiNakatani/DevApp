// ランダムで０，１，２を返す関数
const returnRandomNumber = function() {
  return Math.floor(Math.random() * 3)
}

const wording = ['「アイコでしょ！」', '「あなたの勝ち！」', '「あなたの負け！」']
const rockPaperScissors = ['グー', 'チョキ', 'パー']
const combination = [
  [wording[0], wording[1], wording[2]], // ユーザー：グー　[あいこ、勝ち、負け]
  [wording[2], wording[0], wording[1]], // ユーザー：チョキ　[負け、あいこ、勝ち]
  [wording[1], wording[2], wording[0]], // ユーザー：パー　[勝ち、負け、あいこ]
]

let conditionsToLoop = true
while (conditionsToLoop) {
  const inputstr = window.prompt('「じゃんけん・・・」\n 0.グー 1.チョキ 2.パー') // 入力
  if (!inputstr || isNaN(inputstr)) {
    // キャンセルの場合の処理
    break
  }
  if (!rockPaperScissors[inputstr]) {
    alert('正しい数値を入力してください。') // 入力
    conditionsToLoop = true
  } else {
    console.log('「ぽい！」')
    const comp = returnRandomNumber()
    console.log('＊コンピュータ：' + rockPaperScissors[comp])
    console.log('＊あなた ：' + rockPaperScissors[inputstr])
    if (comp === parseInt(inputstr)) {
      console.log(combination[inputstr][comp])
      conditionsToLoop = true
    } else {
      console.log(combination[inputstr][comp])
      conditionsToLoop = false
    }
  }
}

// 作業時間約30分
// 参考サイトは特になし
