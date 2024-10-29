export const orderData = [
    {
        orderId: 'ORD001',
        orderDate: '2024-10-29',
        status: 'Delivered',
        products: [
            {
                id: 1,
                name: 'Product 1',
                image: '/img/product1.jpg',
                price: 2999000,
                quantity: 1,
            },
            {
                id: 2,
                name: 'Product 2',
                image: '/img/product2.jpg',
                price: 1999000,
                quantity: 2,
            }
        ],
        total: 6998000
    },
    {
        orderId: 'ORD002',
        orderDate: '2024-10-25',
        status: 'Cancelled',
        products: [
            {
                id: 3,
                name: 'Product 3',
                image: '/img/product3.jpg',
                price: 999000,
                quantity: 1,
            }
        ],
        total: 999000
    }
];
