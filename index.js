const tree = require('./structures/tree');

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