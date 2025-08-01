"use client";

import {
  FaArrowLeft,
  FaStar,
  FaCalendar,
  FaClock,
  FaHeart,
  FaDice,
  FaRefresh,
  FaShare,
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
import { useState } from "react";

export default function FortunePage() {
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);
  const [fortuneType, setFortuneType] = useState<"daily" | "random" | "zodiac">(
    "daily"
  );

  const zodiacAnimals = [
    {
      name: "쥐",
      icon: GiSeatedMouse,
      years: ["2020", "2008", "1996", "1984", "1972", "1960"],
    },
    {
      name: "소",
      icon: PiCow,
      years: ["2021", "2009", "1997", "1985", "1973", "1961"],
    },
    {
      name: "호랑이",
      icon: GiTigerHead,
      years: ["2022", "2010", "1998", "1986", "1974", "1962"],
    },
    {
      name: "토끼",
      icon: GiRabbit,
      years: ["2023", "2011", "1999", "1987", "1975", "1963"],
    },
    {
      name: "용",
      icon: GiSpikedDragonHead,
      years: ["2024", "2012", "2000", "1988", "1976", "1964"],
    },
    {
      name: "뱀",
      icon: GiSnake,
      years: ["2025", "2013", "2001", "1989", "1977", "1965"],
    },
    {
      name: "말",
      icon: GiHorseHead,
      years: ["2026", "2014", "2002", "1990", "1978", "1966"],
    },
    {
      name: "양",
      icon: GiSheep,
      years: ["2027", "2015", "2003", "1991", "1979", "1967"],
    },
    {
      name: "원숭이",
      icon: GiMonkey,
      years: ["2028", "2016", "2004", "1992", "1980", "1968"],
    },
    {
      name: "닭",
      icon: GiRooster,
      years: ["2029", "2017", "2005", "1993", "1981", "1969"],
    },
    {
      name: "개",
      icon: FaHeart,
      years: ["2030", "2018", "2006", "1994", "1982", "1970"],
    },
    {
      name: "돼지",
      icon: GiPig,
      years: ["2031", "2019", "2007", "1995", "1983", "1971"],
    },
  ];

  const dailyFortunes = [
    {
      category: "전체운",
      message:
        "오늘은 새로운 기회가 찾아올 수 있는 날입니다. 긍정적인 마음가짐으로 하루를 시작해보세요.",
      color: "from-blue-500 to-purple-600",
    },
    {
      category: "사랑운",
      message:
        "특별한 사람과의 만남이 기대되는 날입니다. 마음을 열고 소통해보세요.",
      color: "from-pink-500 to-red-500",
    },
    {
      category: "금전운",
      message:
        "재물운이 좋은 날입니다. 투자나 새로운 사업을 고려해볼 수 있어요.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      category: "건강운",
      message:
        "건강에 특별히 신경 쓰는 것이 좋겠습니다. 규칙적인 운동을 시작해보세요.",
      color: "from-green-500 to-teal-500",
    },
    {
      category: "학업운",
      message:
        "학습 능력이 향상되는 날입니다. 새로운 지식을 습득하기 좋은 시기예요.",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const randomFortunes = [
    "인생의 새로운 장이 열리는 시기입니다. 과감하게 도전해보세요.",
    "주변 사람들의 도움이 큰 힘이 될 것입니다. 겸손한 마음으로 받아들이세요.",
    "오랫동안 준비해온 일이 결실을 맺을 수 있는 좋은 기회입니다.",
    "새로운 아이디어가 떠오르는 창의적인 시기입니다. 기록해두세요.",
    "인간관계에서 행운이 따르는 날입니다. 새로운 인연을 만날 수 있어요.",
    "오랫동안 고민했던 문제의 해답을 찾을 수 있는 날입니다.",
    "가족과의 소통이 더욱 중요해지는 시기입니다. 따뜻한 마음을 나누세요.",
    "직업적으로 새로운 기회가 찾아올 수 있습니다. 준비를 철저히 하세요.",
    "건강한 습관을 기르기 좋은 시기입니다. 작은 변화부터 시작해보세요.",
    "금전적으로 안정적인 시기가 될 것입니다. 현명한 선택을 하세요.",
  ];

  const zodiacFortunes = {
    쥐: "지혜로운 판단으로 좋은 결과를 얻을 수 있는 날입니다. 직감을 믿고 행동해보세요.",
    소: "성실함이 인정받는 시기입니다. 꾸준한 노력이 결실을 맺을 것입니다.",
    호랑이: "용기와 도전정신이 빛나는 날입니다. 새로운 영역에 도전해보세요.",
    토끼: "평화로운 마음으로 주변과 조화를 이루는 것이 좋겠습니다.",
    용: "강력한 기운으로 원하는 것을 이룰 수 있는 날입니다. 자신감을 가지세요.",
    뱀: "지혜로운 판단으로 복잡한 상황을 해결할 수 있습니다.",
    말: "활발한 에너지로 새로운 경험을 할 수 있는 좋은 시기입니다.",
    양: "예술적 감각이 발휘되는 날입니다. 창작 활동을 해보세요.",
    원숭이: "재치있는 아이디어로 문제를 해결할 수 있습니다.",
    닭: "정직함과 시간관념이 인정받는 시기입니다.",
    개: "충성스러운 마음으로 주변 사람들의 신뢰를 얻을 수 있습니다.",
    돼지: "관대한 마음으로 행복한 하루를 보낼 수 있습니다.",
  };

  const getTodayFortune = () => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return dailyFortunes[dayOfYear % dailyFortunes.length];
  };

  const getRandomFortune = () => {
    return randomFortunes[Math.floor(Math.random() * randomFortunes.length)];
  };

  const getZodiacFortune = () => {
    if (!selectedZodiac) return null;
    return zodiacFortunes[selectedZodiac as keyof typeof zodiacFortunes];
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "나의 운명 - 오늘의 운세",
        text: "명리학으로 알아보는 나의 운세",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다!");
    }
  };

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
              <Link href="/tools" className="text-orange-600 font-medium">
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
              href="/tools"
              className="hover:text-orange-600 transition-colors"
            >
              도구
            </Link>
            <span>/</span>
            <span className="text-orange-600 font-medium">운세 보기</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            오늘의 운세
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            명리학의 지혜를 통해 오늘의 운세를 알아보고, 더 나은 하루를
            계획해보세요.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-orange-100 px-4 py-2 rounded-lg">
              <span className="text-orange-700 font-semibold">무료 운세</span>
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <span className="text-green-700 font-semibold">실시간 계산</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fortune Type Selection */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setFortuneType("daily")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                fortuneType === "daily"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-50"
              }`}
            >
              <FaCalendar className="w-4 h-4" />
              <span>오늘의 운세</span>
            </button>
            <button
              onClick={() => setFortuneType("random")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                fortuneType === "random"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-50"
              }`}
            >
              <FaDice className="w-4 h-4" />
              <span>랜덤 운세</span>
            </button>
            <button
              onClick={() => setFortuneType("zodiac")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                fortuneType === "zodiac"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-50"
              }`}
            >
              <FaHeart className="w-4 h-4" />
              <span>띠별 운세</span>
            </button>
          </div>
        </div>
      </section>

      {/* Fortune Display */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {fortuneType === "daily" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {new Date().toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    weekday: "long",
                  })}
                </h2>
                <p className="text-gray-600">오늘의 운세를 확인해보세요</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dailyFortunes.map((fortune, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${fortune.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <FaStar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {fortune.category}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {fortune.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {fortuneType === "random" && (
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaDice className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  랜덤 운세
                </h2>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {getRandomFortune()}
                  </p>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <FaRefresh className="w-4 h-4" />
                  <span>다른 운세 보기</span>
                </button>
              </div>
            </div>
          )}

          {fortuneType === "zodiac" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  띠별 운세
                </h2>
                <p className="text-gray-600 mb-8">
                  당신의 띠를 선택하면 오늘의 운세를 알려드립니다
                </p>
              </div>

              {/* Zodiac Selection */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {zodiacAnimals.map((animal, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedZodiac(animal.name)}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      selectedZodiac === animal.name
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-orange-50 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <animal.icon
                        className={`w-8 h-8 ${selectedZodiac === animal.name ? "text-white" : "text-orange-600"}`}
                      />
                    </div>
                    <p className="font-semibold">{animal.name}</p>
                    <p className="text-xs opacity-75 mt-1">
                      {animal.years[0]}년생
                    </p>
                  </button>
                ))}
              </div>

              {/* Zodiac Fortune Display */}
              {selectedZodiac && (
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const animal = zodiacAnimals.find(
                          a => a.name === selectedZodiac
                        );
                        return animal ? (
                          <animal.icon className="w-8 h-8 text-white" />
                        ) : null;
                      })()}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {selectedZodiac}띠 오늘의 운세
                    </h3>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {getZodiacFortune()}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Share Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            운세를 친구들과 공유해보세요
          </h3>
          <p className="text-gray-600 mb-8">
            명리학의 지혜를 더 많은 사람들과 함께 나누어보세요
          </p>
          <button
            onClick={handleShare}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <FaShare className="w-5 h-5" />
            <span>운세 공유하기</span>
          </button>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>홈으로 돌아가기</span>
            </Link>

            <Link
              href="/basics/intro"
              className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
            >
              <span>명리학 배우기</span>
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
