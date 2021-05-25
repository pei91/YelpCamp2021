import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import ThumbupAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";

import { likeCampground, deleteCampground } from "../../../actions/Campgrounds";

const Campground = ({ campground, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={campground.selectedFile}
        title={campground.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{campground.creator}</Typography>
        <Typography variant="body2">
          {moment(campground.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(campground._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {campground.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {campground.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likeCampground(campground._id))}
        >
          <ThumbupAltIcon fontSize="small" />
          &nbsp; Like &nbsp;{campground.likeCount}
        </Button>

        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteCampground(campground._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Campground;
