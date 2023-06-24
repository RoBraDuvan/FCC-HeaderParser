const express = require("express");
const { whoiam } = require("./whoami");

let app = express();
const PORT = process.env.PORT || 3000;

//El camino hacia el directorio de las vistas. Y el index.html.
const PATH = __dirname + "/views"+"/index.html";

//Para usar los archivos dentro de la carpeta public.
app.use(express.static("public"));

app.use("/api", whoiam);

//Primera página que responde al dominio principal.
app.get("/", (req, res)=>{
  res.sendFile(PATH);
});



app.listen(PORT, ()=>{
  console.log(`El servidor esta escuchando. PUERTO: ${PORT}`);
});