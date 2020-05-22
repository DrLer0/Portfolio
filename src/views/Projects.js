import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Thumbnail from './components/thumbnail'; 

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

function Projects(props) {
    const classes = useStyles();
    const tempSummary="Doggo ipsum borkdrive pupperino clouds heckin good boys borking doggo shoob, shibe puggorino the neighborhood pupper. Ur givin me a spook heckin good boys and girls porgo wow very biscit doggorino, very hand that feed shibe heckin angery woofer shibe. ";
    const acBookSummary="Full-Stack, social web-app to connect people who play Nintendo's Animal Crossing New Horizons! People can connect online, chat, discuss strategies, trade items, and have fun! Built with React.js and built-in chatrooms, people can easily see information and talk to each other. Minimal fuss signing in with passport.js+bcrypt, and useful UI for viewing other people's information regarding the game!";
    const harryRPGSummary="Full-Stack Harry Potter-esque role playing game. Spells and enemies are pulled from data using Potter API. Front-end built with handlebars and JQuery, and back-end built with express, Sequelize, Passport.js, and Google OAuth.";
    const recipefinderSummary="Web app for people to search for food cravings and returns both recipes and restaurants nearby. Recipes are pulled from Spoonacular API and restaurants are pulled from Yelp API. If people choose recipes, they can view the recipe, instructions, and ingredients. Also, they can add ingredients to a shopping list for them to keep track of items they need.";
    const reactGoogleSummary="Search Google Books with just the title! Save your books to save for later, view their synopsis, or go view the book on Google Books by clicking on the title! Uses Google Books API to fetch book data, then the data is displayed on the web-app for users to view.";
    const spongebobMemorySummary="Test your memory by clicking on Spongebob themed icons. Using React.js to shuffle the icons and keep track of your score.";
    const newScraperSummary="Get fresh new news articles with a click of a button. Save them and create notes for yourself. Click the links to view the news articles on CNN.com. Web-app uses axios and cheerios to scrape CNN.com to quickly and easily display the articles on the web-app.";
    const burgerSummary="Full stack web application to add various burgers to a database and eating them as you see fit. Eaten burgers are recorded in a list and you can continue adding more burgers.";
    const friendFinderSummary="Questionnaire for finding your new best friend. Answer the qeustions, and the web-app will calculate who will be your new friend. Mobile responsive layout allows you to find friends easily from your phone!";
    const BmazonSummary="Command line app to manage your store as a manager, purchase items as a customer, or supervise your stores as a supervisor. Uses inquirer for an interactive command line interface and cli-table for displaying data in nice and neat tables.";
    const spotifySongSummary="Command line app to utilize npm APIs and expand on what I learned from class and demonstrate how to install npm API and take user input from the command line. Use the command line to search for upcomming concerst based on the artist you search for, search spotify for the song details, search movies for information about any movie, and create a list of commands to run at the same time.";
    const RPSsummary="Create a room to play rock paper scissors with a friend online. Give them the room code! Select rock, paper, or scissors and watch your wins grow! Chat with your oppenent using the chat box for fun and friendly banter!";
    const FruitGifsSummary="Find the perfect gif to use for your texts, websites, or just for fun! The widget utilizes the GIPHY API which has a wide collection of GIFs. Just create a button by inputting a topic, and a new button will appear. Clicking it will bring up gifs about the topic you typed in. Pressing it more will get more gifs!";
    const pokemonTriviaSummary="Pokemon Trivia Game! Test your knowledge on all things Pokemone! Answer all 10 and name yourself a Pokemon Master!";
    const crystalSummary="Web game that challenges your memory and math skills. Each crystal will randomly be set to certai points. Don't go over the target or you lose!";
    const hangmanSummary="A Christmas Themed word guessing game! You have 10 guesses for each word. Guess them right and a song will play for you! The game resets if you guess the word incorrectly. Find out the words and hear the hidden music!";
    const images = [
        { src: require("../images/ac-book.png"), title: "Animal Crossing Book",summary:acBookSummary, technology:"React.js, React-Redux, Material-UI, Stream Chat App, Cloudinary, Passport.js, Bcrypt, MongoDB, Mongoose, Express, Axios", git:(<a href="https://github.com/DrLer0/Project3">To Github</a>), demo:(<a href="https://ac-book.herokuapp.com/">To Demo</a>)
        },
        { src: require("../images/harrypotterrpg.png"), title: "HarryPotterRpg",        summary:harryRPGSummary, technology:"Handlebars, jQuery, Sequelize ORM, Passport.js, Google OAuth, Express, Potter API", git:(<a href="https://github.com/K8F/project-2">To Github</a>), demo:(<a href="https://guarded-harbor-00220.herokuapp.com/">To Demo</a>)},
        { src: require("../images/RecipesFinder.png"), title: "RecipesFinder",
        summary:recipefinderSummary,technology:"Spoonacular API, Yelp API, jQuery, parallax, AJAX", git:(<a href="https://github.com/DrLer0/Unit8-Project1">To Github</a>), demo:(<a href="https://drler0.github.io/Unit8-Project1/">To Demo</a>)},
        { src: require("../images/reactGoogle.png"), title: "ReactGoogle",
        summary:reactGoogleSummary,technology:"React.js, Express, Mongoose, react-router-dom", git:(<a href="https://github.com/DrLer0/GoogleSearchBooks">To Github</a>), demo:(<a href="https://hidden-oasis-99391.herokuapp.com/">To Demo</a>) },
        { src: require("../images/spongebobMemoryGame.jpg"), title: "SpongebobMemoryGame",
        summary:spongebobMemorySummary,technology:"React.js, jQuery,", git:(<a href="https://github.com/DrLer0/MemoryGame">To Github</a>), demo:(<a href="https://drler0.github.io/MemoryGame/">To Demo</a>) },
        { src: require("../images/newsprint.jpg"), title: "Newsprint",
        summary:newScraperSummary,technology:"Node.js, npm, express, handlebars, mongoose, morgan, cheerio, axios, MongoDB", git:(<a href="">To Github</a>), demo:(<a href="">To Demo</a>) },
        { src: require("../images/burger.png"), title: "Burgers", summary:burgerSummary,technology:"Express, Handlebars, MySQL, AJAX", git:(<a href="https://github.com/DrLer0/Burgers">To Github</a>), demo:(<a href="https://calm-journey-75326.herokuapp.com/">To Demo</a>)},
        { src: require("../images/friendfinder.png"), title: "FriendFinder",
        summary:friendFinderSummary,technology:"Bulma, express, Node.js, npm", git:(<a href="https://github.com/DrLer0/FriendFinder">To Github</a>), demo:(<a href="https://cryptic-beach-68276.herokuapp.com/">To Demo</a>) },
        { src: require("../images/bmazon.png"), title: "Bmazon", summary:BmazonSummary,technology:"MySQL, Node.js, npm, inquirer, cli-table", git:(<a href="https://github.com/DrLer0/b-mazon">To Github</a>), demo:(<a href="https://github.com/DrLer0/b-mazon">Demo in README.md</a>)
        },
        { src: require("../images/spotify-this-song.png"), title: "spotify-this-song",
        summary:spotifySongSummary, technology:"Node.js, npm, axios, Moment, fs, DotEnv, OMDB API, BandsinTown API", git:(<a href="https://github.com/DrLer0/liri-node-app">To Github</a>), demo:(<a href="https://github.com/DrLer0/liri-node-app">To Demo</a>) },
        { src: require("../images/rock.png"), title: "RPS",
        summary:RPSsummary,technology:"HTML, CSS, Javascript, Google Firebase, jQuery, Bootstrap", git:(<a href="https://github.com/DrLer0/RPS-Multiplayer">To Github</a>), demo:(<a href="https://drler0.github.io/RPS-Multiplayer/">To Demo</a>) },
        { src: require("../images/FruitGifs.png"), title: "FruitGifs",
        summary:FruitGifsSummary,technology:"HTML, CSS, Javascript, AJAX, jQuery, Bootstrap", git:(<a href="https://github.com/DrLer0/GIF-Widget">To Github</a>), demo:(<a href="https://drler0.github.io/GIF-Widget/">To Demo</a>) },
        { src: require("../images/Trivia.png"), title: "Trivia",
        summary:pokemonTriviaSummary,technology:"HTML, CSS, Javascript", git:(<a href="https://github.com/DrLer0/TriviaGame">To Github</a>), demo:(<a href="https://drler0.github.io/TriviaGame/">To Demo</a>) },
        { src: require("../images/Crystals.png"), title: "Crystals Game",
        summary:crystalSummary,technology:"HTML, CSS, Javascript", git:(<a href="https://github.com/DrLer0/Unit-4-Game">To Github</a>), demo:(<a href="https://drler0.github.io/Unit-4-Game/">To Demo</a>) },
        { src: require("../images/Hangman.png"), title: "Hangman",
        summary:hangmanSummary,technology:"HTML, CSS, Javascript", git:(<a href="https://github.com/DrLer0/Word-Guess-Game">To Github</a>), demo:(<a href="https://drler0.github.io/Word-Guess-Game/">To Demo</a>) },
    ];
      
    console.log(images);
  return (
    <div>
      <h1>Projects</h1>
      <div className={classes.root}>
      {images.map(img => (
        <Thumbnail
        image={img.src}
        title={img.title}
        summary={img.summary}
        technology={img.technology}
        githubLink={img.git}
        demoLink={img.demo}
      />
      ))}
      </div>
      </div>
  )
}
 
export default Projects;