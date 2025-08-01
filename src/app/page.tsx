import {
  FaCalendar,
  FaClock,
  FaUsers,
  FaBookOpen,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <FaStar className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">나의 운명</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/intro"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
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
            <button className="md:hidden">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              명리학으로 알아보는
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                나의 운명
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              사주팔자를 통해 자신의 운명을 이해하고, 인생의 방향을 찾아보세요.
              명리학의 지혜를 통해 더 나은 삶을 살아갈 수 있습니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/intro"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <FaBookOpen className="w-5 h-5" />
              <span>명리학 배우기</span>
            </Link>
            <Link
              href="/tools/calculator"
              className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 flex items-center space-x-2"
            >
              <FaCalendar className="w-5 h-5" />
              <span>운세 보기</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              명리학의 세계로 떠나보세요
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              사주팔자, 육십갑자, 오행의 조화를 통해 인생의 비밀을 풀어보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <FaBookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                명리학 기초
              </h4>
              <p className="text-gray-600 mb-4">
                천간, 지지, 십이지신 등 명리학의 기본 개념을 쉽게 배워보세요.
              </p>
              <a
                href="#"
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center space-x-1"
              >
                <span>자세히 보기</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <FaCalendar className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                사주 해석
              </h4>
              <p className="text-gray-600 mb-4">
                본인의 사주를 통해 성격, 직업, 연애, 건강 등 다양한 면을
                분석해보세요.
              </p>
              <a
                href="#"
                className="text-red-600 hover:text-red-700 font-medium flex items-center space-x-1"
              >
                <span>자세히 보기</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <FaClock className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                운세 보기
              </h4>
              <p className="text-gray-600 mb-4">
                올해의 운세, 월운, 일운을 통해 앞으로의 길을 미리 알아보세요.
              </p>
              <a
                href="#"
                className="text-amber-600 hover:text-amber-700 font-medium flex items-center space-x-1"
              >
                <span>자세히 보기</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              최신 명리학 글
            </h3>
            <p className="text-lg text-gray-600">
              명리학에 대한 깊이 있는 지식과 인사이트를 담은 글들을 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "사주팔자 기초 - 천간과 지지 이해하기",
                excerpt:
                  "명리학의 기본이 되는 천간과 지지에 대해 알아보고, 자신의 사주를 읽는 방법을 배워보세요.",
                date: "2024.01.15",
                category: "기초",
              },
              {
                title: "2024년 운세 - 용년(龍年)의 의미",
                excerpt:
                  "2024년 용년의 특징과 각 띠별 운세를 명리학적 관점에서 분석해보았습니다.",
                date: "2024.01.10",
                category: "운세",
              },
              {
                title: "오행의 조화 - 나의 기운 찾기",
                excerpt:
                  "목화토금수 오행의 특성과 조화를 통해 자신의 기운을 파악하는 방법을 소개합니다.",
                date: "2024.01.05",
                category: "오행",
              },
            ].map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 font-medium flex items-center space-x-1"
                  >
                    <span>읽어보기</span>
                    <FaArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              커뮤니티 준비 중
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              곧 명리학 애호가들과 함께하는 커뮤니티가 오픈됩니다. 서로의 경험을
              나누고 명리학에 대해 토론해보세요.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <FaUsers className="w-5 h-5" />
                <span>명리학 애호가들과 소통</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBookOpen className="w-5 h-5" />
                <span>지식 공유</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar className="w-5 h-5" />
                <span>운세 상담</span>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
            커뮤니티 알림 신청하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <FaStar className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">나의 운명</h4>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                명리학을 통해 자신의 운명을 이해하고, 더 나은 삶을 살아갈 수
                있도록 도와드립니다.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">바로가기</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    명리학 기초
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    사주 해석
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    운세 보기
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    커뮤니티
                  </a>
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
            <p>&copy; 2025 나의 운명. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
