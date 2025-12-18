import { getDB } from '../config/db.js';

export const applyScholarship = async (req, res) => {
  const application = req.body;
  const result = await getDB().collection('applications').insertOne(application);
  res.json({ success: true, result });
};

export const getApplications = async (req, res) => {
  const apps = await getDB().collection('applications').find().toArray();
  res.json(apps);
};
