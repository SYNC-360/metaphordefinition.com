// ============================================================
// METAPHOR CALCULATOR TOOLS - JavaScript
// ============================================================

// ============================================================
// TOOL NAVIGATION
// ============================================================

document.querySelectorAll('.tool-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');

        // Hide all sections
        document.querySelectorAll('.tool-section').forEach(section => {
            section.classList.remove('active');
        });

        // Remove active from all links
        document.querySelectorAll('.tool-link').forEach(l => {
            l.classList.remove('active');
        });

        // Show selected section and mark link as active
        document.querySelector(target).classList.add('active');
        this.classList.add('active');
    });
});

// ============================================================
// METAPHOR ANALYZER
// ============================================================

const metaphorAnalysisData = {
    'Time is money': {
        tenor: 'Time',
        vehicle: 'Money',
        ground: 'Both are valuable resources that can be spent, saved, or wasted. Both have scarcity and can create wealth or poverty.',
        type: 'Simple Metaphor',
        analysis: 'This classic metaphor helps us understand time through the lens of economics. It emphasizes the preciousness and limited nature of time in our lives.'
    },
    'Life is a journey': {
        tenor: 'Life',
        vehicle: 'A journey',
        ground: 'Both involve progress, stages, destinations, obstacles, companions, and decision points. Both are processes with a beginning and end.',
        type: 'Extended Metaphor',
        analysis: 'This powerful metaphor suggests life has direction and purpose. It\'s often extended with related metaphors: "paths to take," "crossroads," "fellow travelers."'
    },
    'Love is a battlefield': {
        tenor: 'Love',
        vehicle: 'A battlefield',
        ground: 'Both involve conflict, struggle, strategy, vulnerability, and high stakes. Both can result in victory or defeat.',
        type: 'Simple Metaphor',
        analysis: 'This metaphor captures the challenging and sometimes turbulent nature of romantic relationships, emphasizing the emotional intensity involved.'
    },
    'The world is a stage': {
        tenor: 'The world/life',
        vehicle: 'A stage (theater)',
        ground: 'Both involve performance, roles, audiences, drama, and temporary existence. Both suggest we play roles for observers.',
        type: 'Extended Metaphor',
        analysis: 'Shakespeare\'s famous metaphor suggests life is performative and temporary. We all play roles depending on context and audience.'
    }
};

function analyzeMetaphor() {
    const input = document.getElementById('metaphor-input').value.trim();

    if (!input) {
        alert('Please enter a metaphor to analyze.');
        return;
    }

    const data = metaphorAnalysisData[input] || {
        tenor: 'Enter a metaphor to analyze',
        vehicle: 'Try one of the examples',
        ground: 'Or create your own analysis',
        type: 'Custom Analysis',
        analysis: 'For custom metaphors, identify the main subject (tenor), what it\'s compared to (vehicle), and what they have in common (ground).'
    };

    document.getElementById('tenor-result').textContent = data.tenor;
    document.getElementById('vehicle-result').textContent = data.vehicle;
    document.getElementById('ground-result').textContent = data.ground;
    document.getElementById('type-result').textContent = data.type;
    document.getElementById('analysis-result').textContent = data.analysis;
    document.getElementById('analyzer-result').style.display = 'grid';
}

function loadExample(example) {
    document.getElementById('metaphor-input').value = example;
    analyzeMetaphor();
}

// ============================================================
// METAPHOR GENERATOR
// ============================================================

const generatorData = {
    'fear': [
        { metaphor: 'Fear is a dark cloud that follows me', explanation: 'Emphasizes darkness, obscurity, and the persistent nature of fear.' },
        { metaphor: 'Fear is a chain that binds my feet', explanation: 'Highlights the restrictive and paralyzing aspects of fear.' },
        { metaphor: 'Fear is a wild animal lurking in the shadows', explanation: 'Captures the primal, unpredictable nature of fear.' },
        { metaphor: 'Fear is a wall between me and my dreams', explanation: 'Shows fear as an obstacle preventing progress.' }
    ],
    'success': [
        { metaphor: 'Success is a mountain peak waiting to be conquered', explanation: 'Shows success as an achievement requiring effort and climbing.' },
        { metaphor: 'Success is a seed growing into a mighty tree', explanation: 'Emphasizes the gradual, organic growth of success.' },
        { metaphor: 'Success is a light that illuminates my path', explanation: 'Shows success as guidance and clarity.' },
        { metaphor: 'Success is a treasure at the end of the journey', explanation: 'Positions success as the goal of effort and persistence.' }
    ],
    'happiness': [
        { metaphor: 'Happiness is sunshine breaking through the clouds', explanation: 'Shows happiness as warmth and brightness emerging from darkness.' },
        { metaphor: 'Happiness is a song in my heart', explanation: 'Emphasizes the emotional resonance and lightness of happiness.' },
        { metaphor: 'Happiness is a garden full of blooming flowers', explanation: 'Captures the beauty, growth, and vitality of happiness.' },
        { metaphor: 'Happiness is a warm embrace on a cold day', explanation: 'Conveys comfort, security, and comfort of happiness.' }
    ],
    'knowledge': [
        { metaphor: 'Knowledge is a door that opens infinite worlds', explanation: 'Shows knowledge as access and possibility.' },
        { metaphor: 'Knowledge is a light dispelling darkness', explanation: 'Emphasizes knowledge\'s power against ignorance.' },
        { metaphor: 'Knowledge is a key unlocking potential', explanation: 'Highlights knowledge as enabling power.' },
        { metaphor: 'Knowledge is a river flowing through time', explanation: 'Shows knowledge as continuous and flowing through generations.' }
    ]
};

function generateMetaphor() {
    const subject = document.getElementById('subject-input').value.trim().toLowerCase();

    if (!subject) {
        alert('Please enter a subject to generate metaphors.');
        return;
    }

    const metaphors = generatorData[subject] || [
        { metaphor: subject + ' is a river flowing through the landscape of life', explanation: 'A general metaphor emphasizing continuous change and influence.' },
        { metaphor: subject + ' is a seed planted in the garden of experience', explanation: 'A metaphor about growth and potential.' },
        { metaphor: subject + ' is a light illuminating the path forward', explanation: 'A metaphor about guidance and clarity.' },
        { metaphor: subject + ' is a bridge connecting past and future', explanation: 'A metaphor about connection and transition.' }
    ];

    document.getElementById('subject-display').textContent = subject;

    const metaphorsList = document.getElementById('metaphors-list');
    metaphorsList.innerHTML = metaphors.map((m, index) => `
        <div class="metaphor-item">
            <strong>${index + 1}. ${m.metaphor}</strong>
            <p>${m.explanation}</p>
        </div>
    `).join('');

    document.getElementById('generator-result').style.display = 'block';
}

// ============================================================
// LITERARY DEVICE IDENTIFIER
// ============================================================

const sampleTexts = {
    'sample1': 'To be, or not to be, that is the question:\nWhether \'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles\nAnd by opposing end them.',
    'sample2': '"Hope" is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -',
    'sample3': 'Her voice was like music to my ears. Life is a highway and I\'m going to drive it all night long. The storm raged like a furious beast outside.'
};

const devicePatterns = {
    metaphor: {
        patterns: ['is', 'was', 'are'],
        keywords: ['mountain', 'river', 'fire', 'stone', 'sea', 'journey', 'battle', 'stage', 'world', 'life'],
        description: 'Direct comparison without "like" or "as"'
    },
    simile: {
        patterns: ['like', 'as'],
        keywords: [],
        description: 'Comparison using "like" or "as"'
    },
    personification: {
        keywords: ['sing', 'dance', 'whisper', 'weep', 'laugh', 'cry', 'breathe', 'sleep', 'awake', 'speaks', 'walks'],
        description: 'Giving human qualities to non-human things'
    }
};

function identifyDevices() {
    const text = document.getElementById('text-input').value;

    if (!text) {
        alert('Please paste text to analyze.');
        return;
    }

    const devices = [];
    const sentences = text.split(/[.!?]+/).filter(s => s.trim());

    sentences.forEach(sentence => {
        // Check for similes (like, as)
        if (sentence.includes(' like ') || sentence.includes(' as ')) {
            const match = sentence.match(/([^.!?]*?)\s+(like|as)\s+([^.!?]*)/i);
            if (match) {
                devices.push({
                    type: 'simile',
                    text: match[0].trim(),
                    explanation: 'This is a simile, comparing two things using "like" or "as".'
                });
            }
        }

        // Check for personification
        Object.entries(devicePatterns.personification.keywords).forEach(keyword => {
            if (sentence.toLowerCase().includes(keyword)) {
                devices.push({
                    type: 'personification',
                    text: sentence.trim(),
                    explanation: `The word "${keyword}" suggests personification (giving human qualities to objects/nature).`
                });
            }
        });

        // Check for metaphors (basic heuristic)
        if ((sentence.includes(' is ') || sentence.includes(' was ')) && !sentence.includes(' like ')) {
            const parts = sentence.split(/\s+(is|was)\s+/);
            if (parts.length >= 3) {
                devices.push({
                    type: 'metaphor',
                    text: sentence.trim(),
                    explanation: 'This appears to be a metaphor, making a direct comparison.'
                });
            }
        }
    });

    const devicesHTML = devices.length > 0
        ? devices.map(device => `
            <div class="device-card ${device.type}">
                <span class="device-name">${device.type.toUpperCase()}</span>
                <p><strong>Text:</strong> "${device.text}"</p>
                <p><strong>Explanation:</strong> ${device.explanation}</p>
            </div>
        `).join('')
        : '<p>No clear literary devices detected. Try analyzing a more figurative text.</p>';

    document.getElementById('devices-found').innerHTML = devicesHTML;
    document.getElementById('identifier-result').style.display = 'block';
}

function loadSampleText(sample) {
    document.getElementById('text-input').value = sampleTexts[sample];
    identifyDevices();
}

// ============================================================
// METAPHOR QUIZ
// ============================================================

const quizQuestions = [
    {
        question: 'What is the primary difference between a metaphor and a simile?',
        options: [
            { text: 'Metaphors use "like" or "as", similes don\'t', correct: false },
            { text: 'Metaphors make direct comparisons, similes use "like" or "as"', correct: true },
            { text: 'There is no difference', correct: false },
            { text: 'Similes are more powerful than metaphors', correct: false }
        ],
        explanation: 'Metaphors make direct comparisons (e.g., "Time is money"), while similes use "like" or "as" (e.g., "Time is like money").'
    },
    {
        question: 'Which of these is an example of an extended metaphor?',
        options: [
            { text: '"Her eyes are stars"', correct: false },
            { text: '"Life is a journey with many roads to take, crossroads to face, and destinations to reach"', correct: true },
            { text: '"Love is a battlefield"', correct: false },
            { text: '"He is tall like a tree"', correct: false }
        ],
        explanation: 'An extended metaphor develops a single comparison throughout multiple sentences or a longer passage.'
    },
    {
        question: 'What are the three main components of a metaphor?',
        options: [
            { text: 'Subject, verb, object', correct: false },
            { text: 'Tenor, vehicle, and ground', correct: true },
            { text: 'Simile, metaphor, and personification', correct: false },
            { text: 'Beginning, middle, and end', correct: false }
        ],
        explanation: 'The tenor is what\'s being described, the vehicle is what it\'s compared to, and the ground is their connection.'
    },
    {
        question: 'What is an implied metaphor?',
        options: [
            { text: 'A metaphor stated directly', correct: false },
            { text: 'A metaphor that is suggested but not directly stated', correct: true },
            { text: 'A metaphor that uses "like" or "as"', correct: false },
            { text: 'A metaphor used in poetry only', correct: false }
        ],
        explanation: 'An implied metaphor suggests a comparison without directly stating it, like "He devoured the book" (implying the book is food).'
    },
    {
        question: 'Which is a "dead metaphor"?',
        options: [
            { text: '"Love is a battlefield"', correct: false },
            { text: '"The world is a stage"', correct: false },
            { text: '"Surfing the web"', correct: true },
            { text: '"Life is a journey"', correct: false }
        ],
        explanation: 'Dead metaphors are used so frequently they\'ve lost their vivid imagery and become ordinary language.'
    }
];

function initializeQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        const questionHTML = `
            <div class="quiz-question" id="question-${index}">
                <div class="quiz-progress">
                    <div class="quiz-progress-bar" style="width: ${((index + 1) / quizQuestions.length) * 100}%"></div>
                </div>
                <h3>Question ${index + 1} of ${quizQuestions.length}</h3>
                <p>${q.question}</p>
                <div class="quiz-options">
                    ${q.options.map((opt, optIndex) => `
                        <label class="quiz-option">
                            <input type="radio" name="question-${index}" value="${optIndex}" />
                            <span>${opt.text}</span>
                        </label>
                    `).join('')}
                </div>
                <div class="quiz-explanation" id="explanation-${index}" style="display: none;">
                    ${q.explanation}
                </div>
            </div>
        `;
        quizContainer.appendChild(document.createElement('div'));
        quizContainer.lastChild.innerHTML = questionHTML;

        // Add event listeners
        document.querySelectorAll(`input[name="question-${index}"]`).forEach(input => {
            input.addEventListener('change', function() {
                const isCorrect = quizQuestions[index].options[this.value].correct;
                handleQuizAnswer(index, isCorrect);
            });
        });
    });

    const submitButton = `
        <div style="text-align: center; margin-top: 2rem;">
            <button onclick="submitQuiz()" class="btn btn-primary">Submit Quiz</button>
        </div>
    `;
    quizContainer.innerHTML += submitButton;
}

function handleQuizAnswer(questionIndex, isCorrect) {
    const option = document.querySelector(`input[name="question-${questionIndex}"]:checked`).parentElement;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');
    document.getElementById(`explanation-${questionIndex}`).style.display = 'block';
}

function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selected && q.options[selected.value].correct) {
            score++;
        }
    });

    const percentage = Math.round((score / quizQuestions.length) * 100);
    const feedback = percentage >= 80 ? 'Excellent! You have a great understanding of metaphors!'
                     : percentage >= 60 ? 'Good job! Keep learning more about metaphors.'
                     : 'Keep practicing! Review the concepts and try again.';

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    document.getElementById('quiz-results').innerHTML = `
        <h3>Quiz Complete!</h3>
        <div class="quiz-score">
            <span>${score}</span> / ${quizQuestions.length}
        </div>
        <div class="quiz-score" style="font-size: 1.5rem; color: var(--accent-color);">
            ${percentage}%
        </div>
        <p class="quiz-feedback">${feedback}</p>
        <button onclick="location.reload()" class="btn btn-primary">Retake Quiz</button>
        <button onclick="document.getElementById('quiz-container').style.display = 'block'; document.getElementById('quiz-results').style.display = 'none'; initializeQuiz();" class="btn btn-secondary">Review Answers</button>
    `;
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Embed code copied to clipboard!');
}

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // Set first tool as active
    document.querySelector('.tool-link').click();

    // Initialize quiz
    initializeQuiz();
});
