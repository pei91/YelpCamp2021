import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { creatCampground, updateCampground } from "../../actions/Campgrounds";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    description: "",
    price: 0,
    location: "",
    selectedFile: "",
  });
  const campground = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (campground) setPostData(campground);
  }, [campground]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateCampground(currentId, postData));
    } else {
      dispatch(creatCampground(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      description: "",
      price: 0,
      location: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Campground
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(event) =>
            setPostData({ ...postData, creator: event.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(event) =>
            setPostData({ ...postData, title: event.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Description"
          fullWidth
          value={postData.description}
          onChange={(event) =>
            setPostData({ ...postData, description: event.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Location"
          fullWidth
          value={postData.location}
          onChange={(event) =>
            setPostData({ ...postData, location: event.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Price"
          fullWidth
          value={postData.price}
          onChange={(event) =>
            setPostData({ ...postData, price: event.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
