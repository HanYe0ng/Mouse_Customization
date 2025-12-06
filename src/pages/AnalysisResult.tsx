import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Ruler, Hand, TrendingUp } from 'lucide-react';
import StepIndicator from '../components/StepIndicator';
import ThreeDModelViewer from '../components/ThreeDModelViewer';

export default function AnalysisResult() {
  const navigate = useNavigate();

  const measurements = [
    { label: '손 너비', value: '8.9 cm', status: '표준' },
    { label: '손바닥 아치 높이', value: '2.3 cm', status: '높음' },
    { label: '엄지 각도', value: '42°', status: '표준' },
    { label: '손목 기울기', value: '18°', status: '낮음' },
    { label: '손가락 길이', value: '18.2 cm', status: '긴 편' },
    { label: '그립 압력', value: '중간', status: '적정' },
  ];

  const gripAnalysis = {
    type: 'Palm Grip',
    percentage: 78,
    description: '손바닥 전체를 사용하는 안정적인 그립 스타일입니다.',
    recommendations: [
      '넓은 손바닥 접촉면',
      '높은 아치형 쉘',
      '엄지 받침대 강화',
    ],
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <StepIndicator currentStep={2} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2.5 glass rounded-full mb-6 border border-[#00FF5A]/30">
            <span className="text-[#00FF5A]">✓ 분석 완료</span>
          </div>
          <h2 className="mb-6">AI 손 분석 결과</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            당신의 손에 최적화된 마우스 쉘을 추천드립니다
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left: 3D Hand Model */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-strong rounded-2xl p-8"
          >
            <h3 className="mb-6 text-white">3D 손 모델</h3>
            <ThreeDModelViewer type="hand" className="h-96 mb-6" />
            <div className="glass rounded-lg p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Hand className="w-5 h-5 text-[#00FF5A]" />
                <span className="text-white font-medium">스캔 품질</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '94%' }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-full bg-gradient-to-r from-[#00FF5A] to-[#4FF3FF]"
                  />
                </div>
                <span className="text-[#00FF5A] font-semibold">94%</span>
              </div>
            </div>
          </motion.div>

          {/* Middle: Measurements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-[#4FF3FF]/20 border border-[#4FF3FF]/40 flex items-center justify-center">
                <Ruler className="w-6 h-6 text-[#4FF3FF]" />
              </div>
              <h3 className="text-white">정밀 측정값</h3>
            </div>

            <div className="space-y-5">
              {measurements.map((measurement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass rounded-lg p-4 border border-white/10"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-400">{measurement.label}</span>
                    <span className="text-xs px-2 py-1 bg-[#00FF5A]/20 text-[#00FF5A] rounded">
                      {measurement.status}
                    </span>
                  </div>
                  <div className="text-white">{measurement.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Grip Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-[#00FF5A]/20 border border-[#00FF5A]/40 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#00FF5A]" />
              </div>
              <h3 className="text-white">그립 스타일 분석</h3>
            </div>

            {/* Grip Type Visualization */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl text-white font-semibold">{gripAnalysis.type}</span>
                <span className="text-2xl text-[#00FF5A] font-bold">{gripAnalysis.percentage}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${gripAnalysis.percentage}%` }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="h-full bg-gradient-to-r from-[#00FF5A] to-[#4FF3FF] glow-green"
                />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{gripAnalysis.description}</p>
            </div>

            {/* Grip Style Options */}
            <div className="space-y-4 mb-8">
              {[
                { name: 'Palm Grip', value: 78 },
                { name: 'Claw Grip', value: 15 },
                { name: 'Fingertip Grip', value: 7 },
              ].map((style, index) => (
                <div key={index} className="glass rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-300 font-medium">{style.name}</span>
                    <span className="text-sm text-gray-400">{style.value}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${style.value}%` }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                      className={`h-full ${
                        index === 0
                          ? 'bg-[#00FF5A]'
                          : index === 1
                          ? 'bg-[#4FF3FF]'
                          : 'bg-gray-400'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="glass rounded-lg p-5 border border-[#00FF5A]/30 bg-[#00FF5A]/5">
              <h4 className="text-white mb-4 font-medium">추천 사항</h4>
              <ul className="space-y-3">
                {gripAnalysis.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF5A]" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Insight Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-strong rounded-2xl p-10 mb-8 border-2 border-[#00FF5A]/30 bg-gradient-to-r from-[#00FF5A]/5 to-[#4FF3FF]/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="mb-4 text-white">당신의 손에 최적화된 마우스 쉘을 추천드립니다</h3>
              <p className="text-gray-300 leading-relaxed">
                AI 분석 결과, Palm Grip에 최적화된 높은 아치형 쉘과 강화된 엄지 받침대가 
                가장 편안한 사용 경험을 제공할 것입니다. 장시간 사용 시 손목 부담을 30% 감소시킬 수 있습니다.
              </p>
            </div>
            <button
              onClick={() => navigate('/recommendation')}
              className="px-10 py-5 bg-[#00FF5A] text-[#0D0F12] rounded-xl hover:bg-[#4FF3FF] transition-all glow-green flex items-center gap-3 whitespace-nowrap font-medium"
            >
              <span>맞춤 쉘 보러가기</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '정밀도',
              value: '0.1mm',
              description: 'AI 측정 정확도',
            },
            {
              title: '데이터 포인트',
              value: '1,247',
              description: '분석된 손 특징점',
            },
            {
              title: '매칭률',
              value: '98.7%',
              description: '최적 쉘 매칭',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="glass rounded-xl p-8 text-center"
            >
              <div className="text-4xl text-[#00FF5A] mb-3 font-bold">{stat.value}</div>
              <div className="text-white mb-2 font-medium">{stat.title}</div>
              <div className="text-sm text-gray-400 leading-relaxed">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}