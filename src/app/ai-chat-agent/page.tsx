"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, Zap, Users, BarChart3, Globe, Shield, Bot, Brain, Send, Clock, CheckCircle, Target, Star, Sparkles, Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function AIChatAgentPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">AI Chat Agent Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="text-2xl font-bold">AIgents</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/agency" className="hover:text-cyan-400 transition-colors">Agency</Link>
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">AI Chat Agent</Badge>
              <Link href="/" className="hover:text-cyan-400 transition-colors">AI Call Agent</Link>
              <Link href="/ai-studio" className="hover:text-cyan-400 transition-colors">AI Studio</Link>
              <Link href="/talepler" className="hover:text-cyan-400 transition-colors">Talepler</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Müşteri Paneli
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden hover:bg-white/10 transition-all duration-300">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-950 border-white/10">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link href="/agency" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">Agency</Link>
                    <Link href="/ai-chat-agent" className="text-cyan-400 font-medium py-2 px-4 rounded-lg bg-cyan-500/10">AI Chat Agent</Link>
                    <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Call Agent</Link>
                    <Link href="/ai-studio" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Studio</Link>
                    <Link href="/talepler" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">Talepler</Link>
                    <Button className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 mt-4 transition-all duration-300">
                      Müşteri Paneli
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center relative">
          <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30">
            💬 AI Chat Agent
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
            Akıllı Sohbet<br />
            Botları ile<br />
            Müşteri<br />
            Deneyimini<br />
            Dönüştürün
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            7/24 çalışan AI destekli chat botlarımızla web sitenizde anlık müşteri desteği sağlayın.
            Ziyaretçileri müşteriye dönüştürün, sorularını anında yanıtlayın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('demo')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full"
            >
              Demo Deneyin
              <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg rounded-full">
              Ücretsiz Konsültasyon
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section id="demo" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Canlı Chat Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI Chat Agent'ın nasıl çalıştığını görün. Aşağıdaki demo ile deneyimleyin.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AIgents Chat Assistant</CardTitle>
                    <p className="text-sm opacity-90">Çevrimiçi - Hemen yanıtlıyor</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-slate-700 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Merhaba! AIgents Chat Assistant'a hoş geldiniz. Size nasıl yardımcı olabilirim?</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-cyan-500 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-white">AI Chat Agent hakkında bilgi alabilir miyim?</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-slate-700 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Tabii ki! AI Chat Agent, 7/24 çalışan akıllı sohbet botudur. Müşterilerinizin sorularını anında yanıtlar, lead toplar ve satış sürecini hızlandırır. Hangi konuda daha detaylı bilgi istiyorsunuz?</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-cyan-500 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-white">Fiyatlandırma nasıl?</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-slate-700 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Fiyatlandırmamız işletmenizin ihtiyaçlarına göre değişir. Temel paket 299 TL/ay'dan başlar. Ücretsiz konsültasyon için iletişime geçebilirsiniz!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 border-t border-slate-700">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Mesajınızı yazın..."
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
                  />
                  <Button className="bg-cyan-500 hover:bg-cyan-600">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Chat Agent Özellikleri
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gelişmiş yapay zeka teknolojisiyle donatılmış chat botumuzun sunduğu özellikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors">
              <MessageCircle className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Doğal Konuşma</h3>
              <p className="text-gray-300">
                GPT teknolojisi ile insan benzeri doğal konuşmalar yaparak müşterilerinizle
                etkileşimde bulunur.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors">
              <Clock className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">7/24 Hizmet</h3>
              <p className="text-gray-300">
                Hiç durmadan çalışır. Gece gündüz müşterilerinizin sorularını yanıtlar ve
                destek sağlar.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Öğrenen Sistem</h3>
              <p className="text-gray-300">
                Her etkileşimden öğrenir ve zamanla daha iyi yanıtlar vermeye başlar.
                Sürekli kendini geliştirir.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors">
              <Globe className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Çoklu Dil</h3>
              <p className="text-gray-300">
                Türkçe, İngilizce ve diğer dillerde destek sağlar. Global müşterilere
                hizmet verebilirsiniz.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors">
              <Users className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Lead Toplama</h3>
              <p className="text-gray-300">
                Ziyaretçilerin iletişim bilgilerini toplar ve potansiyel müşterileri
                satış ekibinize yönlendirir.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors">
              <BarChart3 className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Detaylı Analitik</h3>
              <p className="text-gray-300">
                Müşteri etkileşimlerini analiz eder ve size detaylı raporlar sunar.
                İyileştirme fırsatlarını görün.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">
                Kolay Entegrasyon
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Web Sitenize 5 Dakikada Entegre Edin
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Sadece birkaç satır kod ile AI Chat Agent'ı web sitenize entegre edin.
                Teknik bilgi gerektirmez, hemen kullanmaya başlayın.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>Wordpress, Shopify, WooCommerce desteği</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>React, Vue, Angular uyumluluğu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>Mobil responsive tasarım</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>Özelleştirilebilir tema ve renkler</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Entegrasyon Rehberi
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <div className="text-sm text-gray-400 mb-2">Entegrasyon Kodu:</div>
                <div className="bg-slate-900 rounded-lg p-4 text-sm text-green-400 font-mono">
                  <div>{'<script>'}</div>
                  <div className="ml-4">{'window.AIgentsConfig = {'}</div>
                  <div className="ml-8">{'apiKey: "your-api-key",'}</div>
                  <div className="ml-8">{'theme: "dark",'}</div>
                  <div className="ml-8">{'position: "bottom-right"'}</div>
                  <div className="ml-4">{'};'}</div>
                  <div>{'</script>'}</div>
                  <div>{'<script src="https://chat.aigents.com/widget.js">'}</div>
                  <div>{'</script>'}</div>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  Bu kodu web sitenizin {'</body>'} tagından önce ekleyin.
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kullanım Senaryoları
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI Chat Agent'ın farklı sektörlerde nasıl kullanıldığını görün
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">E-ticaret</h3>
              <p className="text-gray-300 text-sm">
                Ürün bilgileri, kargo durumu, iade işlemleri için 7/24 destek
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">SaaS</h3>
              <p className="text-gray-300 text-sm">
                Teknik destek, hesap yönetimi ve demo talepleri için otomatik yanıtlar
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Finans</h3>
              <p className="text-gray-300 text-sm">
                Hesap bilgileri, kredi başvuruları ve güvenli işlemler için destek
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Eğitim</h3>
              <p className="text-gray-300 text-sm">
                Kurs bilgileri, kayıt işlemleri ve öğrenci desteği için akıllı asistan
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fiyatlandırma Planları
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İşletmenizin büyüklüğüne uygun AI Chat Agent paketini seçin
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <CardHeader className="pb-6">
                <div className="text-sm text-gray-400 uppercase tracking-wider">BAŞLANGIÇ</div>
                <CardTitle className="text-2xl">Temel Plan</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">₺299</span>
                  <span className="text-gray-400">/ ay</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>1.000 mesaj/ay</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>1 web sitesi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>Temel analitik</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>E-posta desteği</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  Başlayın
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-slate-800/50 border-cyan-500 p-8 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-cyan-500 text-white px-4 py-1">Popüler ⭐</Badge>
              </div>
              <CardHeader className="pb-6">
                <div className="text-sm text-gray-400 uppercase tracking-wider">PROFESYONEL</div>
                <CardTitle className="text-2xl">Pro Plan</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">₺799</span>
                  <span className="text-gray-400">/ ay</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>10.000 mesaj/ay</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>5 web sitesi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>Gelişmiş analitik</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>CRM entegrasyonu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>Öncelikli destek</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  Başlayın
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <CardHeader className="pb-6">
                <div className="text-sm text-gray-400 uppercase tracking-wider">KURUMSAL</div>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">₺1.999</span>
                  <span className="text-gray-400">/ ay</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>Sınırsız mesaj</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>Sınırsız web sitesi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>Özel AI modeli</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>API erişimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>7/24 telefon desteği</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  İletişime Geç
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 text-3xl font-bold mb-6">
            <span>Müşteri Deneyimini</span>
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <span>AI ile Dönüştürün</span>
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Hemen başlayın ve AI Chat Agent ile müşteri memnuniyetinizi artırın
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full">
              Ücretsiz Deneme Başlat
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg rounded-full">
              Demo Görüşmesi
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <span className="text-xl font-bold">AIgents</span>
              </div>
              <p className="text-gray-400">
                Yapay zeka destekli çözümlerle işletmenizi geleceğe taşıyın.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Hizmetler</h3>
              <div className="space-y-2 text-gray-400">
                <div>AI Call Agent</div>
                <div>AI Chat Agent</div>
                <div>AI Studio</div>
                <div>Agency</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Şirket</h3>
              <div className="space-y-2 text-gray-400">
                <div>Hakkımızda</div>
                <div>İletişim</div>
                <div>Blog</div>
                <div>Kariyer</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Destek</h3>
              <div className="space-y-2 text-gray-400">
                <div>Yardım Merkezi</div>
                <div>Gizlilik</div>
                <div>Şartlar</div>
                <div>SSS</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AIgents. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
