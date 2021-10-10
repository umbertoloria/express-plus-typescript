import UserController from './controller/user-controller';
import app from './serverness/init';

app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.get('/check', async (req, res) => {
  const users = await UserController.findAll();
  users.forEach((user) => {
    console.log(user.name);
  });
  res.json(users);
});
