import { getDB } from '../config/db.js';

export const getScholarships = async (req, res) => {
  const scholarships = await getDB().collection('scholarships').find().toArray();
  res.json(scholarships);
};

export const getScholarshipById = async (req, res) => {
  const scholarship = await getDB()
    .collection('scholarships')
    .findOne({ id: parseInt(req.params.id) });

  res.json(scholarship);
};
