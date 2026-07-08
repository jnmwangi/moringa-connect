const feeds = [
    {
        id: 1,
        content: "This is my first auto mobile, the black mamber",
        image: "bicyle.jpg",
        likes: 300,
        user: {name:"njmwas", tag:"CEO Skillful Technologies"},
        comments: [
            {
                user: "commeter 1",
                message: "sdfsdfsdfsdf"
            },

            {
                user: "commeter 1",
                message: "sdfsdfsdfsdf"
            }
        ]
    },

    {
        id: 2,
        content: "This was a great shot from our player",
        image: "worldcup.jpg",
        likes: 1000,
        user: "barclay",
        comments: [
            {
                user: "commeter 1",
                message: "sdfsdfsdfsdf"
            },

            {
                user: "commeter 1",
                message: "sdfsdfsdfsdf"
            }
        ]
    },

    {
        id: 3,
        content: "The day maradona retired and messi took it up",
        image: "footbal.jpg",
        likes: 500,
        user: "Telvin",
        comments: [
            {
                user: "commeter 1",
                message: "sdfsdfsdfsdf"
            },

            {
                user: "commeter 1",
                message: "sdfsdfsdfsdf"
            }
        ]
    }
];

export { feeds };