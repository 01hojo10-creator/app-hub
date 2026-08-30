# App Hub

自作アプリへの入口を、カード形式でまとめたページ。

## 公開URL

https://01hojo10-creator.github.io/app-hub/

## ファイル

| ファイル | 役割 |
|---|---|
| `index.html` | 見た目と動き（検索・タグ絞り込み） |
| `apps.js` | **カードの中身。アプリを増やすときはここだけ編集する** |

## アプリを1つ追加する

`apps.js` の `APPS` 配列に、次の形で1件足して Commit するだけ。

```js
{
  name: "アプリの名前",
  desc: "1行の説明",
  url:  "https://…（動作確認済みの公開URL）",
  icon: "🎙️",
  tag:  "仕事"
}
```

- `url` は**実際に開けることを確認した https:// のURL**にする。`file://` やローカルパスは開けない
- `tag` は既存の「仕事 / 投資 / あそび / 制作物」から選ぶ。新しい言葉を書けば、絞り込みボタンも自動で増える
- `icon` は絵文字1つ

1〜3分で公開URLに反映される。

## 経総

もともとPCのOneDrive内にローカルファイルとして置いていたが、2026年8月に消失。
同じものをGitHub Pagesで作り直したので、PCのファイルが消えても失われない。
スマホのブラウザからも同じURLで開ける（ホーム画面に追加も可）。

## 登録済みアプリ

| アプリ | URL |
|---|---|
| 会議レコーダー | https://01hojo10-creator.github.io/kaigi-recorder/ |
| もぐサポ君 | https://01hojo10-creator.github.io/mogu-sapo-kun/ |
| シンプルToDo | https://nextjs-simple-todo-ja.vercel.app/ |
| Masaki Trade System | https://01hojo10-creator.github.io/masaki-trade-system/ |
| あそびのにわ | https://01hojo10-creator.github.io/asobi-niwa/ |
| はなごよみ | https://01hojo10-creator.github.io/hanagoyomi/ |
| 草刈り代行LP | https://01hojo10-creator.github.io/kusakari-hp/ |

未登録：`fundaapp-mobile-news`（Pythonアプリで公開URLがないため）
