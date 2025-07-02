// ToDo
function addTodo() {
  const input = document.getElementById('todoInput');
  const list = document.getElementById('todoList');
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
  }
}

// 計算アプリ
function calc(op) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result = '';
  if (!isNaN(num1) && !isNaN(num2)) {
    if (op === '+') result = num1 + num2;
    else if (op === '-') result = num1 - num2;
    else if (op === '*') result = num1 * num2;
    else if (op === '/') result = num2 !== 0 ? num1 / num2 : 'エラー（0で割れません）';
    document.getElementById('result').textContent = '答え：' + result;
  }
}

// じゃんけん
function play(playerHand) {
  const hands = ['グー', 'チョキ', 'パー'];
  const computerHand = hands[Math.floor(Math.random() * 3)];
  let result = '';
  if (playerHand === computerHand) {
    result = 'あいこ';
  } else if (
    (playerHand === 'グー' && computerHand === 'チョキ') ||
    (playerHand === 'チョキ' && computerHand === 'パー') ||
    (playerHand === 'パー' && computerHand === 'グー')
  ) {
    result = 'あなたの勝ち！';
  } else {
    result = 'あなたの負け…';
  }
  document.getElementById('jankenResult').textContent = `結果：${playerHand} vs ${computerHand} → ${result}`;
}

// お問い合わせフォーム
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (name && email && message) {
    document.getElementById('contactResult').textContent = 'お問い合わせありがとうございました。';
    document.getElementById('contactForm').reset();
  } else {
    document.getElementById('contactResult').textContent = 'すべての項目を入力してください。';
  }
  return false;
}
