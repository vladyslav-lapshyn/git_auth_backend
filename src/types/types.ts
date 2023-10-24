'use strict';

import { Request, Response } from 'express';

export type Controller = (req: Request, res: Response, next?: any) => void;
