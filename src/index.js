import {createConnection} from "./database/database.js"
import app from "./app.js"

createConnection();
app.listen(3000);
console.log('Server running on port 3000')