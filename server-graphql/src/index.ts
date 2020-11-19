import server from "./server";
import "./database/mongoDB";

(async function(){
    const run = await server.listen(8000);
})();