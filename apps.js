/* ===========================================================
   App Hub のカード定義
   -----------------------------------------------------------
   アプリを追加するときは、下の APPS 配列に1件足すだけ。
   　name  … カードの表示名
   　desc  … 1行の説明
   　url   … 動作確認済みの https:// の公開URL
   　icon  … 絵文字1つ
   　tag   … "仕事" / "投資" / "あそび" / "制作物" のどれか
   　          （新しいタグを書けば、絞り込みボタンも自動で増える）
   =========================================================== */

const APPS = [
  {
    name: "会議レコーダー",
    desc: "録音しながら文字起こし。議事録・グラレコの素材に整えて出力",
    url:  "https://01hojo10-creator.github.io/kaigi-recorder/",
    icon: "🎙️",
    tag:  "仕事"
  },
  {
    name: "もぐサポ君",
    desc: "給食の献立づくりと、厨房向けの指示書を1週間分まとめて用意",
    url:  "https://01hojo10-creator.github.io/mogu-sapo-kun/",
    icon: "🍚",
    tag:  "仕事"
  },
  {
    name: "シンプルToDo",
    desc: "ドラッグで並び替えできる、余計な機能のないToDoリスト",
    url:  "https://nextjs-simple-todo-ja.vercel.app/",
    icon: "✅",
    tag:  "仕事"
  },
  {
    name: "Masaki Trade System",
    desc: "相場レーダーとニュース要約。5分・15分・日足のシグナルを表示",
    url:  "https://01hojo10-creator.github.io/masaki-trade-system/",
    icon: "📈",
    tag:  "投資"
  },
  {
    name: "あそびのにわ",
    desc: "ピアノ・おえかき・レース・かたちあわせ。子ども向けミニゲーム集",
    url:  "https://01hojo10-creator.github.io/asobi-niwa/",
    icon: "🎨",
    tag:  "あそび"
  },
  {
    name: "はなごよみ",
    desc: "今日の花と花言葉。ガチャを回して自分の庭を育てていく",
    url:  "https://01hojo10-creator.github.io/hanagoyomi/",
    icon: "🌸",
    tag:  "あそび"
  },
  {
    name: "草刈り代行LP",
    desc: "草刈り・除草代行のランディングページ（制作サンプル）",
    url:  "https://01hojo10-creator.github.io/kusakari-hp/",
    icon: "🌿",
    tag:  "制作物"
  }
];
