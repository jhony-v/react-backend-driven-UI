import server from "./server";


(async function(){
    const run = await server.listen(8000);
    console.log(run);
})();