import { Client } from 'faunadb';

export const fauna = new Client({
    secret: process.env.FAUANADB_KEY
})