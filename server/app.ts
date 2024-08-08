import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { z } from 'zod';

export const app = new Hono().basePath('/api')
  .use(logger((s) => console.log(s)))
  .get('/', c => c.json('dasa'))
  .post('/test',zValidator('json', z.object({
    name: z.string()
  })) ,async c => {
    try {
      const body = c.req.valid('json')
      return c.json({
        user: {
          name: body.name
        }
      })
    } catch (error) {
      return c.json({ error: 'sem dados enviados' }, 400)
    }
  })
  .get('/test', c => c.json('cadsdas'))

