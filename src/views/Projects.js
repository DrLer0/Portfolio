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
    const images = [
        { src: require("../images/bmazon.png"), title: "Bmazon",
            summary:"",technology:"", git:"", demo:""
        },
        { src: require("../images/burger.png"), title: "Burgers", 
            summary:"",technology:"", git:"", demo:""},
        { src: require("../images/Crystals.png"), title: "Crystals Game",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/friendfinder.png"), title: "FriendFinder",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/FruitGifs.png"), title: "FruitGifs",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/Hangman.png"), title: "Hangman",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/harrypotterrpg.png"), title: "HarryPotterRpg",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/newsprint.jpg"), title: "Newsprint",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/reactGoogle.png"), title: "ReactGoogle",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/RecipesFinder.png"), title: "RecipesFinder",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/rock.png"), title: "RPS",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/spongebobMemoryGame.jpg"), title: "SpongebobMemoryGame",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/spotify-this-song.png"), title: "spotify-this-song",
        summary:"",technology:"", git:"", demo:"" },
        { src: require("../images/Trivia.png"), title: "Trivia",
        summary:"",technology:"", git:"", demo:"" },
    ];
      
    console.log(images);
  return (
    <div>
      <h1>Projects</h1>
      <div className={classes.root}>
      {images.map(img => (
        <Thumbnail
        link=""
        image={img.src}
        title={img.title}
        summary={tempSummary}
        technology="AJAX, React.js, Node"
        githubLink="https://github.com/DrLer0/Portfolio"
        demoLink="https://github.com/DrLer0/Portfolio"
      />
      ))}
      </div>
      </div>
  )
}
 
export default Projects;