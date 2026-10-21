import express from 'express';
import { ClassTemplateModel } from '../models/classTemplateSchema.js';
export const classRouter = express.Router();
classRouter.get('/', async (req, res, next) => {
  try {
    const classes = await ClassTemplateModel.find().select('key displayName advancementName raceGroup raceScope roleNotes weaponNotes attributeNotes baseStats status selectable').sort({ key: 1 }).lean();
    res.json({ classes });
  } catch (error) { next(error); }
});
