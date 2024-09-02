import TrashDate from "./dateModel.js";

export const addDate = async (req, res) => {
  try {

    let trashDate = await TrashDate.findOne();

    const now = new Date();

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Manila",
      ...options,
    }).format(now);

    if (!trashDate) {
      trashDate = new TrashDate({
        dateTime: formattedDate
      });
      await trashDate.save();
    } else {
      trashDate.dateTime.push(formattedDate);
      await trashDate.save();
    }

    return res.status(200).json({
      message: `Successfully Added Time ${trashDate}`,
    });
  } catch (error) {
    return res.status(400).json({ error: `Error in Add Date Controller error` });
  }
};

export const home = async (req, res) => {
  try {
    let trashDate = await TrashDate.findOne()
    return res.status(200).json({
      dateTime: trashDate.dateTime,
    });
  } catch (error) {
    return res.status(400).json({ error: `Error in View Controller ${error}` });
  }
};


