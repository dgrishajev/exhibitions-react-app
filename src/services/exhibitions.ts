import { get } from './http'

const fields = ['id', 'title', 'is_featured', 'description', 'gallery_title', 'type']
const limit = 30

export const findAll = (page: number = 1) => get('/exhibitions', { fields, limit, page });
export const findByQuery = ({ q = '', page = 1 }) => get('/exhibitions/search', { fields, limit, q, page });
