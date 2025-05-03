// QUESTION OBJECTS
const questions =   [
                        {   id: 1,
                            img: "assets/Tralalelo.webp", 
                            questionText: {   
                                    answer: "Tralalelo Tralala",
                                    text1: "Bombini Gusini", 
                                    text2: "Frigo Camelo",
                                    text3: "Boneca Abalabu" }, answerBtn: 0, name: 'btn0'},
                        {   id: 2, 
                            img: "assets/Bombini_Gusini.webp", 
                            questionText: {
                                answer: "Bombini Gusini",
                                text1: "Lirilirili Ralila",
                                text2: "Tralalelo Tralala",
                                text3: "Frigo Camelo" }, answerBtn: 0, name: 'btn0'},
                        {   id: 3, 
                            img: "assets/Tung_Tung_Sahur.webp", 
                            questionText: {
                                answer: "Tung Tung Tung Sahur",
                                text1: "Tralalelo Tralala",
                                text2: "Bombini Gusini",
                                text3: "Boneca Abalabu" }, answerBtn: 1, name: 'btn1'}, 
                        {   id: 4, 
                            img: "assets/Boneca_Ambalabu.webp",
                            questionText: {
                                answer: "Boneca Ambalabu",
                                text1: "Tralalelo Tralala",
                                text2: "Bombini Gusini", 
                                text3: "Bombardiro Crocodilo" }, answerBtn: 2, name: 'btn2'},
                        {   id: 5, 
                            img: "assets/Ballerina_Cappucina.webp", 
                            questionText: {
                                answer: "Ballerina Cappucina",
                                text1: "Tralalelo Tralala",
                                text2: "Saturno Saturnita",
                                text3: "Chimpanzini Bananini" }, answerBtn: 2, name: 'btn2'},
                        {   id: 6, 
                            img: "assets/Frigo_Camelo.webp", 
                            questionText: {
                                answer: "Frigo Camelo",
                                text1: "Lirilirili Ralila",
                                text2: "Ballerina Cappucina",
                                text3: "Chimpanzini Bananini" }, answerBtn: 3, name: 'btn3'},
                        {   id: 7, 
                            img: "assets/Bombardiro_Crocodilo.webp", 
                            questionText: {
                                answer: "Bombardiro Crocodilo",
                                text1: "Lirilirili Ralila", 
                                text2: "Frigo Camelo",
                                text3: "Bombini Gusini" }, answerBtn: 1, name: 'btn1'},
                        {   id: 8, 
                            img: "assets/Lirilirili_Ralila.webp", 
                            questionText: {
                                answer: "Lirilirili Ralila",
                                text1: "Bombardiro Crocodilo",
                                text2: "Chimpanzini Bananini",
                                text3: "Saturno Saturnita" }, answerBtn: 0, name: 'btn0'},
                        {   id: 9, 
                            img: "assets/Saturno_Saturnita.webp", 
                            questionText: {
                                answer: "Saturno Saturnita",
                                text1: "Chimpanzini Bananini",
                                text2: "Ballerina Cappucina",
                                text3: "Boneca Abalabu" }, answerBtn: 2, name: 'btn2' },
                        {   id: 10, 
                            img: "assets/Chimpanzini_Bananini.webp", 
                            questionText: {
                                answer: "Chimpanzini Bananini",
                                text1: "Lirilirili Ralila",
                                text2: "Frigo Camelo",
                                text3: "Tung Tung Tung Sahur" }, answerBtn: 3, name: 'btn3'}
                    ];

// Make a refference on all elements in the DOM
const container_buttons = document.querySelector('.container-buttons');
const buttons = container_buttons.querySelectorAll('button');
const img_container = document.querySelector('.container-image');
const image = document.getElementById('img');
let currentIndex = 0;
let score = 0;
let i = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Fire the function if the DOM is loaded
    displayCurrentIndex(checkCorrectAnswer);
});

function displayCurrentIndex(callback) {
    if (currentIndex >= questions.length) {
        // Notify the score if the question run out
        alert("Quiz completed! Your score: " + score);
        return;
    }
    image.src = questions[currentIndex].img; // Change the image
    const option = [questions[currentIndex].questionText.text1, questions[currentIndex].questionText.text2, questions[currentIndex].questionText.text3];
    i = 0; // Reset the index for options
    buttons.forEach((button, index) => {
        if (index === questions[currentIndex].answerBtn) {
            // Print the correct answer in the button
            button.textContent = questions[currentIndex].questionText.answer;
        } else {
            // Print the remaining answer in the buttons
            button.textContent = option[i];
            i++;
        }
        if (callback) {
            callback(button);
        }
    });
}

function checkCorrectAnswer(button) {
    button.addEventListener('click', () => {
        // Check if the button click is equal to the object name
        if(button.name === questions[currentIndex].name) {
            button.classList.add('button-correct');
            currentIndex++; // Increment currentIndex
            score++; // Increment score
            buttons.forEach(btn => btn.disabled = true); // Disable all the buttons after click
            setTimeout(() => {
                buttons.forEach(btn => btn.disabled = false);  // Re-enable all the buttons after 1.5 seconds
                displayCurrentIndex();
                button.classList.remove('button-correct');
            }, 1500);
        }
        else {
            button.classList.add('button-wrong');
            currentIndex++;
            buttons.forEach(btn => btn.disabled = true); // Disable all the buttons after click
            setTimeout(() => {
                buttons.forEach(btn => btn.disabled = false); // Re-enable all the buttons after 1.5 seconds
                displayCurrentIndex();
                button.classList.remove('button-wrong');
            }, 1500);
        }
    });
}