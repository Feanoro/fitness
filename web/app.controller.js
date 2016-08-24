'use strict';

angular.module('fitnessApp')
    .controller('mainController', function($scope, $window, random_background){
        $scope.color = random_background;

        $scope.menu_visibility = true;

        $scope.toggleMenuVisibility = function(visible){
            $scope.menu_visibility = visible;
        };

        $scope.question2 = [
            {
                type: "qt-close-question",
                statement: "What measurement system are you most comfortable using?",
                options: [
                    {name: "Metric", answer: false},
                    {name: "Imperial", answer: false}
                ],
                config: {
                    optionsType: "button"
                }
            },
            {
                type: "qt-open-question",
                statement: "How tall are you?",
                answer: "",
                config: {
                    optionsType: "textfield",
                    align: "left"
                }
            },
            {
                type: "qt-open-question",
                statement: "How much do you weight?",
                answer: "",
                config: {
                    optionsType: "textfield",
                    align: "left"
                }
            },
            {
                type: "qt-open-question",
                statement: "How much would you like to weight?",
                answer: "",
                config: {
                    optionsType: "textfield",
                    align: "left"
                }
            },
            {
                type: "qt-open-question",
                statement: "Current body fat percentage. (Skip this question if you don’t know it.)",
                answer: "",
                config: {
                    optionsType: "textfield",
                    align: "left"
                }
            }
        ];
        $scope.question3 = {
            type: "qt-multiple-selection",
            statement: "What components of fitness are you most interested in training?",
            options: [
                {name: "Cardio. Train like a marathon runner.", answer: false},
                {name: "Strength. Train like a strongman/power lifter.", answer: false},
                {name: "Flexibility. Train like a yoga master.", answer: false},
                {name: "Aesthetics. Train like a body builder.", answer: false},
                {name: "Sports Specific Training. Train like a sports athelete.", answer: false},
                {name: "Injury Prevention. Train to conserve yourself.", answer: false}
            ],
            config: {optionsType: "checkbox"}
        };

        $scope.question4 = {
            type: "qt-multiple-selection",
            statement: "Where would you be willing to train?",
            options: [
                {name: "Park", img_src: "http://localhost:8080/fitness/web/assets/img/park.jpg", answer: false},
                {name: "Home", img_src: "http://localhost:8080/fitness/web/assets/img/home.jpg", answer: false},
                {name: "Gym", img_src: "http://localhost:8080/fitness/web/assets/img/gym.jpg", answer: false}
            ],
            config: {optionsType: "img-block"}
        };

        $scope.question8 = {
            type: "qt-open-question",
            statement: "How many hours of sleep you get per day?",
            answer : {value: "",label: "Type your hours"},
            config: {
                optionsType: "textfield"
            }
        };

        $scope.question9 = {
            type: "qt-close-question",
            statement: "How do you usually sleep at night?",
            options: [
                {name: "Light", answer: false},
                {name: "Medium", answer: false},
                {name: "Deep", answer: false}
            ],
            config: {optionsType: "button"}
        };

        $scope.question11 = {
            type: "qt-close-question",
            statement: "When do you feel sore?",
            options: [
                {name: "0 - 12 hours after I perform exercise.", answer: false},
                {name: "12 - 24 hours after I perform exercise.", answer: false},
                {name: "24 - 48 hours after I perform exercise.", answer: false},
                {name: "48 - 72 hours after I perform exercise.", answer: false},
                {name: "I rarely ever get sore.", answer: false},
                {name: "I’ve never felt sore in my entire life.", answer: false}
            ],
            config: {optionsType: "radio"}
        };

        $scope.question12 = [
            {
                type: "qt-close-question",
                statement: "Do you keep track of your caloric intake?",
                options: [
                    {name: "Yes", answer: false},
                    {name: "No", answer: false},
                ],
                config: {optionsType: "button"}
            },
            {
                type: "qt-open-question",
                statement: "How many calories do you consume a day?",
                answer : {value: "", label: "Type your calories"},
                config: {
                    optionsType: "textfield"
                }
            }
        ];

        $scope.question15 = {
            type: "qt-close-question",
            statement: "How many meals are you willing to eat per day?",
            options: [
                {name: "1", answer: false},
                {name: "2", answer: false},
                {name: "3", answer: false},
                {name: "4", answer: false},
                {name: "5", answer: false},
                {name: "6", answer: false},
                {name: "7", answer: false},
                {name: "8", answer: false}
            ],
            config: {
                optionsType: "button",
                note: "You´ll still be eating the same amount of calories per day"
            }
        };

        $scope.question16 = [
            {
                type: "qt-close-question",
                statement: "Do you have any nutritional deficiency?",
                options: [
                    {name: "Yes", answer: false},
                    {name: "No", answer: false}
                ],
                config: {
                    optionsType: "button"
                }
            },
            {
                type: "qt-open-question",
                statement: "Please explain",
                answer: {value: "", label: "Write your answer here..."},
                config: {
                    optionsType: "textarea"
                }
            }
        ];

        $scope.questions = [
            {
                type: "qt-close-question",
                statement: "Do you lose your balance because of dizziness?",
                options: [
                    {name: "True", answer: false},
                    {name: "False", answer: false},
                    {name: "Nothing at all", answer: false}
                ],
                config: {optionsType: "button"}
            },
            {
                type: "qt-close-question",
                statement: "When do you feel sore?",
                options: [
                    {name: "0 - 12 hours after I perform exercise.", answer: false},
                    {name: "12 - 24 hours after I perform exercise.", answer: false},
                    {name: "24 - 48 hours after I perform exercise.", answer: false},
                    {name: "48 - 72 hours after I perform exercise.", answer: false},
                    {name: "I rarely ever get sore.", answer: false},
                    {name: "I’ve never felt sore in my entire life.", answer: false}
                ],
                config: {optionsType: "radio"}
            },
            /*{
                type: "qt-close-question",
                statement: {name: "Biceps", img_src: "http://localhost:8080/fitness/web/assets/img/Bicep.jpg"},
                options: [
                    {name : "Left", answer: false},
                    {name : "Right", answer: false}
                ],
                config: {statementType: "img-left"}
            },*/
            {
                type: "qt-multiple-selection", 
                statement: "What components of fitness are you most interested in training?", 
                options: [
                    {name: "Cardio. Train like a marathon runner.", answer: false},
                    {name: "Strength. Train like a strongman/power lifter.", answer: false},
                    {name: "Flexibility. Train like a yoga master.", answer: false},
                    {name: "Aesthetics. Train like a body builder.", answer: false},
                    {name: "Sports Specific Training. Train like a sports athelete.", answer: false},
                    {name: "Injury Prevention. Train to conserve yourself.", answer: false}                    
                ], 
                config: {optionsType: "checkbox"}
            },
            {
                type: "qt-multiple-selection", 
                statement: "Where would you be willing to train?", 
                options: [
                    {name: "Park", img_src: "http://localhost:8080/fitness/web/assets/img/park.jpg", answer: false},
                    {name: "Home", img_src: "http://localhost:8080/fitness/web/assets/img/home.jpg", answer: false},
                    {name: "Gym", img_src: "http://localhost:8080/fitness/web/assets/img/gym.jpg", answer: false}                    
                ], 
                config: {optionsType: "img-block"}
            },            
            {
                type: "qt-open-question", 
                statement: "How many hours of sleep you get per day?",            
                answer : "",
                config: {
                    optionsType: "textfield",
                    label: "Type your hours"
                }
            },
            {
                type: "qt-open-question", 
                statement: "How many hours of sleep you get per day?",            
                answer : {value: "", label: "Type your ours"},
                config: {
                    optionsType: "textfield",
                    align: "left"
                }
            },            
            {
                type: "qt-open-question", 
                statement: "Please explain",                
                answer : {value: "", label: "Meassure"},
                config: {
                    optionsType: "textarea"
                }
            },   
            {
                type: "qt-open-question", 
                statement: "Neck",                
                answer : {value: "", label: "Meassure"},
                config: {
                    optionsType: "img-left",
                    img_src: "http://localhost:8080/fitness/web/assets/img/Neck.jpg"
                }
            },   
            {
                type: "qt-open-question", 
                statement: "Bicep",
                answer : [{value: "", label: "Left"}, {value: "", label: "Right"}],
                config: {
                    optionsType: "img-left",
                    img_src: "http://localhost:8080/fitness/web/assets/img/Bicep.jpg"
                }
            }
        ];
    });