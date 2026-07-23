alert("script OK");

const TPB = {

    season: "2026年度 第1シーズン",

    teams: [

        {

            name: "トキトキホークス",

            manager: "齋藤時生",

            players: [

    {number:21, name:"井口時生"},

    {number:70, name:"レフト時生"},

    {number:0, name:"バント時生"},

    {number:8, name:"明石健志"},

    {number:46, name:"本多雄一"},

    {number:6, name:"今宮健太"},

    {number:-8, name:"大成"},

    {number:10, name:"拓也"},

    {number:24, name:"ミネイヒロキ"},

    {number:9, name:"ユーキヤナギタ"},

    {number:54, name:"デスパイネ"},

    {number:77, name:"グラシアル"},

    {number:18, name:"銀次"},

    {number:1, name:"栗山巧"},

    {number:7, name:"中村晃"},

    {number:30, name:"長谷川勇也"},

    {number:11, name:"川島慶三"},

    {number:60, name:"山川"},

    {number:13, name:"角中勝也"},

    {number:55, name:"T-時生"},

    {number:23, name:"周東左京"},

    {number:-1000, name:"栗原はるみ"},

    {number:91, name:"ヨシオミ"},pitchers: [

    {number:52, name:"益田直也"},

    {number:16, name:"武田翔太"},

    {number:100, name:"高橋感謝"},

    {number:15, name:"齋藤時生"},

    {number:33, name:"石川柊太"},

    {number:78, name:"オスナ"}

],

managerPlayer: "齋藤時生"

]

        },

        {

            name: "フォレストブックス",

            manager: "森本成名",

            players: [

    {number:13, name:"森本13号"},

    {number:11, name:"森本11号"},

    {number:12, name:"森本12号"},

    {number:10, name:"森本10号"},

    {number:9, name:"森本9号"},

    {number:8, name:"森本8号"},

    {number:7, name:"森本7号"},

    {number:6, name:"森本6号"},

    {number:5, name:"森本5号"},

    {number:4, name:"森本4号"},

    {number:3, name:"森本3号"},

    {number:2, name:"森本2号"},

    {number:1, name:"森本1号"},

    {number:0, name:"森本0号"},

    {number:-1, name:"森本-1号"},

    {number:-2, name:"森本-2号"},

    {number:15, name:"森本15号"},

    {number:16, name:"森本16号"},

    {number:-3, name:"森本-3号"},

    {number:-4, name:"森本-4号"},

    {number:-5, name:"森本-5号"},

    {number:-6, name:"森本-6号"},

    {number:-7, name:"森本-7号"},

    {number:-8, name:"森本-8号"},

    {number:-9, name:"森本-9号"},pitchers: [

    {number:67, name:"森本ゴンザス"},

    {number:30, name:"森本サトシ"},

    {number:110, name:"ダーススタチウム"},

    {number:99, name:"ジョンブライアン"}

],

managerPlayer: "森本成名"

]

        },

        {

            name: "佐内葵",

            manager: "佐内葵",

            players: [

                {

                    number: 6,

                    name: "佐内葵",

                    type: "投手・野手兼任"

                }

            ],
            
            pitchers: [

    {

        number: 6,

        name: "佐内葵"

    }

],

managerPlayer: "佐内葵"

        }

    ]

};

console.log(TPB);

document.addEventListener("DOMContentLoaded", () => {

const teamArea = document.getElementById("teamArea");

const playerArea = document.getElementById("playerArea");

TPB.teams.forEach(team => {

    const teamButton = document.createElement("button");

    teamButton.textContent = team.name;

    teamArea.appendChild(teamButton);

    teamButton.onclick = () => {

        playerArea.innerHTML = "";

        const title = document.createElement("h3");

        title.textContent = team.name + " 選手一覧";

        playerArea.appendChild(title);

        team.players.forEach(player => {

            const p = document.createElement("p");

            p.textContent =

                "背番号 " + player.number +

                "　" +

                player.name;

            playerArea.appendChild(p);

        });

    };

});

});

TPB.teams.forEach(team => {

    const teamButton = document.createElement("button");

    teamButton.textContent = team.name;

    teamArea.appendChild(teamButton);

    teamButton.onclick = () => {

        playerArea.innerHTML = "";

        const title = document.createElement("h3");

        title.textContent = team.name + " 選手一覧";

        playerArea.appendChild(title);

        team.players.forEach(player => {

            const p = document.createElement("p");

            p.textContent =

                "背番号 " + player.number +

                "　" +

                player.name;

            playerArea.appendChild(p);

        });

    };

};

alert("TPB JavaScript OK");

document.body.insertAdjacentHTML("beforeend","<h2>TPB TEST</h2>");
