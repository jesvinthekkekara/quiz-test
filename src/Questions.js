 const qBank = [
    {
        question:
        "How many days do we have in a week?",
        answers: ["Seven", "Four", "Five", "Six"],
        correct: "Seven",
        questionId: "099099"
    },
    {
        question:
        "How many colors are there in a rainbow?",
        answers: ["10", "6", "9", "15"],
        correct: " 7",
        questionId: "093909"
    },
  
    {
        question:
        "How many letters are there in the English ?",
        answers: ["30", "22", "26", "34"],
        correct: "26",
        questionId: "092299"
    },
    {
        question:
        "Which animal is known as the ‘Ship of the Desert?’",
        answers: ["Eagle", "Camel", "Lion", "Elephant"],
        correct: "Camel",
        questionId: "099099"
    },
    {
        question:
        "Select the small letter from the options? ",
        answers: ["G", "S", "A", "Q"],
        correct: "A",
        questionId: "222099"
    },
    {
        question:
        "In which direction does the sun rise?",
        answers: ["West", "North", "South", "East"],
        correct: "East",
        questionId: "2222099"
    },
    {
        question:
        " Which planet is known as the Red Planet?",
        answers: ["Pluto", "Earth", "Satern", "Mars"],
        correct: "Mars",
        questionId: "09922099"
    },
    
    {
        question:
        "Which is the fastest animal on the land?",
        answers: ["Tiger", "Cheetah", "Lion", "Giraffe"],
        correct: "Cheetah",
        questionId: "099099"
    },
    {
        question:
        "The largest ‘Democracy’ in the world?",
        answers: ["India", "China", "Russia", "America"],
        correct: "India",
        questionId: "099099"
    },
   
    
    ];
    
    //  n = 5 to export 5 question
    export default (n = 5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
    