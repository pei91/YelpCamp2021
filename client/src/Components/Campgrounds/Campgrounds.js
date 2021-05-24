import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Campground from "./Campground/Campground";
import useStyles from "./styles";

const Campgrounds = ({ setCurrentId }) => {
  const campgrounds = useSelector((state) => state.posts);
  const classes = useStyles();
  return !campgrounds.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {campgrounds.map((campground) => (
        <Grid key={campground._id} item xs={12} sm={6} md={6}>
          <Campground campground={campground} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Campgrounds;
