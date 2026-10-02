export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'image', title: 'Main Image', type: 'image' },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'stock', title: 'Stock', type: 'number' },
    { name: 'isNew', title: 'New Arrival?', type: 'boolean' },
    { name: 'trending', title: 'Trending?', type: 'boolean' },
    { name: 'originalPrice', title: 'Original Price (for Sale)', type: 'number' }
  ]
}
