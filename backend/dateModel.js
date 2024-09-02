import mongoose from "mongoose";

const trashDateSchema = mongoose.Schema({
  dateTime: {
    type: [String],
  }
});

const TrashDate = mongoose.model("TrashDate", trashDateSchema);

export default TrashDate;
