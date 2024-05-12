import express from 'express';
import cors from 'cors';
import './db/mongo-connect.js';
// import { authenticateToken } from './security/jwt_auth.js';

// Celest Abyss - User/Account
import { userRouter } from './routes/userRoutes.js';

// Celest Abyss - Data
import { itemRouter } from './routes/itemRoutes.js';
import { characterRouter } from './routes/characterRoutes.js';
import { skillController } from './controllers/skillController.js';
import { inventoryRouter } from './routes/inventoryRouter.js';

const app = express();

app.use(cors({
    credentials: true
}));
app.use(express.json({limit: '3MB'}));

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send('<h1>This is the Celest Abyss Backend!</h1>');
});

// Celest Abyss Game API´s
app.use('/user', /*userValidator,*/ userRouter)
app.use('/characters', /*authenticateToken,*/ characterRouter)

app.use('/skills', /*authenticateToken,*/ skillController)
app.use('/inventory', /*authenticateToken,*/ inventoryRouter)
app.use("/items", /*authenticateToken,*/  itemRouter)
app.use("/upgrade", /*authenticateToken,*/  upgradeControler)

app.use((req, res, next) => {
    res.status(404).json;
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});