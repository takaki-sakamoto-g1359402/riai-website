import {
  Activity,
  Archive,
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Code2,
  Cpu,
  Database,
  Globe2,
  GraduationCap,
  Layers3,
  LockKeyhole,
  LucideIcon,
  MessageSquareText,
  Network,
  Radar,
  Route,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Workflow,
  Zap
} from "lucide-react";

export type Lang = "en" | "ja";
export type PhaseId = "plan" | "act" | "reflect" | "learn";

export type IconName =
  | "activity"
  | "archive"
  | "brain"
  | "check"
  | "circle"
  | "clipboard"
  | "code"
  | "cpu"
  | "database"
  | "globe"
  | "graduation"
  | "layers"
  | "lock"
  | "message"
  | "network"
  | "radar"
  | "route"
  | "shield"
  | "sparkles"
  | "timer"
  | "workflow"
  | "zap";

export const icons: Record<IconName, LucideIcon> = {
  activity: Activity,
  archive: Archive,
  brain: BrainCircuit,
  check: CheckCircle2,
  circle: CircleDot,
  clipboard: ClipboardCheck,
  code: Code2,
  cpu: Cpu,
  database: Database,
  globe: Globe2,
  graduation: GraduationCap,
  layers: Layers3,
  lock: LockKeyhole,
  message: MessageSquareText,
  network: Network,
  radar: Radar,
  route: Route,
  shield: ShieldCheck,
  sparkles: Sparkles,
  timer: TimerReset,
  workflow: Workflow,
  zap: Zap
};

type LocalizedString = Record<Lang, string>;

export const copy = {
  meta: {
    title: {
      en: "Riai | Transparent Autonomous Agents",
      ja: "Riai | 透明な自律エージェント"
    }
  },
  a11y: {
    skip: { en: "Skip to content", ja: "本文へ移動" },
    home: { en: "Riai home", ja: "Riai ホーム" },
    openMenu: { en: "Open menu", ja: "メニューを開く" },
    closeMenu: { en: "Close menu", ja: "メニューを閉じる" },
    language: { en: "Language", ja: "言語" },
    agentPhase: { en: "Agent phase", ja: "エージェント段階" },
    footer: { en: "Footer", ja: "フッター" }
  },
  nav: {
    product: { en: "Product", ja: "プロダクト" },
    architecture: { en: "Architecture", ja: "構造" },
    safety: { en: "Safety", ja: "安全性" },
    roadmap: { en: "Roadmap", ja: "ロードマップ" },
    community: { en: "Community", ja: "コミュニティ" },
    command: { en: "Open Command Center", ja: "Command Center を見る" }
  },
  hero: {
    h1: { en: "Riai", ja: "Riai" },
    lead: {
      en: "Autonomous agents that plan with clarity, act with restraint, reflect in public, and learn from visible rules.",
      ja: "明確に計画し、抑制を持って実行し、公開された状態で振り返り、見えるルールから学ぶ自律エージェント。"
    },
    body: {
      en: "Riai is a transparent pseudo-personality simulation for builders who need useful agents without hidden influence, impersonation, or black-box behavior.",
      ja: "Riai は、隠れた誘導やなりすまし、ブラックボックス挙動ではなく、透明な疑似パーソナリティデータで動くエージェント体験です。"
    },
    primary: { en: "Explore the demo", ja: "デモを見る" },
    secondary: { en: "Read the safety model", ja: "安全モデルを読む" },
    visualAlt: {
      en: "A translucent layered computational core representing Riai agent memory and policy layers.",
      ja: "Riai の記憶とポリシーレイヤーを表す透明な層状コンピューティングコア。"
    }
  },
  stats: [
    {
      value: "4",
      label: { en: "agent phases", ja: "エージェント段階" },
      detail: { en: "Plan, act, reflect, learn", ja: "計画、実行、内省、学習" }
    },
    {
      value: "0",
      label: { en: "hidden drivers", ja: "隠れた動機" },
      detail: { en: "Every driver is inspectable", ja: "すべて検査可能" }
    },
    {
      value: "12",
      label: { en: "safety checks", ja: "安全チェック" },
      detail: { en: "Before and after actions", ja: "実行前後で確認" }
    }
  ],
  sections: {
    missionTitle: { en: "A calmer model for agentic work", ja: "エージェント作業を静かに扱う" },
    missionBody: {
      en: "Most agent interfaces hide the reasoning substrate behind a cheerful chat surface. Riai makes intent, memory, boundary rules, and task state inspectable, so the product earns trust through legibility.",
      ja: "多くのエージェントUIは、推論の土台を親しげなチャット画面の裏に隠します。Riai は意図、記憶、境界ルール、タスク状態を検査可能にし、読み解けることによって信頼を作ります。"
    },
    visionTitle: { en: "Product vision", ja: "プロダクトビジョン" },
    architectureTitle: { en: "Agent architecture", ja: "エージェント構造" },
    safetyTitle: { en: "Safety layer", ja: "安全レイヤー" },
    useCasesTitle: { en: "Use cases", ja: "ユースケース" },
    roadmapTitle: { en: "Roadmap", ja: "ロードマップ" },
    communityTitle: { en: "Built with the community", ja: "コミュニティと育てる" }
  },
  missionCards: [
    {
      icon: "brain",
      title: { en: "Visible pseudo-personality", ja: "見える疑似パーソナリティ" },
      text: {
        en: "Values, tendencies, role affinities, limits, and task weights are explicit gameplay-style data, not implied identity.",
        ja: "価値観、傾向、役割適性、制約、タスク重みを、人格ではなく明示的なデータとして扱います。"
      }
    },
    {
      icon: "route",
      title: { en: "Readable autonomy", ja: "読める自律性" },
      text: {
        en: "Plans are decomposed, actions are logged, and reflections explain why the next step changed.",
        ja: "計画は分解され、行動は記録され、内省は次の一手が変わった理由を説明します。"
      }
    },
    {
      icon: "shield",
      title: { en: "Guardrails as product UI", ja: "UIとしてのガードレール" },
      text: {
        en: "Policy checks, permission gates, and review notes are surfaced as first-class interface objects.",
        ja: "ポリシーチェック、権限ゲート、レビュー記録をプロダクトUIの中心に置きます。"
      }
    }
  ] satisfies Card[],
  vision: [
    {
      title: { en: "Teams, not replacements", ja: "置換ではなくチーム" },
      text: {
        en: "Riai frames agents as accountable collaborators with narrow scopes and visible operating rules.",
        ja: "Riai はエージェントを、範囲と運用ルールが見える責任ある共同作業者として扱います。"
      }
    },
    {
      title: { en: "Simulation before automation", ja: "自動化の前にシミュレーション" },
      text: {
        en: "A command-center preview lets users inspect plans, memory, and policy checks before any real integration.",
        ja: "実連携の前に、計画、記憶、ポリシーチェックをCommand Centerで確認できます。"
      }
    },
    {
      title: { en: "Small-team deployability", ja: "小規模チームで運用可能" },
      text: {
        en: "The MVP favors static delivery, fast iteration, and components that can grow into a real product shell.",
        ja: "MVPでは静的配信、速い反復、実プロダクトへ育てられるコンポーネント構造を優先します。"
      }
    }
  ],
  architectureNodes: [
    {
      id: "plan",
      icon: "workflow",
      title: { en: "Plan", ja: "計画" },
      text: { en: "Decompose goals and constraints", ja: "目標と制約を分解" }
    },
    {
      id: "act",
      icon: "zap",
      title: { en: "Act", ja: "実行" },
      text: { en: "Use approved tools only", ja: "承認済みツールだけ使用" }
    },
    {
      id: "reflect",
      icon: "message",
      title: { en: "Reflect", ja: "内省" },
      text: { en: "Explain what changed", ja: "変更理由を説明" }
    },
    {
      id: "learn",
      icon: "graduation",
      title: { en: "Learn", ja: "学習" },
      text: { en: "Update visible memory", ja: "見える記憶を更新" }
    }
  ] satisfies ArchitectureNode[],
  safetyItems: [
    {
      icon: "lock",
      title: { en: "Permission boundaries", ja: "権限境界" },
      text: {
        en: "Actions that touch real accounts, payments, messages, or deployments pause for explicit approval.",
        ja: "実アカウント、決済、送信、デプロイに触れる操作は明示承認まで停止します。"
      }
    },
    {
      icon: "clipboard",
      title: { en: "Pre-action checks", ja: "実行前チェック" },
      text: {
        en: "Each task step runs through policy, privacy, tool, and scope checks before execution.",
        ja: "各タスクは実行前にポリシー、プライバシー、ツール、スコープを確認します。"
      }
    },
    {
      icon: "radar",
      title: { en: "Runtime monitoring", ja: "実行中モニタリング" },
      text: {
        en: "Status cards expose confidence, blockers, recent memory writes, and active constraints.",
        ja: "信頼度、ブロッカー、直近の記憶更新、現在の制約をカードで表示します。"
      }
    }
  ] satisfies Card[],
  useCases: [
    {
      icon: "database",
      title: { en: "Research operations", ja: "リサーチ運用" },
      text: {
        en: "Track sources, evidence, memory, and unresolved assumptions without burying the audit trail.",
        ja: "情報源、根拠、記憶、未解決の仮説を監査ログごと管理します。"
      }
    },
    {
      icon: "code",
      title: { en: "Engineering support", ja: "開発支援" },
      text: {
        en: "Turn goals into inspectable tasks, validation steps, and release notes for small teams.",
        ja: "目標を検査可能なタスク、検証手順、リリースノートへ変換します。"
      }
    },
    {
      icon: "globe",
      title: { en: "Community building", ja: "コミュニティ形成" },
      text: {
        en: "Publish bilingual devlogs with clear boundaries, progress, and open questions.",
        ja: "境界、進捗、問いが明確な英日devlogを公開できます。"
      }
    },
    {
      icon: "network",
      title: { en: "Agent governance", ja: "エージェント統制" },
      text: {
        en: "Coordinate multiple agents while keeping policies, memory, and approvals visible.",
        ja: "複数エージェントを、ポリシー、記憶、承認を見える状態で調整します。"
      }
    }
  ] satisfies Card[],
  roadmap: [
    {
      period: { en: "MVP", ja: "MVP" },
      title: { en: "Static command center", ja: "静的Command Center" },
      text: {
        en: "Bilingual landing site, simulated agent states, and transparent safety panels.",
        ja: "英日ランディング、シミュレーション状態、透明な安全パネル。"
      }
    },
    {
      period: { en: "Prototype", ja: "プロトタイプ" },
      title: { en: "Scenario editor", ja: "シナリオ編集" },
      text: {
        en: "Author agent profiles, task weights, boundaries, and memory fixtures.",
        ja: "プロファイル、タスク重み、境界、記憶フィクスチャを編集。"
      }
    },
    {
      period: { en: "Product shell", ja: "プロダクトシェル" },
      title: { en: "Real integrations gated by consent", ja: "承認ゲート付き実連携" },
      text: {
        en: "Add tool connectors only after clear approval, audit, and rollback flows exist.",
        ja: "承認、監査、ロールバック導線が整ってからツール連携を追加。"
      }
    }
  ],
  cta: {
    title: {
      en: "Help shape transparent agents.",
      ja: "透明なエージェントを一緒に育てる。"
    },
    text: {
      en: "Riai is early by design. The current site demonstrates the product language, safety posture, and command-center interaction model before real account integrations.",
      ja: "Riai は意図的に初期段階です。現在のサイトは実アカウント連携の前に、プロダクト言語、安全姿勢、Command Centerの操作モデルを示します。"
    },
    primary: { en: "Inspect the demo", ja: "デモを確認" },
    secondary: { en: "Review roadmap", ja: "ロードマップを見る" }
  },
  footer: {
    legal: {
      en: "Riai is an original autonomous-agent concept. Demo data is simulated and should not be interpreted as real deployment, customer, or safety certification evidence.",
      ja: "Riai はオリジナルの自律エージェント構想です。デモデータはシミュレーションであり、実配備、顧客、安全認証の証拠ではありません。"
    }
  }
};

export const command = {
  title: { en: "Riai Command Center", ja: "Riai Command Center" },
  subtitle: {
    en: "A transparent operating surface for agents that plan, act, reflect, and learn.",
    ja: "計画、実行、内省、学習を見える状態で扱うエージェント運用画面。"
  },
  systemStatus: { en: "All systems in simulation mode", ja: "全システムはシミュレーションモード" },
  sidebar: {
    commandCenter: { en: "Command Center", ja: "Command Center" },
    agents: { en: "Agents", ja: "エージェント" },
    tasks: { en: "Tasks", ja: "タスク" },
    memory: { en: "Memory", ja: "記憶" },
    navigation: { en: "Command sections", ja: "Command セクション" }
  },
  memorySearch: {
    label: { en: "Search memory", ja: "記憶を検索" },
    placeholder: { en: "Search visible memory", ja: "見える記憶を検索" },
    empty: { en: "No visible memory matched.", ja: "一致する見える記憶はありません。" }
  },
  memorySafetyLayer: {
    title: { en: "Memory + Safety Layer", ja: "記憶 + 安全レイヤー" },
    text: {
      en: "Every phase reads from explicit memory and writes an auditable reason before changing future behavior.",
      ja: "各フェーズは明示記憶を読み、将来の挙動を変える前に監査可能な理由を書き込みます。"
    }
  },
  phases: [
    {
      id: "plan",
      icon: "workflow",
      label: { en: "Plan", ja: "計画" },
      detail: {
        en: "Decompose goal, identify constraints, define success metrics.",
        ja: "目標を分解し、制約を見つけ、成功条件を定義します。"
      }
    },
    {
      id: "act",
      icon: "zap",
      label: { en: "Act", ja: "実行" },
      detail: {
        en: "Run approved actions with visible permissions and rollback notes.",
        ja: "承認済み操作を、権限とロールバック記録つきで実行します。"
      }
    },
    {
      id: "reflect",
      icon: "message",
      label: { en: "Reflect", ja: "内省" },
      detail: {
        en: "Compare intent, outcome, safety checks, and user boundaries.",
        ja: "意図、結果、安全チェック、ユーザー境界を比較します。"
      }
    },
    {
      id: "learn",
      icon: "graduation",
      label: { en: "Learn", ja: "学習" },
      detail: {
        en: "Write durable memory only when the reason is inspectable.",
        ja: "理由が検査できる場合だけ、永続記憶を更新します。"
      }
    }
  ] satisfies Phase[],
  labels: {
    activeAgents: { en: "Active agents", ja: "稼働中エージェント" },
    safetyChecks: { en: "Safety checks", ja: "安全チェック" },
    memory: { en: "Memory snapshot", ja: "記憶スナップショット" },
    timeline: { en: "Task timeline", ja: "タスクタイムライン" },
    rulePanel: { en: "Rule panel", ja: "ルールパネル" },
    activity: { en: "Activity", ja: "アクティビティ" },
    progress: { en: "Progress", ja: "進捗" },
    eta: { en: "ETA", ja: "目安" },
    state: { en: "State", ja: "状態" }
  },
  agents: [
    {
      name: { en: "Research Agent", ja: "リサーチAgent" },
      state: { en: "Planning", ja: "計画中" },
      task: {
        en: "Mapping public signals for autonomous-agent trust.",
        ja: "自律エージェント信頼性の公開シグナルを整理中。"
      },
      progress: 72,
      eta: "3m",
      tone: "lagoon"
    },
    {
      name: { en: "Ops Agent", ja: "Ops Agent" },
      state: { en: "Monitoring", ja: "監視中" },
      task: {
        en: "Watching release checklist and deployment gates.",
        ja: "リリースチェックリストとデプロイゲートを監視中。"
      },
      progress: 46,
      eta: "8m",
      tone: "copper"
    },
    {
      name: { en: "Safety Agent", ja: "Safety Agent" },
      state: { en: "Reviewing", ja: "レビュー中" },
      task: {
        en: "Checking permissions, policy boundaries, and claims.",
        ja: "権限、ポリシー境界、表現の安全性を確認中。"
      },
      progress: 88,
      eta: "1m",
      tone: "pine"
    }
  ],
  safetyChecks: [
    { name: { en: "Policy scope", ja: "ポリシースコープ" }, status: { en: "Passed", ja: "通過" }, time: "12s" },
    { name: { en: "PII detection", ja: "個人情報検出" }, status: { en: "Passed", ja: "通過" }, time: "18s" },
    { name: { en: "Tool permission", ja: "ツール権限" }, status: { en: "Needs approval", ja: "承認待ち" }, time: "Now" },
    { name: { en: "Claim review", ja: "主張レビュー" }, status: { en: "Passed", ja: "通過" }, time: "41s" }
  ],
  memories: [
    {
      title: { en: "User prefers explicit approval before external actions.", ja: "外部操作前には明示承認が必要。" },
      time: { en: "Pinned", ja: "固定" }
    },
    {
      title: { en: "Riai avoids impersonation and hidden influence tooling.", ja: "Riai はなりすましや隠れた誘導を避ける。" },
      time: { en: "5m ago", ja: "5分前" }
    },
    {
      title: { en: "Project mode: static, fast, bilingual, deployable.", ja: "プロジェクト方針: 静的、高速、英日対応、配信可能。" },
      time: { en: "14m ago", ja: "14分前" }
    },
    {
      title: { en: "Boundary: simulated demo data only.", ja: "境界: デモデータはシミュレーションのみ。" },
      time: { en: "24m ago", ja: "24分前" }
    }
  ],
  timeline: [
    { label: { en: "Understand goal", ja: "目標理解" }, detail: { en: "Clarify brand, scope, and constraints", ja: "ブランド、範囲、制約を確認" }, state: "done" },
    { label: { en: "Decompose plan", ja: "計画分解" }, detail: { en: "Split landing, dashboard, docs, release", ja: "ランディング、ダッシュボード、 docs、releaseに分割" }, state: "active" },
    { label: { en: "Run checks", ja: "検証実行" }, detail: { en: "Build, lint, validate, screenshot", ja: "build、lint、validate、screenshot" }, state: "pending" },
    { label: { en: "Publish with approval", ja: "承認後に公開" }, detail: { en: "Push and deploy only after consent", ja: "承認後のみpushとdeploy" }, state: "pending" }
  ],
  rules: [
    { label: { en: "External action approval", ja: "外部操作承認" }, mode: { en: "Required", ja: "必須" } },
    { label: { en: "Memory write explanation", ja: "記憶更新理由" }, mode: { en: "Visible", ja: "表示" } },
    { label: { en: "Identity boundary", ja: "人格境界" }, mode: { en: "No impersonation", ja: "なりすまし不可" } },
    { label: { en: "Safety review", ja: "安全レビュー" }, mode: { en: "Always on", ja: "常時ON" } }
  ],
  activity: [
    {
      icon: "database",
      title: { en: "Memory updated", ja: "記憶を更新" },
      text: { en: "Stored one explicit approval boundary.", ja: "明示承認境界を1件保存。" }
    },
    {
      icon: "shield",
      title: { en: "Safety gate paused action", ja: "安全ゲートが操作を停止" },
      text: { en: "Public repository creation requires approval.", ja: "公開リポジトリ作成には承認が必要。" }
    },
    {
      icon: "activity",
      title: { en: "Agent status heartbeat", ja: "Agent heartbeat" },
      text: { en: "Simulation stable, no real accounts connected.", ja: "シミュレーション安定、実アカウント連携なし。" }
    }
  ] satisfies ActivityItem[]
};

export interface Card {
  icon: IconName;
  title: LocalizedString;
  text: LocalizedString;
}

export interface ArchitectureNode {
  id: PhaseId;
  icon: IconName;
  title: LocalizedString;
  text: LocalizedString;
}

export interface Phase {
  id: PhaseId;
  icon: IconName;
  label: LocalizedString;
  detail: LocalizedString;
}

export interface ActivityItem {
  icon: IconName;
  title: LocalizedString;
  text: LocalizedString;
}

export function t(value: LocalizedString, lang: Lang): string {
  return value[lang];
}
