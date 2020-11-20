import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// ACTIONS
import { getPosts } from './actions/posts';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

// == IMPORT Styles
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/img.png';
/* import './App.css'; */
import useStyles from './styles';

const App = () => {

  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();

  // react-redux hook
  const dispatch = useDispatch();

  // Dispatching les actions
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
