import React from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  MousePointerClick,
  AlertTriangle,
  Target,
  Settings2,
  Coffee,
  Zap,
  BarChart3,
  Sparkles,
} from 'lucide-react';

const summaryStats = [
  { label: '총 사용 시간', value: '27시간 12분' },
  { label: '일 평균 사용', value: '3시간 53분' },
  { label: '지난주 대비', value: '+12%' },
];

const aiSummary = [
  '이번 주에는 작업량 증가로 인해 손목 피로 누적이 빠르게 진행됨.',
  '"짧고 잦은 휴식" 패턴이 부족해 교정이 필요해요.',
];

const gripBreakdown = [
  { label: '팜 그립', value: '68%' },
  { label: '클로 그립', value: '22%' },
  { label: '핑거 그립', value: '10%' },
];

const movementHotspots = [
  { label: '좌측 상단', value: '23%' },
  { label: '우측 중단', value: '18%' },
  { label: '반복 이동 루프', value: '3회 감지' },
];

const clickStats = [
  { label: '총 클릭 수', value: '41,822회' },
  { label: '좌클릭', value: '78%' },
  { label: '우클릭', value: '11%' },
  { label: '매크로 버튼', value: '11%' },
];

const restStats = [
  { label: '가장 긴 연속 사용', value: '2시간 41분' },
  { label: '일 평균 연속 사용', value: '54분' },
  { label: '휴식 알림 실행률', value: '32%' },
];

const riskFactors = [
  '과압 클릭 증가',
  '연속 사용 시간 증가',
  '손바닥 압력 상승',
  '짧은 휴식 구간 부족',
];

const bodySignals = [
  '손목 외반(바깥쪽 꺾임) 경향 증가',
  '손바닥 하중 좌측 편향',
  '손가락 굴곡 속도 증가 → 긴장도 상승 패턴',
];

const improvementGoals = [
  { label: '연속 사용 45분 제한', detail: '자동 알림 강도 +10% 적용' },
  { label: '클릭 압력 보정 활성화', detail: '목표 평균 압력 110g' },
  { label: '손목 중립 자세 유지 프로그램 ON', detail: '센서 기반 각도 보정 안내' },
  { label: '반복 이동 루프 개선', detail: 'AI 커서 가속 자동 최적화 적용' },
];

const recommendedSettings = [
  { item: '자동 감도 튜닝', current: 'OFF', target: 'ON' },
  { item: '클릭 압력 보정', current: '120g', target: '110g' },
  { item: '매크로 추천', current: '1개 등록', target: '3개 등록 추천' },
  { item: '휴식 알림', current: '기본', target: '집중 작업 모드' },
];

const heatmapHighlights = [
  { title: '손 압력 히트맵', description: '손바닥 중앙–좌측 65% 집중' },
  { title: '커서 이동 히트맵', description: '좌측 상단 + 우측 중단 사용 비중 상승' },
  { title: '클릭 강도 그래프', description: '오전 10시~12시 가장 높은 강도' },
  { title: '연속 사용 시간 그래프', description: '금요일 피크 2.4h' },
];

const quickCard = {
  totalUse: '27h 12m',
  clicks: '41,822',
  painScore: '68/100',
  restRate: '32%',
  modes: 'AI 자동 감도 / 클릭 압력 보정',
};

export default function WeeklyReport() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#4FF3FF]">콤마 AI 인사이트</p>
          <h1 className="text-4xl sm:text-5xl font-semibold">
            AI 기반 주간 사용 습관 리포트
          </h1>
          <p className="text-gray-400 text-lg">
            당신의 작업 방식에 맞춰 스스로 최적화되는 AI 마우스 코치
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-strong rounded-3xl p-10 border border-white/10 space-y-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 flex-1">
              {summaryStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/5 px-5 py-4">
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-semibold text-white mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-gradient-to-r from-[#00FF5A]/20 to-[#4FF3FF]/20 p-6 border border-[#00FF5A]/30">
              <p className="text-xs uppercase tracking-[0.4em] text-[#00FF5A] mb-3">AI 분석 한 줄 요약</p>
              <ul className="space-y-2 text-sm text-gray-200">
                {aiSummary.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="text-[#00FF5A] text-lg leading-none">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <div className="glass-strong rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-[#4FF3FF]" />
              <div>
                <p className="text-sm text-gray-400">그립 · 움직임 패턴</p>
                <h3 className="text-xl font-semibold">주 사용 그립 분석</h3>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {gripBreakdown.map((grip) => (
                <div key={grip.label} className="rounded-xl bg-white/5 p-4 text-center">
                  <p className="text-2xl font-semibold text-white">{grip.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{grip.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>· 팜 그립 시간이 길어지면서 손바닥 압력이 증가하는 경향</p>
              <p>· 추천: 완화 구간에서 <span className="text-[#00FF5A] font-medium">AI 자동감도 모드</span> 유지</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-[#00FF5A]" />
              <div>
                <p className="text-sm text-gray-400">이동 경로 · 집중도</p>
                <h3 className="text-xl font-semibold">커서 이동 & 정밀 작업</h3>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {movementHotspots.map((hotspot) => (
                <div key={hotspot.label} className="rounded-xl bg-white/5 p-4 text-center">
                  <p className="text-xl font-semibold text-white">{hotspot.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{hotspot.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              · 세밀 조작(픽셀 단위 이동) 비율 7.4% → 손가락 굴곡 부하 증가 리스크
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <div className="glass-strong rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <MousePointerClick className="w-6 h-6 text-[#4FF3FF]" />
              <div>
                <p className="text-sm text-gray-400">클릭 습관 분석</p>
                <h3 className="text-xl font-semibold">총 클릭 & 압력 경향</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {clickStats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-gray-400">{stat.label}</p>
                  <p className="text-xl font-semibold text-white mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-[#FF6B6B]/30 bg-[#FF6B6B]/10 p-4 text-sm text-gray-100">
              <p>평균 클릭 압력 127g (권장 110g 대비 +17g)</p>
              <p>과압 클릭이 일 평균 413회 발생 → 굴곡근 피로 누적</p>
              <p className="text-[#00FF5A] mt-2">클릭 압력 보정 기능 활성화 시 18% 피로 완화 예상</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <Coffee className="w-6 h-6 text-[#F7B733]" />
              <div>
                <p className="text-sm text-gray-400">휴식 · 알림 반응</p>
                <h3 className="text-xl font-semibold">사용 중단 & 휴식 패턴</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {restStats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-gray-400">{stat.label}</p>
                  <p className="text-xl font-semibold text-white mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-[#F7B733]/30 bg-[#F7B733]/10 p-4 text-sm text-gray-100">
              <p>휴식 패턴이 불규칙하며 경고 기준을 2회 초과했습니다.</p>
              <p className="text-white mt-1">AI 평가: "작업-휴식 비율" 최적화가 필요합니다.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <div className="glass-strong rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-[#FF6B6B]" />
              <div>
                <p className="text-sm text-gray-400">통증 위험 스코어</p>
                <h3 className="text-xl font-semibold">이번 주 위험 지표 68 / 100</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400">지난주 대비 +6</p>
            <div>
              <p className="text-sm text-gray-300 mb-2">위험 상승 요인</p>
              <ul className="list-disc pl-5 text-sm text-gray-200 space-y-1">
                {riskFactors.map((factor) => (
                  <li key={factor}>{factor}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-2">AI가 포착한 신체 부담 신호</p>
              <ul className="list-disc pl-5 text-sm text-gray-200 space-y-1">
                {bodySignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-[#00FF5A]" />
              <div>
                <p className="text-sm text-gray-400">다음 주 맞춤 개선 목표</p>
                <h3 className="text-xl font-semibold">부하 감소 주간 계획</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {improvementGoals.map((goal) => (
                <li key={goal.label} className="rounded-xl bg-white/5 p-4">
                  <p className="text-white font-medium">{goal.label}</p>
                  <p className="text-sm text-gray-300 mt-1">{goal.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <div className="glass-strong rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <Settings2 className="w-6 h-6 text-[#4FF3FF]" />
              <div>
                <p className="text-sm text-gray-400">AI 추천 설정 변경</p>
                <h3 className="text-xl font-semibold">콤마 AI가 권장하는 세팅</h3>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-white/5 text-gray-400 uppercase tracking-widest text-xs">
                  <tr>
                    <th className="px-4 py-3 text-left">항목</th>
                    <th className="px-4 py-3 text-left">현재</th>
                    <th className="px-4 py-3 text-left">추천</th>
                  </tr>
                </thead>
                <tbody>
                  {recommendedSettings.map((setting) => (
                    <tr key={setting.item} className="border-t border-white/5">
                      <td className="px-4 py-3 text-white">{setting.item}</td>
                      <td className="px-4 py-3 text-gray-300">{setting.current}</td>
                      <td className="px-4 py-3 text-[#00FF5A] font-medium">{setting.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-[#FFE66D]" />
              <div>
                <p className="text-sm text-gray-400">히트맵 · 패턴 시각화</p>
                <h3 className="text-xl font-semibold">웹 UI 프리뷰</h3>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              실제 웹에서는 애니메이션·그래프 기반으로 시각화됩니다. 아래 주요 포인트만 미리 확인하세요.
            </p>
            <div className="space-y-3">
              {heatmapHighlights.map((highlight) => (
                <div key={highlight.title} className="rounded-xl bg-white/5 p-4">
                  <p className="text-white font-medium">{highlight.title}</p>
                  <p className="text-sm text-gray-300 mt-1">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <div className="glass-strong rounded-2xl p-8 border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#00FF5A]" />
              <div>
                <p className="text-sm text-gray-400">콤마 AI 총평</p>
                <h3 className="text-xl font-semibold">부하 감소 주간 권장</h3>
              </div>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              “이번 주는 작업량 증가로 인해 피로 신호가 뚜렷하게 나타났습니다. 다음 주는 ‘부하 감소 주간’으로 설정하는 것을 권장합니다. 콤마가 당신의 습관에 맞춰 자동 최적화하여 통증 발생을 줄여드릴게요.”
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-[#00FF5A]/30 bg-[#00FF5A]/5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-[#00FF5A]">웹 요약 카드</p>
                <h3 className="text-2xl font-semibold text-white mt-2">Weekly Habit Report</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-100">
              <div>
                <p className="text-gray-400">총 사용</p>
                <p className="text-xl font-semibold text-white">{quickCard.totalUse}</p>
              </div>
              <div>
                <p className="text-gray-400">클릭 수</p>
                <p className="text-xl font-semibold text-white">{quickCard.clicks}</p>
              </div>
              <div>
                <p className="text-gray-400">통증 스코어</p>
                <p className="text-xl font-semibold text-white">{quickCard.painScore}</p>
              </div>
              <div>
                <p className="text-gray-400">휴식 실행률</p>
                <p className="text-xl font-semibold text-white">{quickCard.restRate}</p>
              </div>
            </div>
            <div className="rounded-xl bg-black/30 p-4">
              <p className="text-sm text-gray-400 mb-1">추천 모드</p>
              <p className="text-white font-medium">{quickCard.modes}</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
