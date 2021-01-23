//OBJECTS

let netflix = {
    id: 9,
    name:"Super Store",
    season1: {
        seasonInfo: {
            episodeInfo:[
                {episode: 1, episodeName: "Pilot"},
                {episode: 2, episodeName: "Two"},
                {episode: 3, episodeName: "Three"},
                {episode: 4, episodeName: "Four"},
                {episode: 5, episodeName: "Five"},
                {episode: 6, episodeName: "Six"},
                {episode: 7, episodeName: "Seven"},
                {episode: 8, episodeName: "Eight"},
                {episode: 9, episodeName: "Nine"},
                {episode: 10, episodeName: "Ten"},
                {episode: 11, episodeName: "Eleven"}
            ]
        }
    },
    season2: {},
    season3: {}
}
// console.log(netflix);

console.log(netflix.season1.seasonInfo.episodeInfo[3]);

 