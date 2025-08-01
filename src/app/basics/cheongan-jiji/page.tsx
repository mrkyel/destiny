import { FaArrowLeft, FaArrowRight, FaStar, FaDog } from "react-icons/fa";
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
import { Sun, Moon, Zap, Droplets, Mountain, Leaf } from "lucide-react";
import Link from "next/link";

export default function CheonganJijiPage() {
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
            <span className="text-orange-600 font-medium">천간과 지지</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            천간(天干)과 지지(地支)
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            명리학의 가장 기본이 되는 개념입니다. 하늘의 기운(천간)과 땅의
            기운(지지)이 만나서 인간의 운명을 만들어갑니다.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-orange-100 px-4 py-2 rounded-lg">
              <span className="text-orange-700 font-semibold">
                예상 학습시간: 15분
              </span>
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <span className="text-green-700 font-semibold">난이도: ⭐⭐</span>
            </div>
          </div>
        </div>
      </section>

      {/* What are Cheongan and Jiji */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            천간과 지지란 무엇인가요?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 천간 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">천간(天干)</h3>
              </div>
              <p className="text-gray-700 mb-6">
                <strong>하늘의 기운</strong>을 나타내는 10개의 기호입니다.
                태양의 움직임과 계절의 변화를 상징하며, 인간의 정신적 특성을
                나타냅니다.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">천간의 특징:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 양(陽)의 기운을 가짐</li>
                  <li>• 하늘에서 내려오는 기운</li>
                  <li>• 인간의 정신, 의지, 사고를 상징</li>
                  <li>• 계절과 시간의 변화를 나타냄</li>
                </ul>
              </div>
            </div>

            {/* 지지 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Moon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">지지(地支)</h3>
              </div>
              <p className="text-gray-700 mb-6">
                <strong>땅의 기운</strong>을 나타내는 12개의 기호입니다. 달의
                움직임과 지구의 변화를 상징하며, 인간의 육체적 특성을
                나타냅니다.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">지지의 특징:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 음(陰)의 기운을 가짐</li>
                  <li>• 땅에서 올라오는 기운</li>
                  <li>• 인간의 육체, 감정, 본능을 상징</li>
                  <li>• 공간과 방향을 나타냄</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cheongan Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            10천간(天干) 상세 설명
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                name: "갑(甲)",
                element: "목",
                nature: "양목",
                meaning: "나무의 싹",
                icon: Leaf,
                color: "green",
              },
              {
                name: "을(乙)",
                element: "목",
                nature: "음목",
                meaning: "나무의 가지",
                icon: Leaf,
                color: "emerald",
              },
              {
                name: "병(丙)",
                element: "화",
                nature: "양화",
                meaning: "태양의 빛",
                icon: Sun,
                color: "red",
              },
              {
                name: "정(丁)",
                element: "화",
                nature: "음화",
                meaning: "달빛",
                icon: Moon,
                color: "pink",
              },
              {
                name: "무(戊)",
                element: "토",
                nature: "양토",
                meaning: "산의 흙",
                icon: Mountain,
                color: "yellow",
              },
              {
                name: "기(己)",
                element: "토",
                nature: "음토",
                meaning: "평야의 흙",
                icon: Mountain,
                color: "amber",
              },
              {
                name: "경(庚)",
                element: "금",
                nature: "양금",
                meaning: "쇠의 견고함",
                icon: Zap,
                color: "gray",
              },
              {
                name: "신(辛)",
                element: "금",
                nature: "음금",
                meaning: "쇠의 예리함",
                icon: Zap,
                color: "slate",
              },
              {
                name: "임(壬)",
                element: "수",
                nature: "양수",
                meaning: "바다의 물",
                icon: Droplets,
                color: "blue",
              },
              {
                name: "계(癸)",
                element: "수",
                nature: "음수",
                meaning: "이슬의 물",
                icon: Droplets,
                color: "cyan",
              },
            ].map((cheongan, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-12 h-12 bg-${cheongan.color}-100 rounded-lg flex items-center justify-center mb-4 mx-auto`}
                >
                  <cheongan.icon
                    className={`w-6 h-6 text-${cheongan.color}-600`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {cheongan.name}
                </h3>
                <div className="text-center space-y-1">
                  <p className="text-sm text-gray-600">
                    오행: {cheongan.element}
                  </p>
                  <p className="text-sm text-gray-600">
                    성질: {cheongan.nature}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {cheongan.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jiji Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            12지지(地支) 상세 설명
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "자(子)",
                animal: "쥐",
                icon: GiSeatedMouse,
                element: "수",
                time: "23:00-01:00",
                month: "12월",
                direction: "북",
              },
              {
                name: "축(丑)",
                animal: "소",
                icon: PiCow,
                element: "토",
                time: "01:00-03:00",
                month: "1월",
                direction: "북동",
              },
              {
                name: "인(寅)",
                animal: "호랑이",
                icon: GiTigerHead,
                element: "목",
                time: "03:00-05:00",
                month: "2월",
                direction: "동북",
              },
              {
                name: "묘(卯)",
                animal: "토끼",
                icon: GiRabbit,
                element: "목",
                time: "05:00-07:00",
                month: "3월",
                direction: "동",
              },
              {
                name: "진(辰)",
                animal: "용",
                icon: GiSpikedDragonHead,
                element: "토",
                time: "07:00-09:00",
                month: "4월",
                direction: "동남",
              },
              {
                name: "사(巳)",
                animal: "뱀",
                icon: GiSnake,
                element: "화",
                time: "09:00-11:00",
                month: "5월",
                direction: "남동",
              },
              {
                name: "오(午)",
                animal: "말",
                icon: GiHorseHead,
                element: "화",
                time: "11:00-13:00",
                month: "6월",
                direction: "남",
              },
              {
                name: "미(未)",
                animal: "양",
                icon: GiSheep,
                element: "토",
                time: "13:00-15:00",
                month: "7월",
                direction: "남서",
              },
              {
                name: "신(申)",
                animal: "원숭이",
                icon: GiMonkey,
                element: "금",
                time: "15:00-17:00",
                month: "8월",
                direction: "서남",
              },
              {
                name: "유(酉)",
                animal: "닭",
                icon: GiRooster,
                element: "금",
                time: "17:00-19:00",
                month: "9월",
                direction: "서",
              },
              {
                name: "술(戌)",
                animal: "개",
                icon: FaDog,
                element: "토",
                time: "19:00-21:00",
                month: "10월",
                direction: "서북",
              },
              {
                name: "해(亥)",
                animal: "돼지",
                icon: GiPig,
                element: "수",
                time: "21:00-23:00",
                month: "11월",
                direction: "북서",
              },
            ].map((jiji, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <jiji.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {jiji.name}
                  </h3>
                  <p className="text-lg text-gray-600">{jiji.animal}</p>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>오행:</span>
                    <span className="font-medium">{jiji.element}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>시간:</span>
                    <span className="font-medium">{jiji.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>월:</span>
                    <span className="font-medium">{jiji.month}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>방향:</span>
                    <span className="font-medium">{jiji.direction}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combination Example */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            천간과 지지의 조합
          </h2>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              육십갑자(六十甲子)의 시작
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  예시: 갑자(甲子)
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">갑</span>
                    </div>
                    <span className="text-gray-700">
                      천간: 양목(陽木) - 나무의 싹
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">자</span>
                    </div>
                    <span className="text-gray-700">지지: 쥐 - 양수(陽水)</span>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>의미:</strong> 새로운 시작, 창조의 기운, 강한
                      의지와 지혜의 조화
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  조합의 원리
                </h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    • 천간과 지지는 <strong>순서대로</strong> 조합됩니다
                  </p>
                  <p>
                    • 10천간 × 12지지 = <strong>60개 조합</strong>
                  </p>
                  <p>
                    • 각 조합은 <strong>고유한 특성</strong>을 가집니다
                  </p>
                  <p>• 시간, 날짜, 월, 년도를 나타냅니다</p>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-700">
                    <strong>💡 팁:</strong> 천간은 하늘의 기운, 지지는 땅의
                    기운이 만나서 인간의 운명을 만들어갑니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link
              href="/intro"
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>명리학이란? 돌아가기</span>
            </Link>

            <Link
              href="/basics/ohang"
              className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
            >
              <span>다음: 오행(五行) 배우기</span>
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
