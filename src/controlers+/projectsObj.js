import nlImg from "../assets/images/nl.png";
import nflImg from "../assets/images/nfl.png";
import triviaImg from "../assets/images/trivia.png";
import hmImg from "../assets/images/hm.png";
import paisImg from "../assets/images/pais.png";
import guessImg from "../assets/images/guess.png";
import varImg from "../assets/images/var.png";
import playImg from "../assets/images/play.png";
import firemanImg from "../assets/images/fireman.png";
import betKnessetImg from "../assets/images/knesset.png";


export const allProjects = [
    
    {
        name: 'Fireman',
        img: firemanImg,
        description: "A magician's site, a real and cool website.",
        langs: ["React", "NodeJs", "MongoDB", "scss", "Cloud flare"],
        viewLink: 'http://3.209.209.134:3030/',
        gitLink: 'https://github.com/meir-shtiglitz/fireman'
    },
    {
        name: 'Trivia',
        img: triviaImg,
        description: 'Create your own Trivia games. save it privately or public it. You can also play a live game.',
        langs: ["React", "NodeJs", "MongoDB", "Socket.io"],
        viewLink: 'http://34.195.70.255:4040',
        gitLink: 'https://triviali.onrender.com/'
    },
    {
        name: 'Bet Knesset',
        img: betKnessetImg,
        description: 'A site for betting on the results of the Knesset elections.',
        langs: ["React", "NodeJs", "MongoDB", "scss"],
        viewLink: 'https://bet-knesset.onrender.com',
        gitLink: 'https://github.com/meir-shtiglitz/bet-knesset'
    },
    {
        name: 'Newsletter Sistem',
        img: nlImg,
        description: 'Create and manage your newsletter forms. choose the design and start.',
        langs: ["React", "Redux", "NodeJs", "MongoDB"],
        viewLink: 'http://3.95.155.158:5000',
        gitLink: 'https://newsletters-4nsi.onrender.com'
    },
    {
        name: 'PlayListen',
        img: playImg,
        description: 'Create and listen to your favorite playlists.',
        langs: ["Angular", "NodeJs", "MongoDB"],
        viewLink: 'https://playlist-jhn0.onrender.com',
        gitLink: 'https://github.com/meir-shtiglitz/playlist'
    },
    {
        name: 'Light Fight Night',
        img: nflImg,
        description: 'A cool game, easier to build than to win...',
        langs: ["React"],
        viewLink: 'https://main.d192ds7wn35907.amplifyapp.com',
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