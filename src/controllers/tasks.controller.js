import { v4 } from "uuid";
import { getConnection } from "../database/database.js";

export const getTasks = (req, res) => {
  res.send("sending tasks");
};

export const createTasks = async (req, res) => {
  const newTask = {
    id: v4(),
    name: req.body.name,
    description: req.body.description,
  };
  try {
    const db = getConnection();
    const { tasks } = db.data;
    tasks.push(newTask);
    await db.write();
    res.json(newTask);
  } catch (error) {
     return res.status(500).send(error);
  }
};

export const getTask = (req, res) => {
  res.send("sending tasks");
};

export const updateTasks = (req, res) => {
  res.send("sending tasks");
};
export const deleteTasks = (req, res) => {
  res.send("sending tasks");
};

export const count = (req, res) => {
  res.send("sending tasks");
};
