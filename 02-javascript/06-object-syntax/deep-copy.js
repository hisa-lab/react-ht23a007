const patty = {
    name: 'Patty Rabbit',
    email: 'patty@maple.town',
    address: { town: 'Maple Town' },
    id: '1',
};

const rolley = JSON.parse(JSON.stringify(patty));
rolley.name = 'Rolley Cocker';
rolley.email = 'rolley@palm.town';
rolley.address.town = 'Palm Town';
rolley.id='2';

console.log(patty);