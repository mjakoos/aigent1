"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Play, ArrowRight, BarChart3, Users, Globe, MessageCircle, Zap, Clock, Shield, Headphones } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen bg-slate-950 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">AIgents</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/agency" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Agency</Link>
            <Link href="/ai-chat-agent" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">AI Chat Agent</Link>
            <Link href="/" className="text-cyan-400 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:rounded-full">AI Call Agent</Link>
            <Link href="/ai-studio" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">AI Studio</Link>
            <Link href="/talepler" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Talepler</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden md:flex border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
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
                  <Link href="/ai-chat-agent" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Chat Agent</Link>
                  <Link href="/" className="text-cyan-400 font-medium py-2 px-4 rounded-lg bg-cyan-500/10">AI Call Agent</Link>
                  <Link href="/ai-studio" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Studio</Link>
                  <Link href="/talepler" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">Talepler</Link>
                  <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 mt-4 transition-all duration-300">
                    Müşteri Paneli
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 text-center relative overflow-hidden" id="hero">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
          <div className="container mx-auto relative z-10">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300 animate-bounce">
              ⚡ AI Call Agent
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="gradient-text">Yapay Zeka ile</span><br />
              <span className="text-white">Kurumsal Düzeyde Telefon</span><br />
              <span className="text-white">Görüşmeleri</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              AI destekli Call Agent, arayan müşterilerle sizin adınıza konuşur. Kampanya anlatır, bilgi verir, randevu alır.
              İşletmenizi 7/24 sesli olarak temsil eden dijital çağrı asistanıdır.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
              <Button
                className="btn-primary text-lg px-8 py-4 group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25"
                onClick={() => scrollToSection('pricing')}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Demo Talep Edin
              </Button>
              <Button
                variant="outline"
                className="btn-secondary text-lg px-8 py-4 group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
                onClick={() => scrollToSection('contact')}
              >
                Görüşme Planlayın
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative max-w-5xl mx-auto animate-fade-in-up animation-delay-600">
              <div className="glass-card rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-500 group animate-float">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">AI AGENT</h3>
                        <p className="text-gray-400 text-sm">7/24 Aktif</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Çevrimiçi</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800/70 transition-all duration-300 group/item">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          <span className="text-blue-400 text-xs font-bold">JL</span>
                        </div>
                        <div>
                          <p className="text-white text-sm">Bu web sitesi, web deneyiminizi geliştirmek için çerezleri kullanır.</p>
                          <p className="text-gray-400 text-xs">20 dakika önce</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 h-8 w-16 text-xs hover:scale-105 transition-all duration-300">
                        Tamam
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="py-12 px-4 border-b border-white/10">
          <div className="container mx-auto">
            <p className="text-center text-cyan-400 mb-8 font-medium">Güçlü Entegrasyonlar, Sınırsız Olanaklar</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['make', 'İkas', 'ManyChat', 'shopify'].map((brand, i) => (
                <div key={brand} className="bg-white/10 px-6 py-3 rounded-lg opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span className="text-white font-semibold">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300">
                AI Call Agent
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Çağrı Deneyimini Dönüştürün,<br />
                Gelirinizi Artırın
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI destekli Call Agent, aramaları sadece cevaplamaz. Her çağrıyı ölçebilir,
                yönetilebilir ve satışa dönüşebilir hale getirir.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Satış Ekibinizi Destekleyen Akıllı Temsilci</h3>
              <p className="text-gray-300 max-w-4xl mx-auto">
                Gelen aramaları karşılar, talepleri doğru yönlendirir ve insan kaynağına yük bindirmeden müşteriyle
                etkili iletişim kurar. Satış ekibiniz, zamanını gerçekten değer yaratan görüşmelere ayırır.
              </p>
            </div>
          </div>
        </section>

        {/* 7/24 Call Center Section */}
        <section className="py-20 px-4 bg-slate-900/30 text-center">
          <div className="container mx-auto">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300 animate-bounce">
              🎯 CALL AGENT
            </Badge>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-cyan-400">7/24</span> <span className="text-white">Çağrı</span><br />
              <span className="text-white">Merkezi</span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              AI destekli Call Agent her aramayı karşılar, konuşur ve yönlendirir.
            </p>

            {/* AI Avatar */}
            <div className="w-64 h-64 mx-auto mb-12 relative group cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-500 animate-float">
                <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-16 h-8 bg-white rounded-full flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse animation-delay-300"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-cyan-400/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300">
                Built with Spline
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Call Agent<br />
                Özellikleriyle Tanışın
              </h2>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Yapay zeka destekli Call Agent, çağrılarınızı sadece cevaplamakla kalmaz; analiz eder, kaydeder,
                yönlendirir ve size değerli veriler sunar. Müşteri hizmetlerinizi ileri ölçeklemek ve daha iyi
                deneyimler sunmak artık çok daha kolay.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Phone className="h-8 w-8" />,
                  title: "Akıllı Çağrı Karşılama",
                  description: "Aramaları karşılar, dinler, doğru yönlendirir. Sohbeti başlatır, talepleri anlar, temsilciye gerek bırakmaz."
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Kampanya Bilgilendirme",
                  description: "Arayan müşteriye güncel kampanyalarınız anlatır. İndirim, kampanya süresi gibi bilgileri otomatik aktarır."
                },
                {
                  icon: <BarChart3 className="h-8 w-8" />,
                  title: "CRM Entegrasyonu",
                  description: "Müşteri bilgilerini otomatik işler, not alır, CRM sistemine gönderir. Tüm veriler senkronize çalışır."
                },
                {
                  icon: <MessageCircle className="h-8 w-8" />,
                  title: "Konuşma Analizi",
                  description: "Çağrılarda kullanılan kelimeleri analiz eder. Eğitim, temsilci geliştirme ve kalite kontrol için veri sunar."
                },
                {
                  icon: <Globe className="h-8 w-8" />,
                  title: "Çok Dilli Destek",
                  description: "Türkçe, İngilizce ve diğer dillerde konuşabilir. Her müşteriyle kendi dilinde doğal iletişim kurar."
                },
                {
                  icon: <Headphones className="h-8 w-8" />,
                  title: "Sesli Mesaj Bırakma",
                  description: "Yanıtsız çağrılarda kişiye özel mesajlar bırakabilir. İsteğe bağlı olarak kampanya veya bilgilendirme sesleri oynatır."
                },
                {
                  icon: <BarChart3 className="h-8 w-8" />,
                  title: "Raporlama & Görüşme Takibi",
                  description: "Tüm çağrılar sistemde kayıt altına alınır. Cevap süresi, konuşma süresi, dönüşüm oranları analiz edilir."
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Gerçek Zamanlı İzleme",
                  description: "Aktif çağrılar canlı olarak izlenebilir. Ekip performansı anlık takip edilir."
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Otomasyon ile Süreç Kurgusu",
                  description: "Randevu alındığında CRM'e kayıt, bilgi verildiğinde not düşme gibi akışlar otomatik gerçekleşir. Gereksiz manuel işlem kalmaz."
                }
              ].map((feature, i) => (
                <Card key={i} className="glass-card p-6 group hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-900/30" id="pricing">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                İşletmeniz İçin<br />Doğru Planı Seçin
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Plan seçimi ile 24 saat içinde kullanmaya başlayın.
              </p>

              <div className="flex items-center justify-center space-x-4 mb-12">
                <span className="text-gray-300">Aylık</span>
                <Button variant="outline" className="bg-slate-800 border-white/20 hover:border-cyan-500/50 transition-all duration-300">Yıllık</Button>
                <span className="text-gray-300">Aylık</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <Card className="glass-card p-8 relative hover:bg-white/10 hover:scale-105 transition-all duration-500">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">TEMEL PLAN</h3>
                  <p className="text-gray-400 mb-4">Aylık</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">$749</span>
                    <span className="text-gray-400">⁰</span>
                    <p className="text-sm text-gray-400">/dan başlayan fiyatlarla</p>
                  </div>
                  <p className="text-gray-300">Başlangıç için ideal, küçük ölçekli işletmeler.</p>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "Dahil: 1 Sesli Agent",
                    "En Uygun: Küçük işletmeler",
                    "Temel çağrı karşılama",
                    "Tek dil desteği (Türkçe)",
                    "Basit raporlama ve çağrı kayıtları",
                    "Yerel numara desteği",
                    "7/24 çalışma modu"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 hover:scale-105 transition-all duration-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full btn-secondary hover:scale-105 transition-all duration-300">
                  Satış Ekibi ile İletişime Geç →
                </Button>
              </Card>

              {/* Standard Plan */}
              <Card className="glass-card p-8 relative border-cyan-500/50 hover:bg-white/10 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white animate-bounce">
                  Popüler ⭐
                </Badge>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">STANDART PLAN</h3>
                  <p className="text-gray-400 mb-4">Aylık</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">$949</span>
                    <span className="text-gray-400">⁰</span>
                    <p className="text-sm text-gray-400">/dan başlayan fiyatlarla</p>
                  </div>
                  <p className="text-gray-300">Orta ölçekli ve yoğun mesaj alan işletmeler.</p>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "Dahil: 3 Sesli Agent",
                    "Temel Plan'daki özellikler+",
                    "Çok dilli destek (TR + EN vb.)",
                    "Otomatik kampanya bilgilendirme",
                    "Gelişmiş raporlama ve analiz",
                    "Sesli mesaj bırakma özelliği",
                    "Gelişmiş CRM ve API entegrasyonu"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 hover:scale-105 transition-all duration-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full btn-primary hover:scale-105 transition-all duration-300">
                  Satış Ekibi ile İletişime Geç →
                </Button>
              </Card>

              {/* Custom Plan */}
              <Card className="glass-card p-8 relative hover:bg-white/10 hover:scale-105 transition-all duration-500">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">ÖZEL ÇÖZÜM</h3>
                  <p className="text-gray-400 mb-4">Aylık</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">Teklif Alın</span>
                  </div>
                  <p className="text-gray-300">Özel çözüm arayan ve mesaj trafiği yüksek işletmeler.</p>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "Çoklu Agent",
                    "Standart Plan'daki özellikler+",
                    "Özel diyalog akışı (kişiselleştirilmiş)",
                    "Yapay zeka konuşma analizi",
                    "Kapsamlı raporlama ve veri analizi",
                    "Premium destek ve danışmanlık",
                    "Özel entegrasyon ve geliştirme desteği"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 hover:scale-105 transition-all duration-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full btn-secondary hover:scale-105 transition-all duration-300">
                  Satış Ekibi ile İletişime Geç →
                </Button>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300">
                Sorularınız mı var? <a href="#" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors duration-300">Bizimle iletişime geçin</a> veya <a href="#" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors duration-300">Randevu Oluşturun!</a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Merak Ettikleriniz</h2>
              <p className="text-xl text-gray-300">
                Yapay zeka çözümlerimizle ilgili en sık sorulan soruları sizin için yanıtladık.
                Daha fazlası için ai danışmanı ile sohbet edebilirsiniz.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "AIgents Call Agent tam olarak ne yapar?",
                  answer: "Call Agent, arayan kişileri sizin adınıza karşılayan, yönlendiren ve bilgilendiren bir yapay zeka sesli asistanıdır. Satış, destek, randevu veya kampanya gibi tüm senaryolarda kesintisiz çalışır."
                },
                {
                  question: "Hangi saatlerde çalışır?",
                  answer: "7 gün 24 saat aktif olarak görev yapar. Mesai saati sınırlaması olmadan her aramayı karşılayabilir."
                },
                {
                  question: "Birden fazla dilde konuşabiliyor mu?",
                  answer: "Evet. Türkçe, İngilizce, Almanca gibi birçok dili destekler. Müşteriyle kendi dilinde doğal ve akıcı şekilde iletişim kurabilir."
                },
                {
                  question: "Kendi numaramla kullanabilir miyim?",
                  answer: "Evet. AIgents Call Agent yerel numaranızla çalışabilir. Ayrıca farklı bölgeler için yeni numara talepleriniz de desteklenir."
                },
                {
                  question: "Çağrılar kayıt altına alınıyor mu?",
                  answer: "Talebinize göre tüm çağrılar kayıt altına alınabilir. Kayıtlar yönetim panelinden dinlenebilir ve analiz edilebilir."
                }
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass-card border border-white/10 rounded-lg px-6 hover:bg-white/5 transition-all duration-300"
                >
                  <AccordionTrigger className="text-white text-left hover:text-cyan-400 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 text-center bg-slate-900/30" id="contact">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              İşinizi Dönüştürmek İçin<br />
              <span className="gradient-text">Yapay Zekaya ve</span><br />
              <span className="gradient-text">Otomatik Süreçlere</span><br />
              <span className="text-white">Hazır mısınız?</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button className="btn-primary text-lg px-8 py-4 group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Ücretsiz Randevu
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4 group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/10">
                İletişime Geç
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="mt-8">
              <Badge className="bg-purple-600 text-white border-purple-500 hover:bg-purple-700 transition-all duration-300 cursor-pointer">
                make Partner
              </Badge>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-2 mb-4 lg:mb-0 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">AIgents</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-gray-300">
              {['Koşullar', 'Gizlilik ve Güvenlik', 'Çerezler', 'Şartlar', 'Blog', 'Hakkımızda', 'İletişim'].map((link) => (
                <a key={link} href="#" className="hover:text-cyan-400 transition-all duration-300 hover:scale-105">{link}</a>
              ))}
            </nav>
          </div>

          <div className="text-center text-gray-400">
            <p className="mb-2 hover:text-gray-300 transition-colors duration-300">71-75 Shelton Street London / UK</p>
            <p className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">hello@aigents.digital</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
