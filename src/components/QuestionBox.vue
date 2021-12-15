<template>
    <div class="quiz">
        <h1>Are you a gin expert?</h1>

        <div class="quiz__box" v-if="index < count">
        <h2 class="quiz__question">{{ questions[index]['question'] }}</h2>

        <label
            class="quiz__answers"
            :for="key"
            v-for="answer,key in questions[index]['answers']"
            :class="{'green' : key == questions[index]['correctAnswer'] && selectedAnswer != ''},
            {'red' : selectedAnswer == key},
            {'hover' : selectedAnswer == ''}"
            >

            <input
                type="radio"
                :id="key"
                class="hidden"
                :value="key"
                @change="answered($event)"
                v-model="selectedAnswer"
                :disabled="selectedAnswer != ''"
            />

            {{ answer }}
        </label>

        <button
            class="btn"
            v-show="selectedAnswer != '' && index < count-1"
            @click="nextQuestion">

            Next >
        </button>

        <button
            class="btn"
            v-show="selectedAnswer != '' && index == count-1"
            @click="showResults">

            View Results
        </button>

      </div>

      <div v-else>
        <h2>Your Score Result</h2>

        <div class="quiz--correct">Correct Answers: {{ correctAnswer }}</div>
        <div class="quiz--incorrect">Incorrect Answers: {{ wrongAnswer }}</div>

        <button class="btn" @click="resetQuiz">Start Over</button>     
     </div>
  </div>     
</template>

<script>
export default {
    data() {
        return {
            // index - holder styr på hvilke spørsmål vi er på
            index: 0,

            // selectedAnswer - det svaret spilleren har angitt
            selectedAnswer: '',

            // correctAnswer - teller hvor mange riktige
            correctAnswer: 0,

            // wrongAnswer - teller hvor mange feil
            wrongAnswer: 0,
            
            // count - tot nr spørsmål i arrayet
            count: 4,
            questions: [
                {
                    question: "1. Which country in the UK is credited with producing the most gin?",
                    answers: {a: 'Scotland', b: 'England', c: 'Wales', d: 'Northern Ireland'},
                    correctAnswer: 'a'
                },
                {
                    question: "2. To qualify as gin, which botanical must be the most prominent?",
                    answers: {a: 'Lemon', b: 'Anise', c: 'Juniper', d: 'Coriander'},
                    correctAnswer: 'c'
                },
                {
                    question: "3. According to EU guidelines what is minimum amount of alcohol a gin can have to be officially classified as gin?",
                    answers: {a: '40%', b: '37.5%',c: '35%',d: '32%'},
                    correctAnswer: 'b'
                },
                {
                    question: "4. Modern gin is said to have derived from jenever/genever - a drink which was first produced where?",
                    answers: {a: 'France', b: 'Germany',c: 'Netherlands',d: 'Italy'},
                    correctAnswer: 'c'
                },
            ]
        }
    },

    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
}

       
    

</script>

<style>
.quiz {
    background: var(--highlight);
    height: 40vw;
    width: 80vw;
    margin: auto;
}
.quiz__answers {
    display: block;
    background: var(--blue);
    width: 60vw;
    margin-bottom: 12px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    color: white;
}

.hidden {
    display: none;
}
.quiz__question {
    color: var(--dblue);
    padding-bottom: 12px;
    width: 60vw;
    margin: auto;
}
.quiz--correct {
    color: var(--blue);
}
.quiz--incorrect {
    color: var(--red);
}
.red {
    background: var(--red);
}
.green {
    background: var(--lblue);
}
.hover:hover {
    background: grey;
}
</style>