// Landing.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Camera,
  Brain,
  Layers,
  LineChart,
  Gauge,
  Star,
} from "lucide-react";
import ThreeDModelViewer from "../components/ThreeDModelViewer";

const heroSpecs = ["58g Carbon Arc Shell", "Palm · Claw 듀얼 핏", "AI Adaptive Sensor"];

const heroStats = [
  { label: "손 데이터 분석", value: "12,486" },
  { label: "평균 피로 감소", value: "-30%" },
  { label: "제작 기간", value: "7-14일" },
];

const featuredCollections = [
  { 
    title: "Project Blackline",
    description: "초경량 esports 에디션",
    specs: ["58g 카본 쉘", "버튼 5+2", "각인 포함"],
    accent: "#44d62c",
  },
  {
    title: "Aurora Studio",
    description: "크리에이터 컬러 모듈",
    specs: ["듀얼 톤 페어링", "각도 모듈", "프리미엄 코팅"],
    accent: "#00f0ff",
  },
  {
    title: "Noir Wellness",
    description: "수직 그립 웰니스",
    specs: ["손목 25°", "TPU Grip", "AI 자세 리포트"],
    accent: "#f5c96b",
  },
];

const technologyHighlights = [
  {
    title: "Carbon Arc Shell",
    metric: "58g",
    description: "레이저 컷팅 카본과 PA12 합성으로 초경량이면서도 비틀림 없이 견고합니다.",
  },
  {
    title: "Nerve Sensor Suite",
    metric: "26K DPI",
    description: "AI가 손 움직임을 학습해 장르별 감도를 자동 조정합니다.",
  },
  {
    title: "Pulse Grip Matrix",
    metric: "-30%",
    description: "압력 센싱으로 잘못된 그립을 교정해 손목 피로도를 낮춥니다.",
  },
];

const processSteps = [
  {
    label: "Collect",
    title: "Hand Scan Intake",
    description: "멀티 앵글 촬영/ LiDAR 업로드로 0.1mm 단위 데이터를 확보합니다.",
    icon: Camera,
  },
  {
    label: "Analyze",
    title: "AI Fit Lab",
    description: "Grip 스타일, 압력, 관절 각도를 분석해 핏 프로파일을 생성합니다.",
    icon: Brain,
  },
  {
    label: "Craft",
    title: "Precision Build",
    description: "PA12 3D 인쇄와 수작업 피니싱으로 마스터 빌더가 제작합니다.",
    icon: Layers,
  },
  {
    label: "Launch",
    title: "Quality & Delivery",
    description: "65단계 품질 검수 후 맞춤 리포트와 함께 배송합니다.",
    icon: ShieldCheck,
  },
];

const studioMetrics = [
  { label: "핸드 데이터", value: "12,486" },
  { label: "만족도", value: "98.7%" },
  { label: "월 제작 슬롯", value: "20대 제한" },
];

const designChecklist = [
  "선호하는 무게 범위",
  "버튼 맵 & 매크로",
  "컬러 페어링 무드",
  "각인 문구 / 서명",
];

export default function Landing() {
  return (
    // 🔥 페이지 공통 래퍼 + 섹션 간격
    <div className="page-shell page-stack">
      {/* Hero */}
      <section className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="ux-hero"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <span className="ux-pill">PROJECT KOMMA · 2025 BLACKLINE</span>
              <div>
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  블랙라인 에디션
                  <span className="block text-[var(--ux-green)]">RZ·Inspired Series</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  네온 블랙 무드에 AI 핏 엔진을 결합했습니다. 팀 환경, e스포츠,
                  크리에이터까지 한 번의 손 스캔으로 전담 디렉터가 맞춤 제작합니다.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {heroSpecs.map((spec) => (
                  <span key={spec} className="ux-spec-chip">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/scan"
                  className="ux-btn-primary text-sm uppercase tracking-[0.3em]"
                >
                  손 스캔 시작
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/customize"
                  className="ux-btn-secondary text-sm uppercase tracking-[0.3em]"
                >
                  스캔 없이 제작
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="ux-kpi">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="ux-hero-screen">
                <ThreeDModelViewer type="mouse" className="h-[420px]" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="ux-feature-card absolute -left-6 -bottom-8 w-64 border border-[#44d62c]/40"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  AI Fit Report
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Palm grip · 78%
                </h3>
                <p className="text-sm text-gray-400">
                  엄지 받침 강화 · 손목 각도 12°
                </p>
                <div className="mt-4 flex items-center gap-3 text-sm text-gray-300">
                  <LineChart className="h-4 w-4 text-[#44d62c]" />
                  실시간 제작 추적
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="ux-pill">Neo Collections</span>
            <h2 className="mt-4 text-3xl font-semibold">시그니처 라인업</h2>
            <p className="mt-2 text-gray-400">
              플레이 스타일과 작업 환경에 맞는 3가지 기본 컬렉션을 시작점으로 선택하세요.
            </p>
          </div>
          <Link
            to="/recommendation"
            className="ux-btn-secondary w-fit text-xs uppercase tracking-[0.3em]"
          >
            전체 보기
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
          {featuredCollections.map((collection) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="ux-collection-card"
              style={{ borderColor: `${collection.accent}40` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                    Limited
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {collection.title}
                  </h3>
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-[0.3em]"
                  style={{ color: collection.accent }}
                >
                  New
                </span>
              </div>
              <p className="text-gray-400">{collection.description}</p>
              <ul>
                {collection.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <Link
                to="/customize"
                className="ux-btn-secondary w-fit text-xs uppercase tracking-[0.3em]"
              >
                커스터마이징
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ux-section p-10 sm:p-12"
        >
          {/* 그대로… (내용 동일) */}
        </motion.div>
      </section>

      {/* Experience */}
      {/* 아래 섹션들도 같은 패턴으로 mx-auto max-w-7xl만 유지 */}
      {/* ... 기존 코드 내용 그대로, 바깥의 px-* 클래스만 제거해서 page-shell에 맡기면 됨 ... */}

      {/* CTA */}
      <section className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ux-spotlight p-12"
        >
          {/* CTA 내용 그대로 */}
        </motion.div>
      </section>
    </div>
  );
}
