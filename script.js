const puzzles = [
    {
        question: '2 → 6 → 7 → 21 → 22 → ?',
        options: ['44', '66', '23', '46'],
        correct: '44'
    },
    {
        question: '1 → 4 → 9 → 16 → 25 → ?',
        options: ['36', '35', '30', '40'],
        correct: '36'
    },
    {
        question: '5 → 10 → 8 → 16 → 14 → ?',
        options: ['28', '26', '24', '30'],
        correct: '28'
    },
    {
        question: '3 → 6 → 12 → 24 → 48 → ?',
        options: ['96', '90', '100', '80'],
        correct: '96'
    },
    {
        question: '2 → 3 → 5 → 7 → 11 → ?',
        options: ['13', '12', '15', '14'],
        correct: '13'
    },
    {
        question: '1 → 1 → 2 → 3 → 5 → 8 → ?',
        options: ['13', '11', '14', '12'],
        correct: '13'
    },
    {
        question: '10 → 20 → 40 → 80 → 160 → ?',
        options: ['320', '300', '310', '330'],
        correct: '320'
    },
    {
        question: '1 → 8 → 27 → 64 → 125 → ?',
        options: ['216', '200', '225', '210'],
        correct: '216'
    }
];

let currentPuzzle = 0;
let answered = false;
let correctIndex = 0;

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function loadPuzzle() {
    const puzzle = puzzles[currentPuzzle];
    document.getElementById('question').textContent = puzzle.question;
    
    const shuffledOptions = shuffle(puzzle.options);
    correctIndex = shuffledOptions.indexOf(puzzle.correct);
    
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach((btn, index) => {
        btn.textContent = shuffledOptions[index];
        btn.disabled = false;
        btn.style.opacity = '1';
    });
    
    document.getElementById('result').textContent = '';
    document.getElementById('nextBtn').style.display = 'none';
    answered = false;
}

function checkAnswer(index) {
    if (answered) return;
    
    const resultElement = document.getElementById('result');
    
    if (index === correctIndex) {
        resultElement.textContent = '✓ Correct!';
        resultElement.style.color = '#4ade80';
    } else {
        resultElement.textContent = '✗ Incorrect. Try again!';
        resultElement.style.color = '#f87171';
    }
    
    document.getElementById('nextBtn').style.display = 'block';
    answered = true;
}

function nextPuzzle() {
    currentPuzzle++;
    if (currentPuzzle >= puzzles.length) {
        currentPuzzle = 0;
    }
    loadPuzzle();
}

loadPuzzle();