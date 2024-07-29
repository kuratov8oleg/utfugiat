const Union = 'union';

// Example usage
console.log(Union); // Output: 'union'

// You can't reassign a constant
// Union = 'another value'; // This would throw an error

// Constants are block-scoped like variables declared with let or var
{
    const Union = 'scoped union';
    console.log(Union); // Output: 'scoped union'
}
console.log(Union); // Output: 'union' (outside the block)

// Constants cannot be redeclared
// const Union = 'new union'; // This would also throw an error
