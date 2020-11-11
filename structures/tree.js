const tree = [
    {
        label: 'A', 
        num: 1, 
        children: [
        {
            label: 'A-A',
            num: 1,
            children: [
                { 
                    label: 'A-A-A', 
                    num: 1, 
                    children: [
                        {label: 'A-A-A-A', num:1, children: [
                            {label: 'A-A-A-A-A', num:1},
                            {label: 'A-A-A-A-A', num:2},
                            {label: 'A-A-A-A-A', num:3}
                        ]}
                    ]
                },
                {
                    label: 'A-A-A',
                    num: 2
                }
            ]
        }, {
            label: 'A-A',
            num: 2,
            children: [
                { label: 'A-A-A', num: 1},
                { label: 'level3', num: 2},
                { label: 'level3', num: 3}
            ]
        }
    ]},
    {label: 'B', num: 2},
    {label: 'C', num: 3},
    {label: 'D', num: 4},
];

module.exports = tree;