const tasks = ["[内容]机を片付ける、[ジャンル]掃除", "[内容]牛乳を買う、[ジャンル]買い物", "[内容]散歩する、[ジャンル]運動"];
while (true) {
    console.log("=============================");
    console.log("現在持っているタスク一覧");
    console.log("=============================");
    tasks.forEach(function (value, index) {
        console.log(index + ":" + value);
        }
    );
    const task = prompt("タスクを入力してください");
    const genre = prompt("ジャンルを入力してください");
    if (task === null && genre === null) {
        break;
    } else {
        tasks.push("[内容]" + task + "[ジャンル]" + genre);
    }
}