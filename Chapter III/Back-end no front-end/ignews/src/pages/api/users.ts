import {NextApiRequest, NextApiResponse} from 'next';

// JWT (Storage)
// Next Auth (Social) usaremos esse
// Congnito, Auth8

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Raul' },
        { id: 2, name: 'Ruan' },
        { id: 3, name: 'Ana' },
    ]

    return response.json(users)
}