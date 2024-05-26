import { updateInventoryByLoot } from "../controllers/inventoryController"
import { buyController, sellController } from "../controllers/traderController"

export const traderRoute = express.Router()

traderRoute
    .get("/", buyController, updateInventoryByLoot)
    .post("/", sellController)