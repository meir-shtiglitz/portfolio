import nlImg from "../assets/images/nl.png";
import nflImg from "../assets/images/nfl.png";
import triviaImg from "../assets/images/trivia.png";
import hmImg from "../assets/images/hm.png";
import paisImg from "../assets/images/pais.png";
import guessImg from "../assets/images/guess.png";
import varImg from "../assets/images/var.png";
import playImg from "../assets/images/play.png";

export const allProjects = [
    {
        name: 'Trivia',
        img: triviaImg,
        description: 'anice trivia game that you can creatr your game eithr and public it or save it privately it is can be a live game too',
        langs: ["React", "NodeJs", "MongoDB"],
        viewLink: 'https://mytriviali.herokuapp.com/',
        gitLink: ''
    },
    {
        name: 'Newsletter Sistem',
        img: nlImg,
        description: 'This is a platform / site for creating and managing newsletter forms, Anyone can sign up enter the form details, choose the design and start',
        langs: ["React", "Redux", "NodeJs", "MongoDB"],
        viewLink: 'https://newsletter-services.herokuapp.com',
        gitLink: ''
    },
    {
        name: 'playlisten',
        img: playImg,
        description: 'create and listen to your lovely playlists',
        langs: ["Angular", "NodeJs", "MongoDB"],
        viewLink: 'https://play-listen.herokuapp.com',
        gitLink: 'https://github.com/meir-shtiglitz/playlist'
    },
    {
        name: 'Light Fight Night',
        img: nflImg,
        description: 'a cool game that it easier to build it than to finish it',
        langs: ["React"],
        viewLink: 'https://preactics.herokuapp.com/lights',
        gitLink: ''
    },
    {
        name: 'Hello Meir',
        img: hmImg,
        description: 'my portfolio website',
        langs: ["React"],
        viewLink: '',
        gitLink: ''
    },
    {
        name: 'Pais',
        img: paisImg,
        description: 'a classic game with a nice twist, includes login, registration, front and back hands, mail sending...',
        langs: ["php", "mysql", "jQuery"],
        viewLink: 'https://hellomeir.com/pais/',
        gitLink: ''
    },
    {
        name: 'Log Umagog',
        img: guessImg,
        description: 'A classic game taken a few steps forward',
        langs: ["php", "jQuery"],
        viewLink: 'https://hellomeir.com/guess/',
        gitLink: ''
    },
    {
        name: 'Var Game',
        img: varImg,
        description: 'The classic war game in cards with nice touches and animations, to finish the game please choose at the beginning to put 50 (for example) cards in a war case',
        langs: ["jQuery"],
        viewLink: 'https://hellomeir.com/var/',
        gitLink: ''
    },
]