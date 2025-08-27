import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Snap & Summarize",
    "one_liner": "Transform your screenshots into insightful summaries instantly!",
    "why_now": "With the surge in remote work and information overload, quick content summarization tools are in demand.",
    "novel_mechanism": "Integrating natural language processing to summarize extracted text into actionable insights.",
    "ai_stack": [
      "GPT-4",
      "RAG",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Meeting notes capture",
      "Learning material extraction",
      "Instant recipe conversion from screenshots"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Capture screenshots",
        "Text extraction via OCR",
        "Summary generation"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "Stripe",
        "n8n"
      ],
      "data_bootstrap": [
        "publicly available article datasets",
        "user-generated content"
      ],
      "risk": [
        "user data privacy",
        "text accuracy"
      ],
      "mitigation": [
        "apply data anonymization",
        "continuous model training for accuracy"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Show before and after screenshots",
        "Email campaigns featuring productivity stats"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Telegram"
      ],
      "pricing": {
        "free": "5 summaries/month",
        "pro": "$5/month for unlimited, early access features",
        "business": "$20/month/team for enterprise features"
      }
    },
    "moat": [
      "user engagement through gamification",
      "building a rich content database",
      "integrating with popular productivity tools"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "While OCR tools exist, transforming visual data into concise summaries enhances usability far beyond simple text extraction."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}