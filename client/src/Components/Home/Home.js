import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Form from "../Forms/Form";
import Campgrounds from "../Campgrounds/Campgrounds";
import { useDispatch } from "react-redux";
import { getCampgrounds } from "../../actions/Campgrounds";

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampgrounds());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Campgrounds setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
