/*const students = [
    { name: 'John', score: 75 },
    { name: 'Jane', score: 55 },
    { name: 'Jim', score: 85 },
    { name: 'Jack', score: 45 },
    { name: 'Jill', score: 95 },
  ];

const studentPass = students.map((student) => {
    return {
        name: student.name,
        score: student.score,
        pass: student.score >= 60 ? true : false,
    };
});

console.log(studentPass); 


const machines = [
    { name: 'Forklift 1', status: 'operational' },
    { name: 'Forklift 2', status: 'operational' },
    { name: 'Forklift 3', status: 'under maintenance' },
    { name: 'Forklift 4', status: 'operational' },
    { name: 'Forklift 5', status: 'under maintenance' },
]

const machineNeedService = machines.map((machine) => {
    return {
        name: machine.name,
        status: machine.status,
        needService: machine.status === 'under maintenance' ? true : false,
    };
});

console.log(machineNeedService);

const students = [
    { name: 'Alice', score: 88, age: 22 },
    { name: 'Bob', score: 88, age: 20 },
    { name: 'Charlie', score: 95, age: 23 },
    { name: 'Diana', score: 60, age: 21 },
    { name: 'Eve', score: 95, age: 22 }
  ];
  
 // First, sort by score in descending order.
// If two students have the same score, sort them by age in ascending order.

const sortedStudents = students.sort((a, b) => {
    if (b.score === a.score) {
        return a.age - b.age; // Sort by age in ascending order
    } else {
        return b.score - a.score; // Sort by score in descending order
    }
}
);

console.log(sortedStudents);  */

const customers = [
    { name: 'Lana', spent: 120, items: 7, member: true },
    { name: 'Mike', spent: 80, items: 4, member: false },
    { name: 'Sara', spent: 150, items: 6, member: true },
    { name: 'Tom', spent: 90, items: 5, member: false },
    { name: 'Emma', spent: 110, items: 10, member: false },
    { name: 'John', spent: 160, items: 3, member: true }
  ];

 /* const customerMember = customers.map((customer) => {
    return {
        name: customer.name,
        spent: customer.spent,
        items: customer.items,
        member: customer.member,
    };
}
);

console.log(customerMember); */

/* const customerTopMember = customers.sort(member, spent => {



    if (member === true) {
        return spent - member.spent; 
    } else {
        return member - spent; 
    }
}

)
console.log(customerTopMember); */

const customerTopMember = customers.sort((a, b) => {
    if (a.member === b.member) {
        return b.spent - a.spent; // Sort by spent in descending order
    } else {
        return a.member ? -1 : 1; // Sort members before non-members
    }
});
console.log(customerTopMember);

const customerTopMember2 = customers.map((customer) => {
    if (customer.member) {
        return {
            name: customer.name,
            spent: customer.spent,
            items: customer.items,
            member: customer.member,
        };
    }
}).filter((customer) => customer !== undefined);
console.log(customerTopMember2);

const customerMostItems = customers.sort((a, b) => {
    if (a.items === b.items) {
        return b.spent - a.spent; 
    } else {
        return b.items - a.items; 
    }
});
console.log(customerMostItems);



const clients = [
    { name: 'Hiroshi', country: 'Japan', trips: 4, spent: 2000, loyalty: true },
    { name: 'Anna', country: 'USA', trips: 1, spent: 800, loyalty: false },
    { name: 'Kenji', country: 'Japan', trips: 3, spent: 1500, loyalty: true },
    { name: 'Laura', country: 'Germany', trips: 2, spent: 1100, loyalty: false },
    { name: 'Carlos', country: 'Spain', trips: 5, spent: 2200, loyalty: false },
    { name: 'Mei', country: 'China', trips: 3, spent: 1300, loyalty: false },
    { name: 'Tom', country: 'Japan', trips: 2, spent: 950, loyalty: false },
    { name: 'Isla', country: 'UK', trips: 4, spent: 1700, loyalty: true }
  ];

  const clientMostValuable = clients.find((client) => {
    return client.spent >= 2000 && client.loyalty === true && client.country === 'Japan';
  });

    console.log(clientMostValuable);

const clients2 = clients.filter((client) => {
    return client.spent >= 1000 && client.trips >= 2 && client.loyalty !== true;
  });
  console.log(clients2);

const clientsSummary = clients2.map((client) => {
    return {
        name: client.name,
        country: client.country,
        label: client.trips >= 3 ? 'Frequent Flyer' : 'Explorer',
    };
  });
  console.log(clientsSummary);

  const clientsAlphabetical = clientsSummary.sort((a, b) => {
    return a.name === b.name ? 0 : a.name > b.name ? 1 : -1;
  });
  console.log(clientsAlphabetical);



  const guests = [
    { name: 'Emily', country: 'Canada', nights: 5, totalPaid: 1200, isVerified: true },
    { name: 'Raj', country: 'India', nights: 2, totalPaid: 450, isVerified: true },
    { name: 'Sophie', country: 'France', nights: 3, totalPaid: 800, isVerified: false },
    { name: 'Liam', country: 'Canada', nights: 4, totalPaid: 950, isVerified: true },
    { name: 'Noah', country: 'USA', nights: 1, totalPaid: 300, isVerified: false },
    { name: 'Ava', country: 'Canada', nights: 0, totalPaid: 0, isVerified: true },
    { name: 'Mia', country: 'Australia', nights: 4, totalPaid: 1300, isVerified: false },
    { name: 'Leo', country: 'Germany', nights: 5, totalPaid: 1000, isVerified: true },
    { name: 'Chloe', country: 'Brazil', nights: 6, totalPaid: 1100, isVerified: false },
    { name: 'Daniel', country: 'Spain', nights: 3, totalPaid: 600, isVerified: false },
    { name: 'Nina', country: 'Canada', nights: 4, totalPaid: 1500, isVerified: false },
    { name: 'Oscar', country: 'Canada', nights: 3, totalPaid: 950, isVerified: true },
    { name: 'Isabella', country: 'Italy', nights: 3, totalPaid: 2000, isVerified: false },
    { name: 'Ethan', country: 'USA', nights: 0, totalPaid: 200, isVerified: false },
    { name: 'Grace', country: 'UK', nights: 7, totalPaid: 1800, isVerified: true },
    { name: 'Yuki', country: 'Japan', nights: 3, totalPaid: 1000, isVerified: false },
  ];

  const guestsHighSpender = guests.find((guest) => {
    return guest.country === 'Canada' && guest.totalPaid >= 1000;
    });
    console.log(guestsHighSpender);

    const guestsHighSpender2 = guests.filter((guest) => {
        return guest.totalPaid > 500 && guest.nights >= 3 && guest.isVerified !== true;
    }
    );
    console.log(guestsHighSpender2);

    const guestsSummary = guestsHighSpender2.map((guest) => ({
            name: guest.name,
            nights: guest.nights,
            guestType: guest.totalPaid  > 1000 ? 'Premium Guest' : 'Regular Guest'), 
        });
    console.log(guestsSummary);