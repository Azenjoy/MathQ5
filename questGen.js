class questGen {
    createSubtractionQuiz() {
        for (let i = 0; i < 10; i++) {
            let question = {};
            question.c = Math.floor(Math.random() * 51 + 1);
            question.d = Math.floor(Math.random() * 50 + 1);
            if (question.c > question.d) {
                question.a = question.c;
                question.b = question.d;
            } else {
                question.a = question.d;
                question.b = question.c;
            }
            question.questionText = `What is ${question.a} - ${question.b}?`;
            question.correctAnswer = question.a - question.b;
            questions.push(question);
        }
    }
    createMultiplicationQuiz() {
        for (let i = 0; i < 10; i++) {
            let question = {};
            question.c = Math.floor(Math.random() * 15 + 2);
            question.d = Math.floor(Math.random() * 12 + 1);
            if (question.c > question.d) {
                question.a = question.c;
                question.b = question.d;
            } else {
                question.a = question.d;
                question.b = question.c;
            }
            question.questionText = `What is ${question.a} * ${question.b}?`;
            question.correctAnswer = question.a * question.b;
            questions.push(question);
        }
    }
    createDivisionQuiz() {
        for (let i = 0; i < 10; i++) {
            let question = {};
            question.b= Math.floor(Math.random() * 8 + 1);
            question.a = Math.floor(Math.random() * 25 + 2)* question.b;
            question.questionText = `What is ${question.a} / ${question.b}?`;
            question.correctAnswer = Math.floor(question.a / question.b);
            questions.push(question);
        }
    }
    createAdditionQuiz() {
        for (let i = 0; i < 10; i++) {
            let question = {};
            question.c = Math.floor(Math.random() * 50) + 1;
            question.d = Math.floor(Math.random() * 50) + 1;
            if (question.c > question.d) {
                question.a = question.c;
                question.b = question.d;
            } else {
                question.a = question.d;
                question.b = question.c;
            }
            question.questionText = `What is ${question.a} + ${question.b}?`;
            question.correctAnswer = question.a + question.b;
            questions.push(question);
        }
    }
    }
