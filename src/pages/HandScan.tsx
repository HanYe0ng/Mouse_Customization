import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Upload, Camera, Smartphone, ArrowRight, Check, AlertCircle } from 'lucide-react';
import StepIndicator from '../components/StepIndicator';

export default function HandScan() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = React.useState<'photo' | 'lidar' | null>(null);
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [dragActive, setDragActive] = React.useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      setUploadedFiles(files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const files = Array.from(e.target.files);
      setUploadedFiles(files);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      navigate('/analysis');
    }, 3000);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <StepIndicator currentStep={1} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">손 스캔하기</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            정확한 분석을 위해 손 사진 또는 3D 스캔 데이터를 업로드해주세요
          </p>
        </motion.div>

        {/* Method Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedMethod('photo')}
            className={`glass-strong rounded-2xl p-10 text-left transition-all ${
              selectedMethod === 'photo'
                ? 'border-2 border-[#00FF5A] glow-green'
                : 'border border-white/10 hover:border-white/30'
            }`}
          >
            <div className="flex items-start justify-between mb-8">
              <div className="w-20 h-20 rounded-2xl bg-[#00FF5A]/20 border border-[#00FF5A]/40 flex items-center justify-center">
                <Camera className="w-9 h-9 text-[#00FF5A]" />
              </div>
              {selectedMethod === 'photo' && (
                <div className="w-10 h-10 rounded-full bg-[#00FF5A] flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#0D0F12]" />
                </div>
              )}
            </div>
            <h3 className="mb-4 text-white">사진 업로드로 3D 스캔</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              일반 스마트폰 카메라로 촬영한 손 사진을 업로드하면 AI가 자동으로 3D 모델을 생성합니다.
            </p>
            <div className="flex items-center gap-3 text-[#00FF5A]">
              <span className="font-medium">추천</span>
              <span className="text-xs px-3 py-1.5 bg-[#00FF5A]/20 rounded-lg">가장 쉬움</span>
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedMethod('lidar')}
            className={`glass-strong rounded-2xl p-10 text-left transition-all ${
              selectedMethod === 'lidar'
                ? 'border-2 border-[#4FF3FF] glow-cyan'
                : 'border border-white/10 hover:border-white/30'
            }`}
          >
            <div className="flex items-start justify-between mb-8">
              <div className="w-20 h-20 rounded-2xl bg-[#4FF3FF]/20 border border-[#4FF3FF]/40 flex items-center justify-center">
                <Smartphone className="w-9 h-9 text-[#4FF3FF]" />
              </div>
              {selectedMethod === 'lidar' && (
                <div className="w-10 h-10 rounded-full bg-[#4FF3FF] flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#0D0F12]" />
                </div>
              )}
            </div>
            <h3 className="mb-4 text-white">iPhone LiDAR 스캔 사용</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              iPhone Pro 모델의 LiDAR 센서로 촬영한 3D 스캔 파일(.usdz, .obj)을 직접 업로드합니다.
            </p>
            <div className="flex items-center gap-3 text-[#4FF3FF]">
              <span className="font-medium">정밀</span>
              <span className="text-xs px-3 py-1.5 bg-[#4FF3FF]/20 rounded-lg">가장 정확</span>
            </div>
          </motion.button>
        </div>

        {/* Upload Area */}
        {selectedMethod && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Instructions */}
              <div className="glass-strong rounded-2xl p-10">
                <h4 className="mb-6 text-white">촬영 가이드</h4>
                <div className="space-y-5">
                  {[
                    '손바닥을 펴고 자연스럽게 놓습니다',
                    '밝은 조명 아래에서 촬영하세요',
                    '손 전체가 프레임에 들어오도록 합니다',
                    '여러 각도에서 촬영하면 더 정확합니다',
                  ].map((instruction, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-[#00FF5A]/20 border border-[#00FF5A] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm text-[#00FF5A] font-medium">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>

                {/* Visual Guide Placeholder */}
                <div className="mt-8 glass rounded-xl p-6 border border-white/10">
                  <div className="aspect-square bg-gradient-to-br from-[#00FF5A]/10 to-[#4FF3FF]/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-400">촬영 예시</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Upload Zone */}
              <div className="lg:col-span-2">
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`glass-strong rounded-2xl p-12 border-2 border-dashed transition-all ${
                    dragActive
                      ? 'border-[#00FF5A] bg-[#00FF5A]/5'
                      : uploadedFiles.length > 0
                      ? 'border-[#4FF3FF] bg-[#4FF3FF]/5'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <input
                    type="file"
                    id="file-upload"
                    multiple
                    accept="image/*,.usdz,.obj"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {uploadedFiles.length === 0 ? (
                    <label htmlFor="file-upload" className="cursor-pointer block text-center">
                      <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="mb-2 text-white">파일을 드래그하거나 클릭하여 업로드</h3>
                      <p className="text-gray-400 mb-6">
                        {selectedMethod === 'photo'
                          ? 'JPG, PNG 파일 (최대 10MB)'
                          : 'USDZ, OBJ 파일 (최대 50MB)'}
                      </p>
                      <div className="inline-block px-6 py-3 bg-[#00FF5A]/20 text-[#00FF5A] rounded-lg border border-[#00FF5A]/40 hover:bg-[#00FF5A]/30 transition-colors">
                        파일 선택
                      </div>
                    </label>
                  ) : (
                    <div>
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-[#00FF5A] flex items-center justify-center glow-green">
                          <Check className="w-8 h-8 text-[#0D0F12]" />
                        </div>
                      </div>
                      <h3 className="text-center mb-4 text-white">
                        {uploadedFiles.length}개 파일 업로드 완료
                      </h3>
                      <div className="space-y-2 mb-6">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 glass rounded-lg">
                            <span className="text-gray-300">{file.name}</span>
                            <span className="text-sm text-gray-400">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={handleAnalyze}
                        className="w-full py-4 bg-[#00FF5A] text-[#0D0F12] rounded-xl hover:bg-[#4FF3FF] transition-all glow-green flex items-center justify-center gap-2"
                      >
                        <span>AI 분석 시작하기</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Info Box */}
                <div className="mt-6 glass rounded-xl p-4 border border-[#4FF3FF]/30 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#4FF3FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300">
                      업로드된 사진은 AI 분석 후 즉시 삭제되며, 어떠한 형태로도 저장되지 않습니다.
                      개인정보 보호를 위해 암호화된 연결을 사용합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Analyzing Modal */}
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-strong rounded-2xl p-12 max-w-md text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 border-4 border-[#00FF5A]/20 rounded-full" />
                <div className="absolute inset-0 border-4 border-[#00FF5A] rounded-full border-t-transparent animate-spin" />
              </div>
              <h3 className="mb-3 text-white">손 형태 분석 중...</h3>
              <p className="text-gray-400">
                AI가 손의 크기, 아치 높이, 그립 스타일을 정밀하게 분석하고 있습니다.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}