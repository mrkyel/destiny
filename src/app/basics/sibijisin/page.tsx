import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaDog,
} from "react-icons/fa";
import {
  GiSeatedMouse,
  GiTigerHead,
  GiRabbit,
  GiSnake,
  GiSheep,
  GiMonkey,
  GiRooster,
  GiPig,
  GiSpikedDragonHead,
  GiHorseHead,
} from "react-icons/gi";
import { PiCow } from "react-icons/pi";

import Link from "next/link";

export default function SibijisinPage() {
  const animals = [
    {
      name: "자(子)",
      animal: "쥐",
      icon: GiSeatedMouse,
      element: "수",
      time: "23:00-01:00",
      month: "12월",
      direction: "북",
      characteristics: ["지혜", "재치", "적응력", "경제적"],
      personality:
        "똑똑하고 재치있으며, 적응력이 뛰어나고 경제적 감각이 좋습니다.",
      lucky: ["재물운", "학업운", "사업운"],
      unlucky: ["건강", "인간관계"],
    },
    {
      name: "축(丑)",
      animal: "소",
      icon: PiCow,
      element: "토",
      time: "01:00-03:00",
      month: "1월",
      direction: "북동",
      characteristics: ["성실", "인내", "책임감", "안정"],
      personality:
        "성실하고 인내심이 강하며, 책임감이 많고 안정적인 성격입니다.",
      lucky: ["직업운", "건강운", "가정운"],
      unlucky: ["연애운", "여행운"],
    },
    {
      name: "인(寅)",
      animal: "호랑이",
      icon: GiTigerHead,
      element: "목",
      time: "03:00-05:00",
      month: "2월",
      direction: "동북",
      characteristics: ["용기", "리더십", "도전", "정의감"],
      personality:
        "용감하고 리더십이 있으며, 도전정신이 강하고 정의감이 뛰어납니다.",
      lucky: ["사업운", "명예운", "리더십"],
      unlucky: ["인내심", "세심함"],
    },
    {
      name: "묘(卯)",
      animal: "토끼",
      icon: GiRabbit,
      element: "목",
      time: "05:00-07:00",
      month: "3월",
      direction: "동",
      characteristics: ["우아함", "예술성", "평화", "친화력"],
      personality:
        "우아하고 예술적 감각이 있으며, 평화를 좋아하고 친화력이 좋습니다.",
      lucky: ["예술운", "인간관계", "평화"],
      unlucky: ["결단력", "경쟁심"],
    },
    {
      name: "진(辰)",
      animal: "용",
      icon: GiSpikedDragonHead,
      element: "토",
      time: "07:00-09:00",
      month: "4월",
      direction: "동남",
      characteristics: ["강력함", "성공", "행운", "자신감"],
      personality: "강력하고 성공지향적이며, 행운이 많고 자신감이 넘칩니다.",
      lucky: ["성공운", "행운", "명예"],
      unlucky: ["겸손함", "인내심"],
    },
    {
      name: "사(巳)",
      animal: "뱀",
      icon: GiSnake,
      element: "화",
      time: "09:00-11:00",
      month: "5월",
      direction: "남동",
      characteristics: ["지혜", "직감", "신비", "집중력"],
      personality:
        "지혜롭고 직감이 뛰어나며, 신비로운 매력과 집중력이 강합니다.",
      lucky: ["지혜운", "직감", "학업운"],
      unlucky: ["신뢰", "소통"],
    },
    {
      name: "오(午)",
      animal: "말",
      icon: GiHorseHead,
      element: "화",
      time: "11:00-13:00",
      month: "6월",
      direction: "남",
      characteristics: ["활발함", "자유", "열정", "에너지"],
      personality: "활발하고 자유를 추구하며, 열정적이고 에너지가 넘칩니다.",
      lucky: ["활동운", "자유", "열정"],
      unlucky: ["안정", "인내심"],
    },
    {
      name: "미(未)",
      animal: "양",
      icon: GiSheep,
      element: "토",
      time: "13:00-15:00",
      month: "7월",
      direction: "남서",
      characteristics: ["온순함", "예술성", "친화력", "평화"],
      personality:
        "온순하고 예술적 감각이 있으며, 친화력이 좋고 평화를 추구합니다.",
      lucky: ["예술운", "친화력", "평화"],
      unlucky: ["결단력", "경쟁심"],
    },
    {
      name: "신(申)",
      animal: "원숭이",
      icon: GiMonkey,
      element: "금",
      time: "15:00-17:00",
      month: "8월",
      direction: "서남",
      characteristics: ["재치", "창의성", "적응력", "호기심"],
      personality: "재치있고 창의적이며, 적응력이 뛰어나고 호기심이 많습니다.",
      lucky: ["창의운", "적응력", "학습운"],
      unlucky: ["집중력", "끈기"],
    },
    {
      name: "유(酉)",
      animal: "닭",
      icon: GiRooster,
      element: "금",
      time: "17:00-19:00",
      month: "9월",
      direction: "서",
      characteristics: ["정직", "시간관념", "자부심", "정리정돈"],
      personality:
        "정직하고 시간관념이 강하며, 자부심이 높고 정리정돈을 잘합니다.",
      lucky: ["정직운", "시간운", "정리운"],
      unlucky: ["겸손함", "유연성"],
    },
    {
      name: "술(戌)",
      animal: "개",
      icon: FaDog,
      element: "토",
      time: "19:00-21:00",
      month: "10월",
      direction: "서북",
      characteristics: ["충성", "정의감", "친구", "보호"],
      personality:
        "충성스럽고 정의감이 강하며, 친구를 소중히 하고 보호본능이 강합니다.",
      lucky: ["친구운", "정의운", "보호운"],
      unlucky: ["독립성", "경쟁심"],
    },
    {
      name: "해(亥)",
      animal: "돼지",
      icon: GiPig,
      element: "수",
      time: "21:00-23:00",
      month: "11월",
      direction: "북서",
      characteristics: ["성실", "관대함", "평화", "행복"],
      personality: "성실하고 관대하며, 평화를 추구하고 행복한 삶을 살아갑니다.",
      lucky: ["행복운", "관대운", "평화운"],
      unlucky: ["경제관념", "경쟁심"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <FaStar className="w-5 h-5 text-white" />
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
            <Link
              href="/basics/ohang"
              className="hover:text-orange-600 transition-colors"
            >
              오행
            </Link>
            <span>/</span>
            <span className="text-orange-600 font-medium">십이지신</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            십이지신(十二支神)
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            열두 동물이 상징하는 기운과 특성입니다. 각 동물은 고유한 성격과
            운세를 나타내며, 인간의 성격과 운명을 이해하는 중요한 열쇠가 됩니다.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-orange-100 px-4 py-2 rounded-lg">
              <span className="text-orange-700 font-semibold">
                예상 학습시간: 25분
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

      {/* What is Sibijisin */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            십이지신이란 무엇인가요?
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-100 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🌟 십이지신의 기본 개념
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  십이지신의 의미
                </h4>
                <p className="text-gray-700 mb-4">
                  <strong>십이지신(十二支神)</strong>은 12개의 동물이 상징하는
                  기운으로, 시간, 방향, 계절을 나타내며 인간의 성격과 운세를
                  분석하는 데 사용됩니다.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>시간:</strong> 하루 24시간을 12개 구간으로 분할
                  </li>
                  <li>
                    • <strong>방향:</strong> 12방위를 동물로 상징
                  </li>
                  <li>
                    • <strong>계절:</strong> 12개월을 동물로 표현
                  </li>
                  <li>
                    • <strong>성격:</strong> 인간의 성격 특성을 동물로 비유
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  십이지신의 활용
                </h4>
                <p className="text-gray-700 mb-4">
                  각 동물은 고유한 특성과 의미를 가지며, 사주 분석에서 중요한
                  역할을 합니다.
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <FaCalendar className="w-4 h-4 text-blue-600" />
                    <span>
                      <strong>시간:</strong> 태어난 시간대의 기운
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>방향:</strong> 길한 방향과 장소
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaClock className="w-4 h-4 text-purple-600" />
                    <span>
                      <strong>운세:</strong> 각 시기의 운세 분석
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Twelve Animals Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            열두 동물 상세 설명
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {animals.map((animal, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Animal Header */}
                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <animal.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {animal.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">{animal.animal}</p>
                  <div className="flex justify-center space-x-2 text-sm">
                    <span className="px-2 py-1 bg-orange-200 text-orange-700 rounded">
                      {animal.element}
                    </span>
                    <span className="px-2 py-1 bg-blue-200 text-blue-700 rounded">
                      {animal.time}
                    </span>
                  </div>
                </div>

                {/* Animal Details */}
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Basic Info */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        기본 정보
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>월:</span>
                          <span className="font-medium">{animal.month}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>방향:</span>
                          <span className="font-medium">
                            {animal.direction}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Characteristics */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">특성</h4>
                      <div className="flex flex-wrap gap-1">
                        {animal.characteristics.map((char, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Personality */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">성격</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {animal.personality}
                      </p>
                    </div>

                    {/* Lucky/Unlucky */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">
                          길한 운세
                        </h4>
                        <div className="space-y-1">
                          {animal.lucky.map((luck, idx) => (
                            <div
                              key={idx}
                              className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded"
                            >
                              {luck}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2 text-sm">
                          주의할 점
                        </h4>
                        <div className="space-y-1">
                          {animal.unlucky.map((unluck, idx) => (
                            <div
                              key={idx}
                              className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded"
                            >
                              {unluck}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Application */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            십이지신의 실제 활용
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🕐 시간대별 기운
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>자시(子時):</strong> 23:00-01:00 - 지혜와 재치의 시간
                </p>
                <p>
                  <strong>축시(丑時):</strong> 01:00-03:00 - 성실과 인내의 시간
                </p>
                <p>
                  <strong>인시(寅時):</strong> 03:00-05:00 - 용기와 도전의 시간
                </p>
                <p>
                  <strong>묘시(卯時):</strong> 05:00-07:00 - 우아함과 평화의
                  시간
                </p>
                <p>
                  <strong>진시(辰時):</strong> 07:00-09:00 - 강력함과 성공의
                  시간
                </p>
                <p>
                  <strong>사시(巳時):</strong> 09:00-11:00 - 지혜와 직감의 시간
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🧭 방향별 의미
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>북:</strong> 지혜와 지식의 방향
                </p>
                <p>
                  <strong>동:</strong> 새로운 시작과 성장의 방향
                </p>
                <p>
                  <strong>남:</strong> 활발함과 열정의 방향
                </p>
                <p>
                  <strong>서:</strong> 정리와 마무리의 방향
                </p>
                <p>
                  <strong>중앙:</strong> 안정과 균형의 방향
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
                • <strong>사주 분석:</strong> 태어난 시간대의 동물 기운으로 성격
                분석
              </p>
              <p>
                • <strong>운세 보기:</strong> 각 동물의 특성을 활용한 운세 해석
              </p>
              <p>
                • <strong>관계 분석:</strong> 동물 간의 조화와 상극 관계 분석
              </p>
              <p>
                • <strong>시기 선택:</strong> 각 동물이 강한 시기를 파악하여
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
              href="/basics/ohang"
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>오행 돌아가기</span>
            </Link>

            <Link
              href="/basics/yuksipgapja"
              className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
            >
              <span>다음: 육십갑자 배우기</span>
              <FaArrowRight className="w-4 h-4" />
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
