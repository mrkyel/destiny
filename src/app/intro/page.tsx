import {
  ArrowRight,
  BookOpen,
  Calendar,
  Star,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function IntroPage() {
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
              <Link href="/intro" className="text-orange-600 font-medium">
                명리학이란?
              </Link>
              <Link
                href="/basics"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            명리학이란?
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            명리학은 우리 조상들이 수천 년간 연구해온 인생의 지혜입니다. 하늘의
            이치를 통해 인간의 운명을 이해하고, 더 나은 삶을 살아가는 방법을
            가르쳐줍니다.
          </p>
        </div>
      </section>

      {/* What is Myeongrihak */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                명리학, 무엇을 배우는가?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  명리학은{" "}
                  <strong className="text-orange-600">천간(天干)</strong>과{" "}
                  <strong className="text-orange-600">지지(地支)</strong>를
                  기반으로 인간의 운명을 분석하는 학문입니다.
                </p>
                <p>
                  태어난{" "}
                  <strong className="text-orange-600">년, 월, 일, 시</strong>를
                  통해 각 사람의 고유한 기운을 파악하고, 인생의 흐름을 이해할 수
                  있습니다.
                </p>
                <p>
                  단순한 점술이 아닌,{" "}
                  <strong className="text-orange-600">자연의 이치</strong>를
                  통해 자신을 이해하고 미래를 준비하는 지혜로운 방법입니다.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                명리학의 핵심 요소
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <span className="text-gray-700">
                    천간(天干) - 하늘의 기운
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <span className="text-gray-700">지지(地支) - 땅의 기운</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <span className="text-gray-700">
                    오행(五行) - 다섯 가지 기운
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    4
                  </div>
                  <span className="text-gray-700">
                    십이지신(十二支神) - 열두 동물
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            왜 명리학을 배워야 할까요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                자신을 이해하기
              </h3>
              <p className="text-gray-600">
                본인의 성격, 장단점, 적성 등을 객관적으로 파악하여 더 나은
                선택을 할 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                시기 선택하기
              </h3>
              <p className="text-gray-600">
                중요한 결정이나 행동의 적절한 시기를 선택하여 성공 확률을 높일
                수 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                관계 이해하기
              </h3>
              <p className="text-gray-600">
                다른 사람과의 관계를 이해하고, 더 나은 소통과 조화를 이룰 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            명리학 학습 로드맵
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    기초 개념 이해
                  </h3>
                  <p className="text-gray-600 mb-4">
                    천간, 지지, 오행, 십이지신의 기본 개념을 차근차근
                    배워봅니다.
                  </p>
                  <Link
                    href="/basics/cheongan-jiji"
                    className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
                  >
                    <span>천간과 지지 배우기</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    사주팔자 이해
                  </h3>
                  <p className="text-gray-600 mb-4">
                    사주팔자의 구성과 의미를 이해하고, 자신의 사주를 읽는 법을
                    배웁니다.
                  </p>
                  <Link
                    href="/saju/intro"
                    className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
                  >
                    <span>사주팔자 배우기</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    실습과 적용
                  </h3>
                  <p className="text-gray-600 mb-4">
                    배운 지식을 바탕으로 실제 사주를 계산하고 운세를 보는 법을
                    연습합니다.
                  </p>
                  <Link
                    href="/tools/calculator"
                    className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium"
                  >
                    <span>사주 계산기 사용하기</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            지금 시작해보세요!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            명리학의 세계로 첫 발을 내딛어보세요. 천간과 지지부터 차근차근
            배워나가며 자신의 운명을 이해해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/basics/cheongan-jiji"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>첫 번째 강의 시작하기</span>
            </Link>
            <Link
              href="/"
              className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>메인으로 돌아가기</span>
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
