import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Maximize2, 
  Box, 
  MousePointer, 
  Palette, 
  Cpu, 
  ArrowRight,
  RotateCcw,
  ChevronRight,
  DollarSign
} from 'lucide-react';
import StepIndicator from '../components/StepIndicator';
import ThreeDModelViewer from '../components/ThreeDModelViewer';

export default function Customization() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = React.useState('size');
  const [config, setConfig] = React.useState({
    height: 60,
    width: 65,
    arcCurvature: 70,
    thumbDepth: 50,
    material: 'ABS',
    buttonCount: 5,
    clickPressure: 'standard',
    primaryColor: '#00FF5A',
    secondaryColor: '#0D0F12',
    texture: 'matte',
    engraving: '',
    aiSensitivity: true,
    gripAssist: true,
    weeklyReport: false,
  });

  const basePrice = 89000;

  // 버튼 개수에 따른 추가 금액 계산
  const getButtonExtra = () => {
    switch (config.buttonCount) {
      case 5:
        return 20000;
      case 7:
        return 40000;
      case 9:
        return 60000;
      case 3:
      default:
        return 0;
    }
  };

  // ✅ 버튼 개수 + 각인 유무로만 가격 계산
  const calculatePrice = () => {
    let price = basePrice;

    // 버튼 개수 추가금
    price += getButtonExtra();

    // 각인 추가금
    if (config.engraving) price += 15000;

    return price;
  };

  const sections = [
    { id: 'size', label: '쉘 크기 & 형태', icon: Maximize2 },
    { id: 'material', label: '재질 선택', icon: Box },
    { id: 'buttons', label: '버튼 설정', icon: MousePointer },
    { id: 'color', label: '컬러 & 디자인', icon: Palette },
    { id: 'sensor', label: '센서 & 기능', icon: Cpu },
  ];

  const materials = [
    { id: 'ABS', name: 'ABS 플라스틱', price: 0, description: '가벼운 기본 재질' },
    { id: 'PLA', name: 'PLA 플라스틱', price: 5000, description: '친환경 · 변형 적음' },
    { id: 'WOD', name: '목재 필라멘트', price: 30000, description: '목재 질감 · 따뜻한 그립감' },
    { id: 'Met', name: '메탈', price: 70000, description: '알루미늄 기반 · 묵직한 무게감' },
    { id: 'CER', name: '세라믹', price: 90000, description: '부드러운 촉감 · 열에 강함' },
  ];

  const textures = [
    { id: 'matte', name: '무광 매트', preview: 'bg-gray-800' },
    { id: 'glossy', name: '유광 글로시', preview: 'bg-gradient-to-br from-gray-700 to-gray-900' },
    { id: 'soft-touch', name: '소프트 터치', preview: 'bg-gray-700' },
    { id: 'rubber', name: '러버 코팅', preview: 'bg-gray-600' },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <StepIndicator currentStep={4} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">세부 커스터마이징</h2>
          <p className="text-xl text-gray-400">
            모든 세부 사항을 당신의 취향대로 조정하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="glass-strong rounded-2xl p-4 sticky top-24">
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-[#00FF5A]/20 border border-[#00FF5A] text-[#00FF5A]'
                          : 'hover:bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="flex-1 text-left text-sm">{section.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4" />}
                    </button>
                  );
                })}
              </nav>

              {/* Reset Button */}
              <button className="w-full mt-6 px-4 py-3 glass rounded-xl hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2 text-gray-400 hover:text-white">
                <RotateCcw className="w-4 h-4" />
                <span className="text-sm">초기 상태로</span>
              </button>
            </div>
          </div>

          {/* Center: Settings */}
          <div className="lg:col-span-2">
            <div className="glass-strong rounded-2xl p-8">
              {/* Size & Shape */}
              {activeSection === 'size' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key="size"
                >
                  <h3 className="text-white mb-6">쉘 크기 & 형태</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-3">
                        <label className="text-gray-300">높이</label>
                        <span className="text-[#00FF5A]">{config.height}mm</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="80"
                        value={config.height}
                        onChange={(e) => setConfig({ ...config, height: parseInt(e.target.value) })}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>낮음</span>
                        <span>높음</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-3">
                        <label className="text-gray-300">너비</label>
                        <span className="text-[#00FF5A]">{config.width}mm</span>
                      </div>
                      <input
                        type="range"
                        min="55"
                        max="75"
                        value={config.width}
                        onChange={(e) => setConfig({ ...config, width: parseInt(e.target.value) })}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>좁음</span>
                        <span>넓음</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-3">
                        <label className="text-gray-300">아치 곡률</label>
                        <span className="text-[#00FF5A]">{config.arcCurvature}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={config.arcCurvature}
                        onChange={(e) => setConfig({ ...config, arcCurvature: parseInt(e.target.value) })}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>평평</span>
                        <span>곡선</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-3">
                        <label className="text-gray-300">엄지 받침대 깊이</label>
                        <span className="text-[#00FF5A]">{config.thumbDepth}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={config.thumbDepth}
                        onChange={(e) => setConfig({ ...config, thumbDepth: parseInt(e.target.value) })}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>얕음</span>
                        <span>깊음</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Material */}
              {activeSection === 'material' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key="material"
                >
                  <h3 className="text-white mb-6">재질 선택</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {materials.map((material) => {
                      const isSelected = config.material === material.id;

                      return (
                        <button
                          key={material.id}
                          type="button"
                          onClick={() =>
                            setConfig((prev) => ({
                              ...prev,
                              material: material.id,
                            }))
                          }
                          className={
                            isSelected
                              ? // ✅ 선택된 상태: glass 안 쓰고 Tailwind로만 스타일링
                                'rounded-xl p-6 text-left transition-all cursor-pointer border-2 border-[#00FF5A] bg-[#00FF5A]/10 shadow-lg shadow-[#00FF5A]/30'
                              : // ✅ 비선택 상태: 기존처럼 glass 유지
                                'glass rounded-xl p-6 text-left transition-all cursor-pointer border border-white/10 hover:border-white/30'
                          }
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-white">{material.name}</h4>
                          </div>
                          <p className="text-sm text-gray-400">{material.description}</p>
                        </button>
                      );
                    })}
                  </div>

                  {/* 디버깅용 - 잘 되면 삭제해도 됨 */}
                  <div className="mt-4 text-sm text-gray-400">
                    현재 선택된 재질:&nbsp;
                    <span className="text-white font-medium">
                      {materials.find((m) => m.id === config.material)?.name ?? '-'}
                    </span>
                  </div>
                </motion.div>
              )}




              {/* Buttons */}
              {activeSection === 'buttons' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key="buttons"
                >
                  <h3 className="text-white mb-6">버튼 설정</h3>
                  
                  <div className="mb-6">
                    <label className="text-gray-300 mb-3 block">버튼 개수</label>
                    <div className="grid grid-cols-4 gap-3">
                      {[3, 5, 7, 9].map((count) => {
                        const extra =
                          count === 3 ? 0 :
                          count === 5 ? 20000 :
                          count === 7 ? 40000 :
                          60000;

                        return (
                          <button
                            key={count}
                            onClick={() => setConfig({ ...config, buttonCount: count })}
                            className={`py-3 rounded-lg transition-all ${
                              config.buttonCount === count
                                ? 'bg-[#00FF5A] text-[#0D0F12]'
                                : 'glass border border-white/10 text-gray-300 hover:border-white/30'
                            }`}
                          >
                            <div>{count}개</div>
                            <div className="text-xs text-gray-800/70">
                              {extra === 0 ? '+0원' : `+${extra.toLocaleString()}원`}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-gray-300 mb-3 block">클릭 압력</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['light', 'standard', 'firm'].map((pressure) => (
                        <button
                          key={pressure}
                          onClick={() => setConfig({ ...config, clickPressure: pressure })}
                          className={`py-3 rounded-lg transition-all capitalize ${
                            config.clickPressure === pressure
                              ? 'bg-[#00FF5A] text-[#0D0F12]'
                              : 'glass border border-white/10 text-gray-300 hover:border-white/30'
                          }`}
                        >
                          {pressure === 'light' ? '가벼움' : pressure === 'standard' ? '표준' : '단단함'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-6 border border-[#4FF3FF]/30 bg-[#4FF3FF]/5">
                    <h4 className="text-white mb-3">버튼 배치</h4>
                    <p className="text-sm text-gray-400 mb-4">
                      제작 시 상세한 버튼 배치를 조정할 수 있습니다.
                    </p>
                    <div className="aspect-video bg-gradient-to-br from-[#111418] to-[#1a1d23] rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">버튼 배치 프리뷰</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Color & Design */}
              {activeSection === 'color' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key="color"
                >
                  <h3 className="text-white mb-6">컬러 & 디자인</h3>
                  
                  <div className="mb-6">
                    <label className="text-gray-300 mb-3 block">주 컬러</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={config.primaryColor}
                        onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                        className="w-20 h-20 rounded-lg cursor-pointer border-2 border-white/20"
                      />
                      <div className="flex-1 glass rounded-lg p-4 border border-white/10">
                        <div className="text-sm text-gray-400 mb-1">선택된 컬러</div>
                        <div className="text-white uppercase">{config.primaryColor}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-gray-300 mb-3 block">보조 컬러</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={config.secondaryColor}
                        onChange={(e) => setConfig({ ...config, secondaryColor: e.target.value })}
                        className="w-20 h-20 rounded-lg cursor-pointer border-2 border-white/20"
                      />
                      <div className="flex-1 glass rounded-lg p-4 border border-white/10">
                        <div className="text-sm text-gray-400 mb-1">선택된 컬러</div>
                        <div className="text-white uppercase">{config.secondaryColor}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-gray-300 mb-3 block">표면 질감</label>
                    <div className="grid grid-cols-2 gap-3">
                      {textures.map((texture) => (
                        <button
                          key={texture.id}
                          onClick={() => setConfig({ ...config, texture: texture.id })}
                          className={`p-4 rounded-lg transition-all ${
                            config.texture === texture.id
                              ? 'ring-2 ring-[#00FF5A]'
                              : 'hover:ring-1 hover:ring-white/30'
                          }`}
                        >
                          <div className={`w-full h-16 rounded-lg mb-2 ${texture.preview}`} />
                          <div className="text-sm text-gray-300">{texture.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-300 mb-3 block">각인 문구 (선택)</label>
                    <input
                      type="text"
                      value={config.engraving}
                      onChange={(e) => setConfig({ ...config, engraving: e.target.value })}
                      placeholder="최대 20자"
                      maxLength={20}
                      className="w-full px-4 py-3 glass rounded-lg border border-white/10 bg-transparent text-white placeholder-gray-500 focus:border-[#00FF5A] focus:outline-none"
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      각인 추가 시 +15,000원
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Sensor & Features */}
              {activeSection === 'sensor' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key="sensor"
                >
                  <h3 className="text-white mb-6">센서 & 기능</h3>
                  
                  <div className="space-y-4">
                    <label className="glass rounded-xl p-6 border border-white/10 flex items-start gap-4 cursor-pointer hover:border-white/30 transition-all">
                      <input
                        type="checkbox"
                        checked={config.aiSensitivity}
                        onChange={(e) => setConfig({ ...config, aiSensitivity: e.target.checked })}
                        className="mt-1 w-5 h-5 rounded accent-[#00FF5A]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white">AI 감도 자동 조정</h4>
                          <span className="text-xs px-2 py-1 bg-[#00FF5A]/20 text-[#00FF5A] rounded">
                            +25K
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">
                          사용 패턴을 학습하여 최적의 마우스 감도를 자동으로 조정합니다.
                        </p>
                      </div>
                    </label>

                    <label className="glass rounded-xl p-6 border border-white/10 flex items-start gap-4 cursor-pointer hover:border-white/30 transition-all">
                      <input
                        type="checkbox"
                        checked={config.gripAssist}
                        onChange={(e) => setConfig({ ...config, gripAssist: e.target.checked })}
                        className="mt-1 w-5 h-5 rounded accent-[#00FF5A]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white">그립 자세 보조</h4>
                          <span className="text-xs px-2 py-1 bg-[#00FF5A]/20 text-[#00FF5A] rounded">
                            +20K
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">
                          잘못된 그립 자세를 감지하고 진동으로 알려줍니다.
                        </p>
                      </div>
                    </label>

                    <label className="glass rounded-xl p-6 border border-white/10 flex items-start gap-4 cursor-pointer hover:border-white/30 transition-all">
                      <input
                        type="checkbox"
                        checked={config.weeklyReport}
                        onChange={(e) => setConfig({ ...config, weeklyReport: e.target.checked })}
                        className="mt-1 w-5 h-5 rounded accent-[#00FF5A]"
                      />
                      <div className="flex-1">
                        <h4 className="text-white mb-2">주간 사용 습관 리포트</h4>
                        <p className="text-sm text-gray-400">
                          매주 사용 패턴과 건강 정보를 분석한 리포트를 받습니다.
                        </p>
                      </div>
                    </label>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right: 3D Preview & Price */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* 3D Preview */}
              <div className="glass-strong rounded-2xl p-6">
                <h4 className="text-white mb-4">실시간 프리뷰</h4>
                <ThreeDModelViewer type="mouse" className="h-64 mb-4" />
                <div className="text-center text-sm text-gray-400">
                  360° 회전 뷰
                </div>
              </div>

              {/* Price */}
              <div className="glass-strong rounded-2xl p-6 border-2 border-[#00FF5A]/30">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-[#00FF5A]" />
                  <h4 className="text-white">예상 가격</h4>
                </div>
                <div className="text-3xl text-[#00FF5A] mb-6">
                  ₩{calculatePrice().toLocaleString()}
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>기본 가격</span>
                    <span>₩{basePrice.toLocaleString()}</span>
                  </div>
                  {getButtonExtra() > 0 && (
                    <div className="flex justify-between text-gray-400">
                      <span>버튼 추가</span>
                      <span>+₩{getButtonExtra().toLocaleString()}</span>
                    </div>
                  )}
                  {config.engraving && (
                    <div className="flex justify-between text-gray-400">
                      <span>각인</span>
                      <span>+₩15,000</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 bg-[#00FF5A] text-[#0D0F12] rounded-xl hover:bg-[#4FF3FF] transition-all glow-green flex items-center justify-center gap-2"
                >
                  <span>주문하기</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Production Time */}
              <div className="glass rounded-xl p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">예상 제작 기간</div>
                <div className="text-white">7-14 영업일</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
