import asyncHandler from "express-async-handler";
import Playlist from "../models/Playlist";

// @desc    Create a playlist
// @route   POST /api/playlist
// @access  Private
const createPlaylist = asyncHandler(async (req, res) => {
  const { title, category } = req.body;
  const playlist = await Playlist.create({
    title,
    category,
    createdBy: req.user._id,
  });
  if (playlist) {
    res.status(201).json(playlist);
  } else {
    res.status(400);
    throw new Error("Invalid Playlist data");
  }
});

// @desc    Update an existing Playlist
// @route   PATCH /api/playlist/:id
// @access  Private
const updatePlaylist = asyncHandler(async (req, res) => {

  const playlist = await Playlist.findOneAndUpdate(
    { createdBy: req.user._id, _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );

  if (playlist) {
    res.json(playlist);
  } else {
    res.status(404);
    throw new Error("Playlist not found");
  }
});

// @desc    Get details for a single playlist
// @route   GET /api/playlist/:id
// @access  Private
const getPlaylistDetail = asyncHandler(async (req, res) => {
  const playlist = await Playlist.findOne({
    createdBy: req.user._id,
    _id: req.params.id,
  });

  if (playlist) {
    res.json(playlist);
  } else {
    res.status(404);
    throw new Error("Playlist not found");
  }
});

// @desc    Get all user playlists
// @route   PUT /api/playlist
// @access  Private
const getAllPlaylist = asyncHandler(async (req, res) => {
  const playlists = await Playlist.find({
    createdBy: req.user._id,
  });
  res.json(playlists);
});

// @desc    Delete user Playlist
// @route   DELETE /api/playlist/:id
// @access  Private
const deletePlaylist = asyncHandler(async (req, res) => {
  const isPlaylistDeleted = await Playlist.deleteOne(
    { createdBy: req.user._id, _id: req.params.id },
    {
      useFindAndModify: false,
    }
  );

  if (isPlaylistDeleted) {
    res.json({
      message: "Playlist deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Playlist not found");
  }
});

export { createPlaylist, updatePlaylist, deletePlaylist, getAllPlaylist, getPlaylistDetail };
