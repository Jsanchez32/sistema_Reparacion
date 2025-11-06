const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuariosRoutes');
const ordenesRoutes = require('./routes/ordenesRoutes');

const app = express();
app.use(express.json());
app.use(cors()); 

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/ordenes', ordenesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Servidor TallerTech corriendo en puerto ${PORT}`));
