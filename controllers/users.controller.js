import { getDB } from '../config/db.js';

export const saveUser = async (req, res) => {
  const user = req.body;
  const db = getDB();
  const users = db.collection('users');

  const existingUser = await users.findOne({ email: user.email });
  if (existingUser) return res.send({ message: 'User already exists' });

  const result = await users.insertOne({
    ...user,
    role: 'Student'
  });

  res.send(result);
};

export const getUserRole = async (req, res) => {
  const email = req.params.email;
  const db = getDB();
  const user = await db.collection('users').findOne({ email });
  res.send({ role: user?.role });
};

export const makeAdmin = async (req, res) => {
  const email = req.params.email;
  const db = getDB();

  const result = await db.collection('users').updateOne(
    { email },
    { $set: { role: 'Admin' } }
  );

  res.send(result);
};
