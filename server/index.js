import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 8081;

app.use(cors());

app.get('/api/auth/callback', (req, res) => {
  const code = req.query.code;
  console.log('Código recebido do Google:', code);

  // Aqui você pode trocar o code por tokens se quiser

  res.send('Login com Google bem-sucedido. Pode voltar ao app.');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});