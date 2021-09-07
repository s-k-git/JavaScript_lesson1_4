const tasks = ["[内容]机を片付ける[ジャンル]掃除", "[内容]牛乳を買う[ジャンル]買い物", "[内容]散歩する[ジャンル]運動"];
console.log("=============================");
console.log("現在持っているタスク一覧");
console.log("=============================");
tasks.forEach(function (value, index) {
    console.log(index + ":" + value);
}
);
while (true) {
    const task = prompt("タスクを入力してください");
    const genre = prompt("ジャンルを入力してください");
    if (task === null && genre === null) {
        break;
    } else {
        tasks.push("[内容]" + task + "[ジャンル]" + genre);
        console.log("=============================");
        console.log("現在持っているタスク一覧");
        console.log("=============================");
        tasks.forEach(function (value, index) {
            console.log(index + ":" + value);
        }
        );
        alert("新しいタスクを追加しました");
        let action = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");//constは不可
        while (true) {
            if (action === "追加" || action === "終了" || action === null) {
                break;
            } else if (action === "確認") {
                alert("=============================\r\n現在持っているタスク一覧\r\n=============================\r\n"
                    + tasks);
                action = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
            } else if (action === "削除") {
                const deleteNo = prompt("削除する要素番号を記入してください");
                if (deleteNo === null || deleteNo === "") {
                    alert("キャンセル");
                } else if (Number.isInteger(Number(deleteNo)) && 0 <= deleteNo && deleteNo < tasks.length) {
                    alert("true");
                    tasks.splice(deleteNo, 1);
                    console.log("=============================");
                    console.log("現在持っているタスク一覧");
                    console.log("=============================");
                    tasks.forEach(function (value, index) {
                        console.log(index + ":" + value);
                    }
                    );
                } else {
                    alert("該当要素番号がありません");
                }
                action = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
            } else {
                action = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
            }
        }
        if (action === "終了" || action === null) {
            alert("終了します");
            break;
        } else if (action === "追加") {
            alert("追加するタスクを入力してください");
        }
    }
}