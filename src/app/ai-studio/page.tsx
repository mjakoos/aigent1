"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, Star, Check, ArrowRight, Play, Sparkles, Zap, Camera, Video, Palette, Target, Users, Trophy, Clock, Shield, RefreshCw, Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function AIStudioPage() {
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
          <p className="text-white text-lg">AI Studio Yükleniyor...</p>
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
              <Link href="/ai-chat-agent" className="hover:text-cyan-400 transition-colors">AI Chat Agent</Link>
              <Link href="/" className="hover:text-cyan-400 transition-colors">AI Call Agent</Link>
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">AI Studio</Badge>
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
                    <Link href="/ai-chat-agent" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Chat Agent</Link>
                    <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Call Agent</Link>
                    <Link href="/ai-studio" className="text-cyan-400 font-medium py-2 px-4 rounded-lg bg-cyan-500/10">AI Studio</Link>
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
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
            AI Studio
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
            Yapay Zeka ile<br />
            Etkileeyici<br />
            Prodüksiyon<br />
            Keşfedin
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Markanız için benzersiz görseller ve dikkat çeken videolar AI gücüyle üretiyoruz.
          </p>

          <Button
            onClick={() => scrollToSection('pricing')}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full"
          >
            AI Gücünü Keşfet
          </Button>
        </div>
      </section>

      {/* Visual Try-On Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/30">
                AI Visual Try-On
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Dijital Deneme Teknolojisi: Visual Try-On
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Kıyafet giydirme, aksesuar ekleme veya ürün yerleştirme gibi ileri seviye dijital deneme teknolojileriyle
                e-ticaret ve moda projelerinizi bir üst seviyeye çıkarın.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span>Gerçekçi dijital giydirme efekti</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span>Hızlı ürün varyant görselleştirme</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span>Moda ve e-ticaret odaklı çözümler</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/4232344341/2810384513.webp"
                    alt="AI Visual Try-On Example"
                    className="w-full h-48 object-cover"
                  />
                </Card>
                <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/4232344341/2934097001.webp"
                    alt="AI Visual Try-On Product"
                    className="w-full h-48 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Video Production Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/4232344341/3474928694.webp"
                  alt="AI Video Production"
                  className="w-full h-64 object-cover"
                />
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30">
                AI Video Prodüksiyon
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI Video Prodüksiyon ile Kampanyalarınızı Hızlandırın
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Yapay zeka destekli video kurgları ile tanıtım, reklam veya sosyal medya kliplerini dakikalar içinde oluşturun.
                İnsan gücüne gerek kalmadan etkileyici videolar hazırlayın.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Video className="w-5 h-5 text-cyan-400" />
                  <span>Tanıtım & kampanya video kurgularıruyarlatunyarn</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>AI senaryo üretimi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>Hızlı render & sosyal medya uyumu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Advertisement Creative Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">
              AI Reklam Kreatifleri
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Satış Odaklı Reklam Görselleri
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI teknolojisiyle tasarlanan dikkat çekici görseller, kampanya bannerları ve sosyal medya kreatifleri.
              Markanıza özel, dönüşüm odaklı içerikler üretin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:scale-105 transition-transform">
              <img
                src="https://ext.same-assets.com/4232344341/1527544155.webp"
                alt="AI Advertisement Creative 1"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:scale-105 transition-transform">
              <img
                src="https://ext.same-assets.com/4232344341/1741005715.webp"
                alt="AI Advertisement Creative 2"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:scale-105 transition-transform">
              <img
                src="https://ext.same-assets.com/4232344341/4290093771.webp"
                alt="AI Advertisement Creative 3"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:scale-105 transition-transform">
              <img
                src="https://ext.same-assets.com/4232344341/1591752043.webp"
                alt="AI Advertisement Creative 4"
                className="w-full h-48 object-cover"
              />
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-cyan-400" />
                <span>Ürün ve hizmete özel tasarım</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-cyan-400" />
                <span>Sosyal medya & dijital kampanyalar için görsel setleri</span>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-6 h-6 text-cyan-400" />
                <span>Hızlı ve çoklu format desteği</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/30">
              AI Teknoloji
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Teknolojimizle Sınırları Kaldırın
            </h2>

            <div className="flex items-center justify-center space-x-2 text-2xl font-bold mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <span>Yaratıcılığınızı Özgürleştirin</span>
            </div>

            <div className="flex items-center justify-center space-x-2 text-2xl font-bold">
              <Zap className="w-8 h-8 text-green-400" />
              <span>Hızlı ve Profesyonel İçeriklere Ulaşın</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-300">
              CREATO AI Prodüksiyon, geleneksel tasarım süreçlerinin ötesine geçerek saniyeler içinde yaratıcı
              görsel ve video içeriklerinizi üretmenizi sağlar. AI destekli teknolojimiz sayesinde her karede
              fark yaratan görseller, her sahnede dikkat çeken videolar elde edersiniz. Hayal ettiğiniz her şeyi,
              dijital olarak gerçeğe dönüştürün.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-colors">
              <Camera className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ürününüzü Paylaşın</h3>
              <p className="text-gray-400 text-sm">Ürün fotoğraflarınız, marka kimliğinizi ve isteklerinizi bize iletin.</p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-colors">
              <Palette className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Senaryo veya Tarz Seçin</h3>
              <p className="text-gray-400 text-sm">Hazır konseptlerden seçebilir ya da özel tarzınızı belirleyebilirsiniz.</p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-colors">
              <Sparkles className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Prodüksiyon Başlasın</h3>
              <p className="text-gray-400 text-sm">Yapay zeka destekli yaratıcı motorumuz görsel ve video içeriklerinizi hazırlar.</p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-colors">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Yayına Hazır Dosyalar</h3>
              <p className="text-gray-400 text-sm">Tüm görseller ve videolar sosyal medya ve reklam platformlarına uyumlu formatlarda teslim edilir.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              İşletmeniz İçin Doğru Planı Seçin
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI Görsel ve AI Video Planlarımızı inceleyerek size en uygun olanı seçebilirsiniz.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-slate-800 p-1 rounded-lg">
              <Button className="bg-cyan-500 text-white">AI Görsel</Button>
              <Button variant="ghost">AI Video</Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <CardHeader className="pb-6">
                <div className="text-sm text-gray-400 uppercase tracking-wider">TEMEL PLAN</div>
                <CardTitle className="text-2xl">10 AI Görsel</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">$349</span>
                  <span className="text-gray-400">/ AI Görsel</span>
                </div>
                <CardDescription>Küçük işletmeler, butik e-ticaret mağazaları.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>10 Adet AI Görsel üretimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>Sosyal medya formatlarına uyum</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>1 revizyon hakkı</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>7 iş günü teslim süresi</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  Satış Ekibi ile İletişime Geç
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Standard Plan */}
            <Card className="bg-slate-800/50 border-cyan-500 p-8 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-cyan-500 text-white px-4 py-1">Popüler ⭐</Badge>
              </div>
              <CardHeader className="pb-6">
                <div className="text-sm text-gray-400 uppercase tracking-wider">STANDART PLAN</div>
                <CardTitle className="text-2xl">30 AI Görsel</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">$499</span>
                  <span className="text-gray-400">/ AI Görsel</span>
                </div>
                <CardDescription>E-ticaret mağazaları, sosyal medya içerik üreticileri.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>30 Adet AI Görsel üretimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>Temel Plan'daki özellikler+</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>Visual Try-On (ürün giydirme, dijital kombin)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>Kampanya bannerları ve promosyon görselleri</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>3 revizyon hakkı</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>5 iş günü teslim süresi</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  Satış Ekibi ile İletişime Geç
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <CardHeader className="pb-6">
                <div className="text-sm text-gray-400 uppercase tracking-wider">GELİŞMİŞ PLAN</div>
                <CardTitle className="text-2xl">Özel Adet AI Görsel</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">$649</span>
                  <span className="text-gray-400">/ AI Görsel</span>
                </div>
                <CardDescription>Orta ve büyük ölçekli markalar, ajanslar.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>60 Adet AI Görsel üretimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>Standart Plan'daki özellikler+</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>3D mock-up ve kreatif konsept tasarımları</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>Ürün varyantları için seri görsel üretimi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>4 revizyon hakkı</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>7 iş günü teslim süresi</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  Satış Ekibi ile İletişime Geç
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Merak Ettikleriniz
            </h2>
            <p className="text-xl text-gray-300">
              Yapay zeka çözümlerimizle ilgili en sık sorulan soruları sizin için yanıtladık.
              Daha fazla şey için AI danışmanı ile sohbet edebilirsiniz.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                AI Prodüksiyon hizmeti nasıl çalışıyor?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Ürün görsellerinizi veya fikirlerinizi bizimle paylaşıyorsunuz, ardından senaryonuzu seçip yaratıcı süreci başlatıyoruz.
                Yapay zeka destekli prodüksiyon motorumuz görselleri ve videoları sizin için oluşturuyor.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Hangi tür içerikler üretebiliyorsunuz?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Visual Try-On (kıyafet giydirme), e-ticaret ürün kreatifleri, sosyal medya reklam görselleri,
                AI video klipleri ve marka tanıtım kampanyaları gibi pek çok içerik üretebiliyoruz.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                AI Prodüksiyon hangi sektörlere uygun?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                E-ticaret, moda, müzik, kurumsal tanıtım, sosyal medya içerikleri ve reklam kampanyaları başta olmak üzere
                kreatif içerik üretimi gereken her sektöre uygundur.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Revizyon yapabilir miyim?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Evet. Üretilen içerikler önizleme aşamasında sizin onayınıza sunulur ve gerekli düzenlemeler hızlıca yapılır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Teslim süresi ne kadar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                İçeriğin türüne göre değişir. Görsel prodüksiyonlar genellikle 24 saat içinde,
                video prodüksiyonlar ise 2-4 iş günü içerisinde teslim edilir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Özel bir konsept veya tarz belirleyebilir miyim?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Evet. Hazır şablonlarımızdan seçebilir ya da markanıza özel tarz ve senaryolar talep edebilirsiniz.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 text-3xl font-bold mb-6">
            <span>Markanızı Yaratıcı</span>
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <span>AI Çözümleriyle Öne Çıkarın</span>
            <Sparkles className="w-8 h-8 text-cyan-400" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg rounded-full">
              Ücretsiz Randevu
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg rounded-full">
              İletişime Geç
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
