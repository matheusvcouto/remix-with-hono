// app/routes/api.$.ts

import { ActionFunction, json, LoaderFunction } from '@remix-run/node';
import { app } from '../../server/app'

export const loader: LoaderFunction = async ({ request }) => {
  console.log(request.url)
  return app.fetch(request)
}
export const action: ActionFunction = async ({ request }) => {
  console.log(request.url)
  return app.fetch(request)
}

