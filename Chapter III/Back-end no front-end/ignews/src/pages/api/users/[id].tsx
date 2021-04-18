import {NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const id = request.body;
    
    const users = [
        { id: 1, name: 'Raul' },
        { id: 2, name: 'Ruan' },
        { id: 3, name: 'Ana' },
    ]

    return response.json(users)
}