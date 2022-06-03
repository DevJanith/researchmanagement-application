const userData =
    [
        {
            "id": 1,
            "name": "trader user",
            "email": "trader@gmail.com",
            "password": "$2a$12$FLQNIqIOwa8HFRrk7N8gkO96sK3G/QnEFY1X5gDrp141ljr.RPgo2",
            "type": "trader",
            "createdAt": "2022-05-19T03:23:33.000Z",
            "updatedAt": "2022-05-19T03:23:33.000Z",
            "traderId": 1,
            "buyerId": null
        },
        {
            "id": 2,
            "name": "buyer user",
            "email": "buyer@gmail.com",
            "password": "$2a$12$LVkrpTNi9rwl4N.5lwWsmO2tGekulAZTzrrkWNmDH54h0BzWPRdXS",
            "type": "buyer",
            "createdAt": "2022-05-19T03:23:44.000Z",
            "updatedAt": "2022-05-19T03:23:44.000Z",
            "traderId": null,
            "buyerId": 1
        },
        {
            "id": 3,
            "name": "ridma dilshan",
            "email": "ridma@gmail.com",
            "password": "$2a$12$hAV31GmlxqxnH8V.z6BLEOwgAIlsaJFZR0hbz6MsPqLFOS/vjbay2",
            "type": "buyer",
            "createdAt": "2022-05-19T15:02:58.000Z",
            "updatedAt": "2022-05-19T15:02:58.000Z",
            "traderId": null,
            "buyerId": 2
        },
        {
            "id": 4,
            "name": "admin user",
            "email": "admin@gmail.com",
            "password": "$2a$12$LfuoVSNzxWYF7vLaTMdda.VfYQPXWDaUkzKvh62X7stxrteCGpXIm",
            "type": "admin",
            "createdAt": "2022-05-28T17:35:10.000Z",
            "updatedAt": "2022-05-28T17:35:10.000Z",
            "traderId": 2,
            "buyerId": null
        }
    ]


export default userData;