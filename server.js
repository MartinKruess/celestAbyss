import express from 'express';
import cors from 'cors';
import './db/mongo-connect.js';
// import { authToken } from './security/jwt_auth.js';

// Celest Abyss - User/Account
import { userRouter } from './routes/userRoutes.js';
import {
  userValidation,
  userValidationOptions,
} from './validation/userValidation.js';

// Celest Abyss - Data
import { itemRouter } from './routes/itemRoutes.js';
import { characterRouter } from './routes/characterRoutes.js';
import { skillController } from './controllers/skillController.js';
import { inventoryRouter } from './routes/inventoryRouter.js';
import { upgradeController } from './controllers/upgradeController.js';
import { buyController, sellController } from './controllers/traderController.js';
import { updateInventoryByLoot } from './controllers/inventoryController.js';
import { creatureRouter } from './routes/creatureRoute.js';

console.clear();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// const PORT = process.env.PORT || 5500;
const PORT = 5600;

app.get('/', (req, res) => {
  res.send('<h1>This is the Celest Abyss Backend!</h1>');
});

// Account and Character Routes
app.use('/user', /*userValidationOptions, userValidation,*/ userRouter);
app.use('/characters', /*authToken,*/ characterRouter);

// Data Routes
app.use('/skills', /*authToken,*/ skillController);
app.use('/inventory', /*authToken,*/ inventoryRouter);
app.use('/items', /*authToken,*/ itemRouter);
app.use('/upgrade', /*authToken,*/ upgradeController);
app.use('/trader', /*authToken,*/ buyController, updateInventoryByLoot);
app.use('/creatures', /*authToken,*/ creatureRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
