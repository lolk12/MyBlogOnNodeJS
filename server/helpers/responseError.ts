import { Response } from 'express';


type TResponseErrorText = {
  res: Response;
  text: string;
  status: number;
}

export const responseErrorText = ({ res, text, status = 400 }: TResponseErrorText) => {
  res.status(status).send(text);
};