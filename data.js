const state = {
    tasks: [
        {
            id: 1,
            title: "Clean dogs",
            description: "Take soap, and clean the dogs",
            dueDate: {
                time: "13:40",
                date: "14.03"
            },
            tags: [
                pets,
                chores
            ],
            priority: "urgent",
            status: active//completed overdue active
        },
    ],
    projects: [
        {
            id: 1,
            title: "Clean dogs",
            description: "Take soap, and clean the dogs",
            tasks:[
                {
                    id: 1,
                    title: "Clean dogs",
                    description: "Take soap, and clean the dogs",
                    dueDate: {
                        time: "13:40",
                        date: "14.03"
                    },
                    priority: "urgent",
                    status: active//completed overdue active
                },
            ],
            dueDate: {
                time: "13:40",
                date: "14.03"
            },
            tags: [
                pets,
                chores
            ],
            priority: "urgent",
            status: active//completed overdue active
        },

    ],
    events: [
        {
            id: 1,
            title: "Doctor appointment",
            description: "Takes palce at gfhdfhf.st bring dos w/ u",
            date: "14.03",
            startTime: "17:00",
            endTime: "18:00",
            duration:"60",
            tags: [
                health,
            ],
            priority: "urgent",
            status: active//finished
        },
    ],
    tags:[//initially stores default work programming chores  etc.
        pet,
        chores
    ]
}