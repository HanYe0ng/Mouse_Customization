// Footer.tsx
import React from "react";
import { Mouse, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#44d62c]/25 blur-lg" />
                <Mouse className="relative h-6 w-6 text-[#44d62c]" />
              </div>
              <div className="leading-tight">
                <p className="text-[0.62rem] uppercase tracking-[0.26em] text-gray-500">
                  KOMMA LAB
                </p>
                <span className="text-xl font-semibold text-white">
                  Project Blackline
                </span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-400">
              AI 기반 손 형태 분석과 맞춤형 쉘 설계로, 손목 부담을 줄이면서
              퍼포먼스를 극대화하는 프리미엄 인체공학 마우스를 제작합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              빠른 링크
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#44d62c] transition-colors">
                  손 스캔 가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#44d62c] transition-colors">
                  제작 프로세스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#44d62c] transition-colors">
                  재질 & 마감 옵션
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#44d62c] transition-colors">
                  샘플 프로젝트
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              고객 지원
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#44d62c] transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#44d62c] transition-colors">
                  배송 & 교환 정책
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#44d62c] transition-colors">
                  B2B 문의
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#44d62c] transition-colors">
                  문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/5 pt-6 text-sm text-gray-500">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© 2025 KOMMA LAB. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-[#44d62c]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-[#44d62c]"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-[#44d62c]"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
