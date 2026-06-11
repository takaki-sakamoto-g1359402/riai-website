# Riai Devlog Post

## English

I built the first public-facing prototype for **Riai**, a calm and transparent autonomous-agent concept.

Riai is designed around one principle: agent behavior should be inspectable. The current static prototype includes a premium landing page and a simulated **Riai Command Center** that shows how an agent can plan, act, reflect, and learn while exposing its memory, safety checks, rule boundaries, task timeline, and active status.

What is included:

- Bilingual English/Japanese landing page
- Interactive Command Center mock dashboard
- Visible memory, safety, rule, activity, and timeline panels
- Lightweight generated hero asset optimized for static deployment
- Accessibility-minded navigation, keyboard-friendly controls, and reduced-motion support
- Clear legal boundary: all dashboard data is simulated

The design references were used only to study abstract patterns such as pacing, typography hierarchy, dashboard clarity, scroll rhythm, interaction density, and deployment polish. No layouts, imagery, copy, logos, animations, trade dress, or source code were copied.

Screenshot: `public/screenshots/riai-home.png`.

Live URL: pending deployment.

Deployment path: GitHub Pages workflow is prepared locally and can be run manually after deployment approval.

Release checklist: `docs/RELEASE_CHECKLIST.md`.

Open questions:

- What should an inspectable agent memory model expose first?
- How much autonomy should be simulated before real integrations are added?
- What approval UI feels safest without slowing down useful work?

## 日本語

**Riai** の最初の公開向けプロトタイプを作りました。Riai は、落ち着いた透明性を重視する自律エージェント構想です。

設計の中心にある考えはシンプルです。エージェントの挙動は検査可能であるべき、ということです。現在の静的プロトタイプには、プレミアムなランディングページと、エージェントが「計画 / 実行 / 内省 / 学習」する様子を見える形で扱う **Riai Command Center** が含まれています。記憶、安全チェック、ルール境界、タスクタイムライン、稼働状態も画面上で確認できます。

含まれるもの:

- 英語/日本語のバイリンガルランディングページ
- インタラクティブな Command Center モックダッシュボード
- 記憶、安全性、ルール、アクティビティ、タイムラインの可視化
- 静的配信向けに軽量化した生成ヒーローアセット
- キーボード操作、reduced motion、読みやすさを意識したアクセシビリティ
- ダッシュボードデータはすべてシミュレーションであるという明確な境界

参考URLは、情報設計、タイポグラフィ階層、ダッシュボードの明瞭さ、スクロールのテンポ、インタラクション密度、公開品質といった抽象パターンの研究にのみ使いました。レイアウト、画像、コピー、ロゴ、アニメーション、トレードドレス、コードはコピーしていません。

スクリーンショット: `public/screenshots/riai-home.png`。

Live URL: デプロイ後に追記予定。

デプロイ経路: GitHub Pages workflow はローカルで準備済みで、デプロイ承認後に手動実行できます。

リリースチェックリスト: `docs/RELEASE_CHECKLIST.md`。

考えたい問い:

- 検査可能なエージェント記憶モデルは、最初に何を見せるべきか？
- 実連携の前に、どこまで自律性をシミュレーションすべきか？
- 安全でありながら作業速度を落としすぎない承認UIとは何か？
