import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: 'center'
  },
  text: {
      '& > *':{
          margin: theme.spacing(2),
          width: theme.spacing(50),
          height: "fit-content"
      }
  },
  center: {
      alignSelf: "center",
      '& > *':{
        margin: theme.spacing(2),
        width: theme.spacing(50),
        height: "fit-content"
    }
  }
}));

export default function About() {
  const classes = useStyles();
  const aboutMe=(
    <Typography variant="body1" gutterBottom>Full-Stack Web Developer utilizing over five years of programming to create memorable and reliable websites and apps. Recently earned a certificate in Full Stack Development from University of California Berkeley, and graduated from San Jose State University with a Bachelors of Science in Computer Engineering. Acquired experience in  C, C++, JavaScript, CSS, jQuery, Node.js, and Python. Favorite project was working on a career fair assistant app with three other developers. Developed an iPhone app in Swift which let recruiters scan QR codes of student’s resumes to look at and save for themselves, and allowed for more time for students and recruiters to talk face to face. Eager to work with a creative and innovative team to create amazing websites and apps.</Typography>
  )
  const aboutMe2=(
    <Typography variant="body1" gutterBottom>I was born in San Jose, California, and I graduated from San Jose State University with a BS in Computer Engineering in 2018. My hobbies are cooking, baking, photography, 3D printing, playing video games, and travelling. My interests include making things with my hands, learning about different things, and having fun.</Typography>
  )
  const aboutMe3=(<Typography variant="body1" gutterBottom>With natural curiosity, I am driven to satisfy my desire to learn about and improve lives through technology; specifically, through embedded systems and computer architecture. I believe it is important to push boundaries and ideas to advance research and products to be the best that each one can become. </Typography>)

  return (
    <div className={classes.root}>
      <Paper elevation={20}>
          {aboutMe}
      </Paper>
      <Paper elevation={3} className={classes.text}>
          {aboutMe2}
      </Paper>
      <Paper elevation={3} className={classes.text}>
          {aboutMe3}
      </Paper>
      <Paper elevation={1} className={classes.text}>
      <Typography>
          Proficient Skills:<br></br>
          C<br></br>C++<br></br>Python<br></br>HTML,CSS<br></br>Javascript
        </Typography>
      </Paper>
    </div>
  );
}