const quiz = [
    {
        question: 'サッカーＷ杯,第一回開催の優勝国は？',
        answers:[
            'ブラジル',
            'アルゼンチン',
            'ウルグアイ',
            'パラグアイ'
        ],
        correct: 'ウルグアイ'
    },
    {
        question: '2018Ｗ杯、得点王は？',
        answers:[
            'アントワーヌグリーズマン',
            'クリスティアーノロナウド',
            'ハリーケイン',
            'キリアンエムバぺ'
        ],
        correct: 'ハリーケイン'
    },
    {
        question: '2002日韓ワールドカップ、決勝が行われたスタジアムは？',
        answers:[
            '味の素スタジアム',
            '埼玉スタジアム2002',
            '日産スタジアム',
            '国立競技場'
        ],
        correct: '日産スタジアム'
    },
    {
        question: 'Ｗ杯で優勝回数が一番多いのは？',
        answers:[
            'イタリア',
            'ブラジル',
            'アルゼンチン',
            'イングランド'
        ],
        correct: 'ブラジル'
    },
    {
        question: '決勝戦、ジダンが頭突きして退場になったのは何年のＷ杯？',
        answers:[
            '2006年大会',
            '2010年大会',
            '2014年大会',
            '2018年大会'
        ],
        correct: '2006年大会'
    }
];
let quizIndex = 0;
let quizLength = quiz.length;
let score = 0;




const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();


//ボタンをクリックしたら正誤判定

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        //問題数があればこちらを実行
        setupQuiz();
    }else{
        //問題数がなければこちらを実行
        window.alert('終了！あなたの正解数は'+ score + '/'  + quizLength + 'です！');
    }
}

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

