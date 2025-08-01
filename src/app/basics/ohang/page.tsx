import {
  ArrowLeft,
  ArrowRight,
  Star,
  Leaf,
  Flame,
  Mountain,
  Zap,
  Droplets,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus,
} from "lucide-react";
import Link from "next/link";

export default function OhangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">나의 운명</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/intro"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                명리학이란?
              </Link>
              <Link href="/basics" className="text-orange-600 font-medium">
                기초학습
              </Link>
              <Link
                href="/saju"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                사주
              </Link>
              <Link
                href="/tools"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                도구
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white/50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              홈
            </Link>
            <span>/</span>
            <Link
              href="/intro"
              className="hover:text-orange-600 transition-colors"
            >
              명리학이란?
            </Link>
            <span>/</span>
            <Link
              href="/basics/cheongan-jiji"
              className="hover:text-orange-600 transition-colors"
            >
              천간과 지지
            </Link>
            <span>/</span>
            <span className="text-orange-600 font-medium">오행</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            오행(五行)
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            우주의 모든 기운을 다섯 가지로 분류한 개념입니다. 목(木), 화(火),
            토(土), 금(金), 수(水)가 서로 조화를 이루며 만물을 생성하고
            변화시킵니다.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-orange-100 px-4 py-2 rounded-lg">
              <span className="text-orange-700 font-semibold">
                예상 학습시간: 20분
              </span>
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <span className="text-green-700 font-semibold">
                난이도: ⭐⭐⭐
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Ohang */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            오행이란 무엇인가요?
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🌟 오행의 기본 개념
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  오행의 의미
                </h4>
                <p className="text-gray-700 mb-4">
                  <strong>오행(五行)</strong>은 우주의 모든 현상을 다섯 가지
                  기본 기운으로 분류한 동양철학의 핵심 개념입니다.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>목(木)</strong> - 나무, 성장, 확장
                  </li>
                  <li>
                    • <strong>화(火)</strong> - 불, 열, 활발함
                  </li>
                  <li>
                    • <strong>토(土)</strong> - 흙, 중앙, 안정
                  </li>
                  <li>
                    • <strong>금(金)</strong> - 쇠, 단단함, 수렴
                  </li>
                  <li>
                    • <strong>수(水)</strong> - 물, 흐름, 지혜
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  오행의 특성
                </h4>
                <p className="text-gray-700 mb-4">
                  각 오행은 고유한 성질을 가지며, 서로{" "}
                  <strong>상생(相生)</strong>과<strong> 상극(相剋)</strong>{" "}
                  관계를 이룹니다.
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Plus className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>상생:</strong> 서로 돕고 생성하는 관계
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Minus className="w-4 h-4 text-red-600" />
                    <span>
                      <strong>상극:</strong> 서로 억제하고 제어하는 관계
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Elements Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            다섯 가지 기운 상세 설명
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목(木) */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">목(木)</h3>
                  <p className="text-green-600 font-medium">나무의 기운</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    기본 특성
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 성장, 확장, 발전</li>
                    <li>• 인내, 끈기, 의지</li>
                    <li>• 창의성, 상상력</li>
                    <li>• 봄, 동쪽, 아침</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    인간적 특성
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 리더십, 야망</li>
                    <li>• 도전정신, 모험심</li>
                    <li>• 공정함, 정의감</li>
                    <li>• 때로는 고집스러움</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">상징</h4>
                  <p className="text-gray-700">
                    나무, 식물, 종이, 목재, 녹색, 직사각형, 바람
                  </p>
                </div>
              </div>
            </div>

            {/* 화(火) */}
            <div className="bg-gradient-to-br from-red-50 to-pink-100 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">화(火)</h3>
                  <p className="text-red-600 font-medium">불의 기운</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    기본 특성
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 열, 빛, 활발함</li>
                    <li>• 열정, 에너지</li>
                    <li>• 표현력, 소통</li>
                    <li>• 여름, 남쪽, 정오</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    인간적 특성
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 카리스마, 매력</li>
                    <li>• 낙관적, 긍정적</li>
                    <li>• 예술적 감각</li>
                    <li>• 때로는 성급함</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">상징</h4>
                  <p className="text-gray-700">
                    불, 태양, 전기, 빨간색, 삼각형, 열, 조명
                  </p>
                </div>
              </div>
            </div>

            {/* 토(土) */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">토(土)</h3>
                  <p className="text-yellow-600 font-medium">흙의 기운</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    기본 특성
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 안정, 균형, 중앙</li>
                    <li>• 신뢰, 책임감</li>
                    <li>• 실용성, 현실성</li>
                    <li>• 계절의 전환기</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    인간적 특성
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 신뢰할 수 있음</li>
                    <li>• 인내심, 끈기</li>
                    <li>• 실용적 사고</li>
                    <li>• 때로는 보수적</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">상징</h4>
                  <p className="text-gray-700">
                    흙, 산, 돌, 노란색, 정사각형, 중앙, 안정
                  </p>
                </div>
              </div>
            </div>

            {/* 금(金) */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">금(金)</h3>
                  <p className="text-gray-600 font-medium">쇠의 기운</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    기본 특성
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 단단함, 견고함</li>
                    <li>• 정리, 정돈</li>
                    <li>• 정의, 공정함</li>
                    <li>• 가을, 서쪽, 저녁</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    인간적 특성
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 원칙주의, 정의감</li>
                    <li>• 정리정돈 능력</li>
                    <li>• 분석적 사고</li>
                    <li>• 때로는 냉정함</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">상징</h4>
                  <p className="text-gray-700">
                    쇠, 금속, 흰색, 원형, 서쪽, 정리, 단단함
                  </p>
                </div>
              </div>
            </div>

            {/* 수(水) */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">수(水)</h3>
                  <p className="text-blue-600 font-medium">물의 기운</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    기본 특성
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 흐름, 적응성</li>
                    <li>• 지혜, 지식</li>
                    <li>• 감정, 직감</li>
                    <li>• 겨울, 북쪽, 밤</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    인간적 특성
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 지적 호기심</li>
                    <li>• 직감적 판단</li>
                    <li>• 감정적 깊이</li>
                    <li>• 때로는 우유부단</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">상징</h4>
                  <p className="text-gray-700">
                    물, 바다, 검은색, 물결, 북쪽, 지혜, 흐름
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sangsaeng Relationship */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            상생(相生) 관계
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              서로 돕고 생성하는 관계
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  from: "목(木)",
                  to: "화(火)",
                  desc: "나무가 불을 만듦",
                  icon: ArrowUpRight,
                },
                {
                  from: "화(火)",
                  to: "토(土)",
                  desc: "불이 재를 만듦",
                  icon: ArrowUpRight,
                },
                {
                  from: "토(土)",
                  to: "금(金)",
                  desc: "흙에서 쇠가 나옴",
                  icon: ArrowUpRight,
                },
                {
                  from: "금(金)",
                  to: "수(水)",
                  desc: "쇠가 물을 모음",
                  icon: ArrowUpRight,
                },
                {
                  from: "수(水)",
                  to: "목(木)",
                  desc: "물이 나무를 키움",
                  icon: ArrowUpRight,
                },
              ].map((relation, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg text-center"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {relation.from}
                    </span>
                    <relation.icon className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {relation.to}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{relation.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-sm text-green-800 text-center">
                <strong>💡 상생의 의미:</strong> 서로 돕고 생성하는 관계로,
                조화롭고 긍정적인 영향을 줍니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sangguk Relationship */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            상극(相剋) 관계
          </h2>

          <div className="bg-gradient-to-r from-red-50 to-pink-100 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              서로 억제하고 제어하는 관계
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  from: "목(木)",
                  to: "토(土)",
                  desc: "나무가 흙을 뚫음",
                  icon: ArrowDownRight,
                },
                {
                  from: "토(土)",
                  to: "수(水)",
                  desc: "흙이 물을 막음",
                  icon: ArrowDownRight,
                },
                {
                  from: "수(水)",
                  to: "화(火)",
                  desc: "물이 불을 끔",
                  icon: ArrowDownRight,
                },
                {
                  from: "화(火)",
                  to: "금(金)",
                  desc: "불이 쇠를 녹임",
                  icon: ArrowDownRight,
                },
                {
                  from: "금(金)",
                  to: "목(木)",
                  desc: "쇠가 나무를 자름",
                  icon: ArrowDownRight,
                },
              ].map((relation, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg text-center"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {relation.from}
                    </span>
                    <relation.icon className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {relation.to}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{relation.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-red-100 rounded-lg">
              <p className="text-sm text-red-800 text-center">
                <strong>⚠️ 상극의 의미:</strong> 서로 억제하고 제어하는 관계로,
                균형을 맞추는 역할을 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Application */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            오행의 실제 적용
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🎨 색상과 디자인
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>목:</strong> 녹색, 파란색 - 성장과 발전
                </p>
                <p>
                  <strong>화:</strong> 빨간색, 주황색 - 열정과 에너지
                </p>
                <p>
                  <strong>토:</strong> 노란색, 갈색 - 안정과 신뢰
                </p>
                <p>
                  <strong>금:</strong> 흰색, 회색 - 깔끔함과 정리
                </p>
                <p>
                  <strong>수:</strong> 검은색, 파란색 - 지혜와 깊이
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🏠 방향과 공간
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>목:</strong> 동쪽 - 새로운 시작
                </p>
                <p>
                  <strong>화:</strong> 남쪽 - 활발한 활동
                </p>
                <p>
                  <strong>토:</strong> 중앙 - 안정과 균형
                </p>
                <p>
                  <strong>금:</strong> 서쪽 - 정리와 마무리
                </p>
                <p>
                  <strong>수:</strong> 북쪽 - 지혜와 휴식
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              💡 명리학에서의 활용
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>
                • <strong>사주 분석:</strong> 각 오행의 강약을 파악하여 성격과
                운세 분석
              </p>
              <p>
                • <strong>운세 보기:</strong> 부족한 오행을 보완하여 균형 잡힌
                삶 추구
              </p>
              <p>
                • <strong>관계 분석:</strong> 상생상극 관계를 통해 인간관계 이해
              </p>
              <p>
                • <strong>시기 선택:</strong> 각 오행이 강한 시기를 파악하여
                중요한 일 계획
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link
              href="/basics/cheongan-jiji"
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>천간과 지지 돌아가기</span>
            </Link>

            <Link
              href="/basics/sibijisin"
              className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
            >
              <span>다음: 십이지신 배우기</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">나의 운명</h4>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                명리학을 통해 자신의 운명을 이해하고, 더 나은 삶을 살아갈 수
                있도록 도와드립니다.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">학습하기</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/intro"
                    className="hover:text-white transition-colors"
                  >
                    명리학이란?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/basics"
                    className="hover:text-white transition-colors"
                  >
                    기초학습
                  </Link>
                </li>
                <li>
                  <Link
                    href="/saju"
                    className="hover:text-white transition-colors"
                  >
                    사주
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools"
                    className="hover:text-white transition-colors"
                  >
                    도구
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">연락처</h5>
              <ul className="space-y-2 text-gray-400">
                <li>이메일: contact@my-destiny.com</li>
                <li>카카오톡: @my-destiny</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 나의 운명. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
