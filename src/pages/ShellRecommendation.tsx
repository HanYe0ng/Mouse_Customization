import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Zap, Gamepad2, Activity } from 'lucide-react';
import StepIndicator from '../components/StepIndicator';
import ThreeDModelViewer from '../components/ThreeDModelViewer';

export default function ShellRecommendation() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = React.useState('comfort');

  const shellTypes = [
    {
      id: 'comfort',
      name: 'Comfort Type',
      icon: Heart,
      color: '#00FF5A',
      description: '장시간 사용에 최적화된 편안한 디자인',
      features: ['높은 손목 받침대', '넓은 접촉면', '인체공학 각도'],
      specs: {
        angle: '18°',
        thumbRest: '깊은 곡선형',
        palmFit: '95%',
      },
    },
    {
      id: 'precision',
      name: 'Precision Type',
      icon: Zap,
      color: '#4FF3FF',
      description: '정밀 작업을 위한 섬세한 컨트롤',
      features: ['낮은 프로필', '가벼운 무게', '민감한 반응성'],
      specs: {
        angle: '12°',
        thumbRest: '얕은 평면형',
        palmFit: '88%',
      },
    },
    {
      id: 'gaming',
      name: 'Gaming Type',
      icon: Gamepad2,
      color: '#FF00FF',
      description: '빠른 반응과 정확성을 위한 게이밍 특화',
      features: ['공격적 각도', '측면 그립 강화', '빠른 전환'],
      specs: {
        angle: '22°',
        thumbRest: '강화된 돌출형',
        palmFit: '92%',
      },
    },
    {
      id: 'wellness',
      name: 'Wellness Type',
      icon: Activity,
      color: '#00FFAA',
      description: '손목 건강을 위한 의료용 등급 디자인',
      features: ['수직 그립', '압력 분산', '건강 모니터링'],
      specs: {
        angle: '25°',
        thumbRest: '의료용 곡선',
        palmFit: '97%',
      },
    },
  ];

  const currentShell = shellTypes.find((s) => s.id === selectedType) || shellTypes[0];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <StepIndicator currentStep={3} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">AI 추천 마우스 쉘</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            당신의 손 형태와 사용 패턴에 가장 적합한 쉘 디자인을 선택하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left: 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="glass-strong rounded-2xl p-10 mb-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-white mb-3">{currentShell.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{currentShell.description}</p>
                </div>
                <div className="px-5 py-2.5 glass rounded-lg border border-white/20">
                  <span className="text-[#00FF5A] font-medium">AI 추천</span>
                </div>
              </div>

              <ThreeDModelViewer type="mouse" className="h-[500px] mb-8" />

              {/* Shell Specs */}
              <div className="grid grid-cols-3 gap-6">
                <div className="glass rounded-xl p-5 border border-white/10">
                  <div className="text-sm text-gray-400 mb-2">쉘 각도</div>
                  <div className="text-2xl text-white font-semibold">{currentShell.specs.angle}</div>
                </div>
                <div className="glass rounded-xl p-5 border border-white/10">
                  <div className="text-sm text-gray-400 mb-2">엄지 받침대</div>
                  <div className="text-white font-medium">{currentShell.specs.thumbRest}</div>
                </div>
                <div className="glass rounded-xl p-5 border border-white/10">
                  <div className="text-sm text-gray-400 mb-2">손바닥 밀착도</div>
                  <div className="text-2xl text-[#00FF5A] font-semibold">{currentShell.specs.palmFit}</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="glass-strong rounded-2xl p-8">
              <h4 className="text-white mb-6 font-medium">주요 특징</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {currentShell.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-lg p-5 border border-white/10 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#00FF5A]" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Type Selection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >
            <h4 className="text-white mb-6 font-medium">쉘 타입 선택</h4>
            {shellTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;

              return (
                <motion.button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full glass-strong rounded-xl p-7 text-left transition-all ${
                    isSelected
                      ? 'border-2 glow-green'
                      : 'border border-white/10 hover:border-white/30'
                  }`}
                  style={{
                    borderColor: isSelected ? type.color : undefined,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${type.color}20`,
                        border: `1px solid ${type.color}40`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: type.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-medium">{type.name}</h4>
                        {type.id === 'comfort' && (
                          <span className="text-xs px-3 py-1.5 bg-[#00FF5A]/20 text-[#00FF5A] rounded-lg font-medium">
                            추천
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}

            {/* CTA */}
            <button
              onClick={() => navigate('/customize')}
              className="w-full mt-10 px-8 py-5 bg-[#00FF5A] text-[#0D0F12] rounded-xl hover:bg-[#4FF3FF] transition-all glow-green flex items-center justify-center gap-3 font-medium"
            >
              <span>세부 커스터마이징하기</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-8"
        >
          <h3 className="text-white mb-6">타입별 상세 비교</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400">특징</th>
                  {shellTypes.map((type) => (
                    <th key={type.id} className="text-center py-4 px-4">
                      <span className="text-white">{type.name.split(' ')[0]}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: '손목 각도', values: ['18°', '12°', '22°', '25°'] },
                  { label: '무게', values: ['105g', '85g', '95g', '110g'] },
                  { label: '그립 강도', values: ['낮음', '중간', '높음', '낮음'] },
                  { label: '반응 속도', values: ['중간', '빠름', '매우 빠름', '느림'] },
                  { label: '피로도', values: ['낮음', '중간', '중간', '매우 낮음'] },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="py-4 px-4 text-gray-400">{row.label}</td>
                    {row.values.map((value, i) => (
                      <td key={i} className="text-center py-4 px-4 text-gray-300">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}