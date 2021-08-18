///question :8

const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

const mergeCopy = Object.assign(name,details);
console.log(mergeCopy);
