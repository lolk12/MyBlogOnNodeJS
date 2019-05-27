import express from 'express';

import { serverConfig } from './config'
import { responseErrorText } from './helpers/responseError';

// Create a new express application instance
const app: express.Application = express();

type TMockData = {
  id: number
  title: string;
  description: string;
}

const mockData: TMockData[] = [
  {
    id: 1,
    title: 'Мой первый пост',
    description: 'Это первый пост который был оставлен здесь мной',
  },
  {
    id: 2,
    title: 'Мой первый пост',
    description: 'Это первый пост который был оставлен здесь мной',
  },
  {
    id: 3,
    title: 'Мой первый пост',
    description: 'Это первый пост который был оставлен здесь мной',
  },
  {
    id: 4,
    title: 'Мой первый пост',
    description: 'Это первый пост который был оставлен здесь мной',
  },
];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/posts', function (req, res) {
  res.send(mockData);
});



app.get('/post/:id', function (req, res) {
  const postId: number = Number(req.params.id);

  if(postId) {
    const foundPost = mockData.find(item => item.id === postId);
    if(!foundPost) responseErrorText({ res, text: 'Post not found', status: 403 });
    res.send(foundPost);
  } else {
    responseErrorText({ res, text: 'Post not found', status: 403 })
  }
});

app.listen(serverConfig.port, function () {
  console.log(`Example app listening on port ${serverConfig.port}!`);
});