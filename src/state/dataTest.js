
let state = {
    dataTest: [
        {
            id: "1",
            number: "1",
            project_name: "Name project",
            type_work: "Front-end",
            date_start: "2020-05-05",
            date_finish: "2020-06-22",
            commentary: "Comment",
            paid: "111",
            cost: "111",
            source: 'Site',
            status: "In progress",
            client: "Viktor",
            payment: "Sberbank"
        }, {
            id: "2",
            number: "2",
            project_name: "Name project 2",
            type_work: "Back-end",
            date_start: "2020-05-12",
            date_finish: "2020-05-22",
            commentary: "Comment 2",
            paid: "222",
            cost: "222",
            source: 'Client',
            status: "Completed",
            client: "Alexey",
            payment: "Paypal"
        }
    ],
    DashBoardInfo: [
        {
            'id': '1', 'title': 'Total Sales', 'number': '62'
        }, {
            'id': '2', 'title': 'Total Received', 'number': '62'
        }, {
            'id': '3', 'title': 'Projects in work', 'number': '62'
        }, {
            'id': '4', 'title': 'Projects completed', 'number': '62'
        }
    ],
    GraphikTest: [
        {
            id: "1",
            mounth: 'Jan',
            applied: '100',
            left: '130'
        }, {
            id: "2",
            mounth: 'Feb',
            applied: '140',
            left: '130'
        }, {
            id: "3",
            mounth: 'Mar',
            applied: '40',
            left: '90'
        }, {
            id: "4",
            mounth: 'Apr',
            applied: '40',
            left: '130'
        }, {
            id: "5",
            mounth: 'May',
            applied: '100',
            left: '130'
        }, {
            id: "6",
            mounth: 'Jun',
            applied: '120',
            left: '130'
        }, {
            id: "7",
            mounth: 'Jul',
            applied: '10',
            left: '130'
        }, {
            id: "8",
            mounth: 'Aug',
            applied: '100',
            left: '130'
        }, {
            id: "9",
            mounth: 'Sep',
            applied: '100',
            left: '170'
        }, {
            id: "10",
            mounth: 'Oct',
            applied: '120',
            left: '30'
        }, {
            id: "11",
            mounth: 'Nov',
            applied: '100',
            left: '130'
        }, {
            id: "12",
            mounth: 'Dec',
            applied: '120',
            left: '90'
        }
    ],
    GraphikTest2: [
        {
            id: "1",
            mounth: 'Jan',
            applied: '70',
            left: '180'
        }, {
            id: "2",
            mounth: 'Feb',
            applied: '70',
            left: '120'
        }, {
            id: "3",
            mounth: 'Mar',
            applied: '70',
            left: '130'
        }, {
            id: "4",
            mounth: 'Apr',
            applied: '100',
            left: '120'
        }, {
            id: "5",
            mounth: 'May',
            applied: '100',
            left: '130'
        }, {
            id: "6",
            mounth: 'Jun',
            applied: '20',
            left: '10'
        }, {
            id: "7",
            mounth: 'Jul',
            applied: '120',
            left: '130'
        }, {
            id: "8",
            mounth: 'Aug',
            applied: '100',
            left: '130'
        }, {
            id: "9",
            mounth: 'Sep',
            applied: '60',
            left: '30'
        }, {
            id: "10",
            mounth: 'Oct',
            applied: '100',
            left: '130'
        }, {
            id: "11",
            mounth: 'Nov',
            applied: '100',
            left: '130'
        }, {
            id: "12",
            mounth: 'Dec',
            applied: '30',
            left: '10'
        }
    ],
    Clients: [
        {
            id: "1",
            number: "1",
            name: 'Viktor',
            company: "Name Company",
            mail: "test@test.ru",
            skype: "ttestest",
            telegram: "ttestest-06-22",
            whatsapp: "whatsapp-test",
            phone: "0993337722",
        }, {
            id: "2",
            number: "2",
            name: 'Alexey',
            company: "Name Company2",
            mail: "test@test.ru",
            skype: "ttestest",
            telegram: "ttestest-06-12",
            whatsapp: "whatsapp-test",
            phone: "0993337722",
        }, {
            id: "3",
            number: "3",
            name: 'Vladimir',
            company: "Name Company 3",
            mail: "test@test.ru",
            skype: "ttestest",
            telegram: "ttestest-06-22",
            whatsapp: "whatsapp-test",
            phone: "0993337722",
        }, {
            id: "4",
            number: "4",
            name: 'Ivan',
            company: "Name Company 4",
            mail: "test@test.ru",
            skype: "ttestest",
            telegram: "ttestest-06-22",
            whatsapp: "whatsapp-test",
            phone: "0993337722",
        },
    ],
    Users: [
        {
            id: "1",
            login: 'login',
            name: 'Viktor',
            role: "role",
            team: "Front-end"
        }, {
            id: "2",
            login: 'login-2',
            name: 'Alexey',
            role: "role-3",
            team: "Back-end"
        }, {
            id: "3",
            login: 'login-3',
            name: 'Viktor',
            role: "role-5",
            team: "Design"
        }, {
            id: "4",
            login: 'login-4',
            name: 'Alexey',
            role: "role-2",
            team: "Front-end"
        }
    ]
}

export let addRow = (userData2) => {
    state.dataTest.push(userData2)
}

export let addClient = (client) => {
    state.Clients.push(client)
}

export let addUser = (user) => {
    state.Users.push(user)
}
export default state;