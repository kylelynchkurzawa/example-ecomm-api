const config = {
    users: {
        types: [
            {
                name: 'ADMIN',
                access_value: 1
            },
            {
                name: 'MANAGER',
                access_value: 2
            },
            {
                name: 'STAFF',
                access_value: 3,
            },
            {
                name: 'USER',
                access_value: 4
            },
        ]
    },
    products: {
        vat: {
            included: true,
            types: [
                {
                    name: 'FIXED',
                    amount: 105
                },
                {
                    name: 'PERCENTAGE',
                    amount: 12.5
                }
            ],
        },
        sizes: {
            enabled: true,
            types: ['NUMERIC', 'CHARACTER'],
            values: {
                numeric: {
                    min: 0,
                    max: 99
                },
                character: [
                    {
                        alias: 'XXX-S',
                        value: 1
                    },
                    {
                        alias: 'XX-S',
                        value: 2
                    },
                    {
                        alias: 'X-S',
                        value: 3
                    },
                    {
                        alias: 'S',
                        value: 4
                    },
                    {
                        alias: 'M',
                        value: 5
                    },
                    {
                        alias: 'L',
                        value: 6
                    },
                    {
                        alias: 'X-L',
                        value: 7
                    },
                    {
                        alias: 'XX-L',
                        value: 8
                    },
                    {
                        alias: 'XXX-L',
                        value: 9
                    }
                ]
            }
        },
        gender: {
            enabled: false,
            types: [
                {
                    name: 'ALL',
                    value: 1
                },
                {
                    name: 'FEMALE',
                    value: 2
                },
                {
                    name: 'MALE',
                    value: 3
                }
            ],
        }
    },
    statuses: [
        {
            name: 'LIVE',
            is_purchasable: true,
            is_editable: true
        },
        {
            name: 'DRAFT',
            is_purchasable: false,
            is_editable: true
        },
        {
            name: 'RETIRED',
            is_purchasable: false,
            is_editable: false
        },

    ],
};

module.exports = config;
