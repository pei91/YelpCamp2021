import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  LIKE,
} from "../constants/actionTypes.js";
import * as api from "../api";

// Action Creators

export const getCampgrounds = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const creatCampground = (Campground) => async (dispatch) => {
  try {
    const { data } = await api.createCampground(Campground);
    console.log(Campground);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateCampground = (id, Campground) => async (dispatch) => {
  try {
    // api returned updated campground data
    const { data } = await api.updateCampground(id, Campground);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCampground = (id) => async (dispatch) => {
  try {
    await api.deleteCampground(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeCampground = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeCampground(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
