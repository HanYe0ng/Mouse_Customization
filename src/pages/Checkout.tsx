import React from 'react';
import { motion } from 'motion/react';
import { Check, Package, Truck, Calendar, AlertCircle, Download } from 'lucide-react';
import StepIndicator from '../components/StepIndicator';
import ThreeDModelViewer from '../components/ThreeDModelViewer';
import { useLocation } from 'react-router-dom';

export default function Checkout() {
  const [orderPlaced, setOrderPlaced] = React.useState(false);
  const location = useLocation();
  const state = location.state as
    | {
        config?: {
          height: number;
          width: number;
          arcCurvature: number;
          thumbDepth: number;
          material: string;
          buttonCount: number;
          clickPressure: 'light' | 'standard' | 'firm' | string;
          primaryColor: string;
          secondaryColor: string;
          texture: string;
          engraving: string;
          aiSensitivity: boolean;
          gripAssist: boolean;
          weeklyReport: boolean;
        };
        totalPrice?: number;
      }
    | undefined;

  // ✅ 기본값에서 engraving을 비워둔다 (각인 없음이 기본)
  const defaultConfig = {
    height: 60,
    width: 65,
    arcCurvature: 70,
    thumbDepth: 50,
    material: 'ABS',
    buttonCount: 5,
    clickPressure: 'standard' as const,
    primaryColor: '#00FF5A',
    secondaryColor: '#0D0F12',
    texture: 'matte',
    engraving: '', // ← 여기!
    aiSensitivity: true,
    gripAssist: true,
    weeklyReport: false,
  };

  const config = state?.config ?? defaultConfig;

  // 라벨 매핑
  const materialLabels: Record<string, string> = {
    ABS: 'ABS 플라스틱',
    PLA: 'PLA 플라스틱',
    WOD: '목재 필라멘트',
    Met: '메탈',
    CER: '세라믹',
  };

  const textureLabels: Record<string, string> = {
    matte: '무광 매트',
    glossy: '유광 글로시',
    'soft-touch': '소프트 터치',
    rubber: '러버 코팅',
  };

  const clickPressureLabel =
    config.clickPressure === 'light'
      ? '가벼움'
      : config.clickPressure === 'standard'
      ? '표준'
      : config.clickPressure === 'firm'
      ? '단단함'
      : config.clickPressure;

  // 가격 로직 (Customization과 동일하게)
  const basePrice = 89000;

  const getButtonExtra = (buttonCount: number) => {
    switch (buttonCount) {
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

  const buttonExtra = getButtonExtra(config.buttonCount);
  const engravingExtra = config.engraving ? 15000 : 0; // ✅ engraving이 비어있으면 0

  // Customization에서 넘겨준 totalPrice가 있으면 그 값을 신뢰
  const totalPrice =
    state?.totalPrice ?? basePrice + buttonExtra + engravingExtra;

  const productionTime = '7-14 영업일';

  // 추가 기능 라벨
  const featureList: string[] = [];
  if (config.aiSensitivity) featureList.push('AI 감도 자동 조정');
  if (config.gripAssist) featureList.push('그립 자세 보조');
  if (config.weeklyReport) featureList.push('주간 사용 습관 리포트');

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  // 주문 완료 화면
  if (orderPlaced) {
    return (
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#00FF5A]/20 border-2 border-[#00FF5A] flex items-center justify-center glow-green">
              <Check className="w-12 h-12 text-[#00FF5A]" />
            </div>
            <h2 className="mb-4">주문이 완료되었습니다!</h2>
            <p className="text-xl text-gray-400 mb-8">
              주문번호: <span className="text-[#00FF5A]">EGM-2025-001234</span>
            </p>

            <div className="glass-strong rounded-2xl p-8 mb-8 text-left">
              <h3 className="text-white mb-6">다음 단계</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Package,
                    title: '주문 확인',
                    description: '주문 내역을 이메일로 발송했습니다.',
                    time: '완료',
                  },
                  {
                    icon: Calendar,
                    title: '제작 시작',
                    description: '3D 프린팅 및 수작업 조립이 시작됩니다.',
                    time: '1-2일 내',
                  },
                  {
                    icon: Truck,
                    title: '배송',
                    description: '프리미엄 패키징으로 안전하게 배송됩니다.',
                    time: '7-14일 내',
                  },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 glass rounded-xl p-6 border border-white/10"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#00FF5A]/20 border border-[#00FF5A]/40 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#00FF5A]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-white">{step.title}</h4>
                          <span className="text-xs px-2 py-1 bg-[#4FF3FF]/20 text-[#4FF3FF] rounded">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 glass rounded-xl hover:bg-white/10 transition-all border border-white/20 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                <span>주문서 다운로드</span>
              </button>
              <button className="px-8 py-4 bg-[#00FF5A] text-[#0D0F12] rounded-xl hover:bg-[#4FF3FF] transition-all glow-green">
                주문 내역 보기
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // 주문 확인 화면
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <StepIndicator currentStep={5} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">주문 확인</h2>
          <p className="text-xl text-gray-400">
            맞춤 제작 정보를 최종 확인하고 주문을 완료하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* 3D Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-strong rounded-2xl p-8"
            >
              <h3 className="text-white mb-6">맞춤형 마우스 프리뷰</h3>
              <ThreeDModelViewer type="mouse" className="h-96" />
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-strong rounded-2xl p-8"
            >
              <h3 className="text-white mb-6">제작 사양</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-gray-400 mb-4">크기 & 형태</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">높이</span>
                      <span className="text-white">{config.height}mm</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">너비</span>
                      <span className="text-white">{config.width}mm</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">아치 곡률</span>
                      <span className="text-white">
                        {config.arcCurvature}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">엄지 깊이</span>
                      <span className="text-white">{config.thumbDepth}%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-400 mb-4">버튼 & 기능</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">버튼 개수</span>
                      <span className="text-white">
                        {config.buttonCount}개
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">클릭 압력</span>
                      <span className="text-white">{clickPressureLabel}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-gray-400 mb-4">재질 & 디자인</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">재질</span>
                      <span className="text-white">
                        {materialLabels[config.material] ?? config.material}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">표면 질감</span>
                      <span className="text-white">
                        {textureLabels[config.texture] ?? config.texture}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">각인</span>
                      <span className="text-white">
                        {config.engraving || '없음'}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-400 mb-4">컬러</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">주 컬러</span>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded border border-white/20"
                          style={{ backgroundColor: config.primaryColor }}
                        />
                        <span className="text-white text-sm uppercase">
                          {config.primaryColor}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">보조 컬러</span>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded border border-white/20"
                          style={{ backgroundColor: config.secondaryColor }}
                        />
                        <span className="text-white text-sm uppercase">
                          {config.secondaryColor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-gray-400 mb-4">추가 기능</h4>
                {featureList.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {featureList.map((feature, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 glass rounded-lg border border-[#00FF5A]/30 text-sm text-[#00FF5A]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">
                    선택된 추가 기능이 없습니다.
                  </p>
                )}
              </div>
            </motion.div>

            {/* Production Note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-6 border border-[#4FF3FF]/30 bg-[#4FF3FF]/5 flex items-start gap-4"
            >
              <AlertCircle className="w-6 h-6 text-[#4FF3FF] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white mb-2">맞춤 제작 안내</h4>
                <p className="text-sm text-gray-300">
                  모든 제품은 주문 제작 방식으로 3D 프린팅 후 수작업 조립됩니다.
                  제작 과정은 이메일로 실시간 알림을 받으실 수 있으며,
                  완성 후 품질 검수를 거쳐 프리미엄 패키징으로 배송됩니다.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Breakdown */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-strong rounded-2xl p-8"
              >
                <h3 className="text-white mb-6">주문 요약</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">기본 가격</span>
                    <span className="text-white">
                      ₩{basePrice.toLocaleString()}
                    </span>
                  </div>
                  {buttonExtra > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">버튼 추가</span>
                      <span className="text-white">
                        ₩{buttonExtra.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {engravingExtra > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">각인</span>
                      <span className="text-white">
                        ₩{engravingExtra.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-white">총 금액</span>
                  <span className="text-3xl text-[#00FF5A]">
                    ₩{totalPrice.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full py-4 bg-[#00FF5A] text-[#0D0F12] rounded-xl hover:bg-[#4FF3FF] transition-all glow-green flex items-center justify-center gap-2 mb-4"
                >
                  <span>제작 요청하기</span>
                  <Check className="w-5 h-5" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  주문 완료 시 결제 페이지로 이동합니다
                </p>
              </motion.div>

              {/* Production Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="glass rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-[#4FF3FF]" />
                  <h4 className="text-white">예상 제작 기간</h4>
                </div>
                <div className="text-2xl text-[#4FF3FF] mb-2">
                  {productionTime}
                </div>
                <p className="text-sm text-gray-400">
                  영업일 기준, 배송 기간 별도
                </p>
              </motion.div>

              {/* Shipping */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-5 h-5 text-[#00FF5A]" />
                  <h4 className="text-white">배송</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  전국 무료 배송 (제주/도서산간 제외)
                </p>
                <p className="text-sm text-gray-400">
                  프리미엄 패키징 포함
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
