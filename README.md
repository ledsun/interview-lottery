# これは何？

面談の組み合わせをくじ引き決めます。

- 面談者に対して、被面談者を設定
- 被面談者は、月別で複数の組み合わせが設定可能
- 過去の組み合わせを避けて設定

# Setup

```
npm install
```

`data.json`を作成します。例：

```json
{
  "interviewers": [
    "田中",
    "鈴木",
    "佐藤",
    "高橋",
    "伊藤",
    "山本"
  ],
  "interviewees": [
    ["渡辺", "中村", "小林", "加藤", "吉田", "山田"],
    ["佐々木", "山口", "松本", "加藤", "吉田", "山田"]
  ],
  "doneList": [
    {
      "田中": ["中村"],
      "鈴木": ["小林"],
      "佐藤": ["加藤"],
      "高橋": ["渡辺"],
      "伊藤": ["山田"],
      "山本": ["吉田"]
    },
    {
      "田中": ["山口"],
      "鈴木": ["加藤"],
      "佐藤": ["佐々木"],
      "高橋": ["山田"],
      "伊藤": ["吉田"],
      "山本": ["松本"]
    },
    {
      "田中": ["加藤"],
      "鈴木": ["吉田"],
      "佐藤": ["佐々木"],
      "高橋": ["小林"],
      "伊藤": ["渡辺"],
      "山本": ["中村"]
    },
    {
      "田中": ["松本"],
      "鈴木": ["山口"],
      "佐藤": ["吉田"],
      "高橋": ["山田"],
      "伊藤": ["加藤"]
    },
    {
      "田中": ["吉田"],
      "鈴木": ["渡辺"],
      "佐藤": ["中村"],
      "高橋": ["加藤"],
      "伊藤": ["小林"]
    },
    {
      "鈴木": ["松本"],
      "佐藤": ["加藤"],
      "高橋": ["山口"],
      "山本": ["吉田"]
    },
    {
      "田中": ["小林"],
      "鈴木": ["佐々木"],
      "佐藤": ["吉田"],
      "高橋": ["中村"],
      "伊藤": ["加藤"],
      "山本": ["渡辺"]
    },
    {
      "田中": ["加藤"],
      "佐藤": ["山口"],
      "高橋": ["松本"],
      "伊藤": ["吉田"]
    },
    {
      "田中": ["佐々木"],
      "鈴木": ["中村"],
      "佐藤": ["渡辺"],
      "高橋": ["吉田"],
      "伊藤": ["小林"],
      "山本": ["加藤"]
    }
  ]
}
```

サンプルデータを使う場合は
```
cp data.example.json data.json
```

# Run
```
npm start
```

# How work
1. ランダムで組み合わせを作成
1. 過去の組み合わせを避けたものが見つかったら表示します
1. 一万回の試行で組み合わせが見つからない場合、避ける組み合わせ期間を短くします


# Result
1. 最適な組み合わせを表示します
1. 組み合わせが見つかるまでの試行回数を表示します
1. 何ヶ月間重複が無いのか表示します

```
> interviewLottery@0.0.1 start /Users/shigerunakajima/interview-lottery
> node .

257 times tried.
田中 渡辺
鈴木 山田
佐藤 小林
高橋 吉田
伊藤 中村
山本 加藤
No duplicated combination during last 5 months
```
