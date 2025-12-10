module.exports = {
  launch: {
    headless: true, // o false si quieres ver el navegador
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  browserContext: 'default',
};