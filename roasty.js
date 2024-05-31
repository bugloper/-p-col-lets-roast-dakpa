const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use('/roassets', express.static(path.join(__dirname, 'roassets')));

const htmlFilePath = path.join(__dirname, 'roadex.html');
const imagePath = '/roassets/roasted.dakpa.png';

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Roast Dakpa</title>
</head>
<body>
  <h1>Dakpa, you have been roasted, not rusted!💥</h1>
  <img src="${imagePath}" alt="Roast Dakpa">
  <h1>Also, you should not probably roast Ruby. You are hurting your roomate!😀</h1>
</body>
</html>
`;

fs.writeFileSync(htmlFilePath, htmlContent);

app.get('/', (req, res) => {
  res.sendFile(htmlFilePath);
});

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  
  const open = await import('open');
  open.default(`http://localhost:${port}`);
});
