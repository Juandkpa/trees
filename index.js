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

const checkFn = (node, check) => {
    const { num, label } = node;
    if (label === check.label && num === check.num ) {        
        return { ...node, checked: true };
    } else {        
        return { ...node };
    }
};

const traverse = (node, check) => {
    const { children } = node;
    
    if (!children || !children.length) {
        return { ... checkFn(node, check) };
    }    

    return { ... checkFn(node, check), children: children.map((node) => traverse(node, check))};    
}

const full = () => {
    const check = { label: 'A-A-A-A-A', num: 2};
    return tree.map((node) => traverse(node, check));
}

const dfs = full();

console.log("tree", JSON.stringify(tree));
console.log("new one",JSON.stringify(dfs));