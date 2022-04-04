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
        description: 'A nice Trivia game. You can create your own game. You can save it privately or public it. You can also play a live game.',
        langs: ["React", "NodeJs", "MongoDB"],
        viewLink: 'https://mytriviali.herokuapp.com/',
        gitLink: 'https://github.com/meir-shtiglitz/trivia'
    },
    {
        name: 'Newsletter Sistem',
        img: nlImg,
        description: 'This is a platform / site to creat and manage newsletter forms. Anyone can sign up, enter the form details, choose the design and start.',
        langs: ["React", "Redux", "NodeJs", "MongoDB"],
        viewLink: 'https://newsletter-services.herokuapp.com',
        gitLink: 'https://github.com/meir-shtiglitz/newsletters'
    },
    {
        name: 'PlayListen',
        img: playImg,
        description: 'Create and listen to your favorite playlists.',
        langs: ["Angular", "NodeJs", "MongoDB"],
        viewLink: 'https://play-listen.herokuapp.com',
        gitLink: 'https://github.com/meir-shtiglitz/playlist'
    },
    {
        name: 'Light Fight Night',
        img: nflImg,
        description: 'A cool game, easier to build than to win...',
        langs: ["React"],
        viewLink: 'https://preactics.herokuapp.com/lights',
        gitLink: 'https://github.com/meir-shtiglitz/night-to-light'
    },
    {
        name: 'Hello Meir',
        img: hmImg,
        description: 'My portfolio website',
        langs: ["React"],
        viewLink: '',
        gitLink: 'https://github.com/meir-shtiglitz/portfolio'
    },
    {
        name: 'Pais',
        img: paisImg,
        description: 'The classic and common game with my personal twist.',
        langs: ["php", "mysql", "jQuery"],
        viewLink: 'https://hellomeir.com/pais/',
        gitLink: 'https://github.com/meir-shtiglitz/pais'
    },
    {
        name: 'Log Umagog',
        img: guessImg,
        description: 'A classic game that I took a few steps forward.',
        langs: ["php", "jQuery"],
        viewLink: 'https://hellomeir.com/guess/',
        gitLink: ''
    },
    {
        name: 'Var Game',
        img: varImg,
        description: 'The classic war game in cards, with nice touches and animations.',
        langs: ["jQuery"],
        viewLink: 'https://hellomeir.com/var/',
        gitLink: 'https://github.com/meir-shtiglitz/var-game'
    },
]