var QRCode = require("qrcode");

QRCode.toDataURL("https://www.wotfing.com/00000003", function (err, code) {
  console.log(code);
});

QRCode.toFile('pqr00000003.png', 'https://www.wotfing.com/00000003', {
  color: {
    dark: '#000000ff',
    light: '#0000' // Transparent background
  }
}, function (err) {
  if (err) throw err
  console.log('done')
})