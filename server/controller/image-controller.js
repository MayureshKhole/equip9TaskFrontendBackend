import File from "../models/file.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const uploadImage = async (request, response) => {
  try {
    console.log("request.file.location", request.file.location);
    response.status(200).json({ path: request.file.location });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
};

export const getImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);

    file.downloadCount++;

    await file.save();

    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ msg: error.message });
  }
};
