"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Zap, Award, CheckCircle, Star, Building, Globe, Lightbulb, Rocket, TrendingUp, Shield, Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function AgencyPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Agency Yükleniyor...</p>
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
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">Agency</Badge>
              <Link href="/ai-chat-agent" className="hover:text-cyan-400 transition-colors">AI Chat Agent</Link>
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
                    <Link href="/agency" className="text-cyan-400 font-medium py-2 px-4 rounded-lg bg-cyan-500/10">Agency</Link>
                    <Link href="/ai-chat-agent" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Chat Agent</Link>
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
          <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/30">
            AI Agency
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
            Yapay Zeka ile<br />
            İşletmenizi<br />
            Geleceğe<br />
            Taşıyoruz
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI destekli çözümlerle müşteri deneyimini geliştiriyoruz. Call Agent, Chat Agent ve AI Studio
            hizmetlerimizle işletmenizin dijital dönüşümünde yanınızdayız.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full">
              Ücretsiz Konsültasyon
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg rounded-full">
              Hizmetlerimizi Keşfet
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Başarılı Proje</div>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Müşteri Memnuniyeti</div>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Destek</div>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-gray-300">Mutlu Müşteri</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Çözümlerimiz
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İşletmenizin ihtiyaçlarına özel tasarlanmış yapay zeka çözümleriyle
              müşteri deneyimini yeniden tanımlıyoruz.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI Call Agent */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">AI Call Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Kurumsal düzeyde telefon görüşmeleri yapan AI asistanı. Müşterilerinizle 7/24
                  profesyonel iletişim kurarak işletmenizi temsil eder.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Doğal konuşma yeteneği</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Randevu yönetimi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Müşteri bilgi toplama</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 group-hover:scale-105 transition-transform">
                  Detayları İncele
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* AI Chat Agent */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">AI Chat Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Akıllı sohbet botları ile web sitenizde anlık müşteri desteği sağlayın.
                  Ziyaretçileri müşteriye dönüştürün.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Anlık yanıt verme</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Çoklu dil desteği</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Lead toplama</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 group-hover:scale-105 transition-transform">
                  Detayları İncele
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* AI Studio */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">AI Studio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Yapay zeka ile yaratıcı içerik üretimi. Markanıza özel görseller,
                  videolar ve kampanyalar oluşturun.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">AI görsel üretimi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">Video prodüksiyon</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">Reklam kreatifleri</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 group-hover:scale-105 transition-transform">
                  Detayları İncele
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Neden AIgents?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Yapay zeka teknolojilerinde uzman ekibimiz ve kanıtlanmış çözümlerimizle
              işletmenizin dijital dönüşümünde güvenilir partneriniziz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Uzman Ekip</h3>
              <p className="text-gray-300">
                Yapay zeka ve teknoloji alanında uzman mühendis ve danışmanlarımızla
                en iyi çözümleri sunuyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Güvenli & Ölçeklenebilir</h3>
              <p className="text-gray-300">
                Kurumsal güvenlik standartlarında, işletmenizin büyümesiyle birlikte
                ölçeklenen çözümler geliştiriyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">ROI Odaklı</h3>
              <p className="text-gray-300">
                Her projemizde ölçülebilir sonuçlar ve yatırım getirisi sağlayarak
                işletmenizin karlılığını artırıyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">İnovatif Yaklaşım</h3>
              <p className="text-gray-300">
                Sektördeki en yeni teknolojileri takip ederek müşterilerimize
                rekabet avantajı sağlayan çözümler sunuyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hızlı Entegrasyon</h3>
              <p className="text-gray-300">
                Mevcut sistemlerinize kolay entegrasyon ile minimum kesinti
                süresiyle AI çözümlerini hayata geçiriyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">7/24 Destek</h3>
              <p className="text-gray-300">
                Projelerinizde kesintisiz destek sağlayarak AI sistemlerinizin
                sürekli optimal performansta çalışmasını garantiliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              4 adımda AI çözümlerinizi hayata geçiriyoruz. Her aşamada şeffaf iletişim
              ve profesyonel yaklaşımla yanınızdayız.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Analiz & Planlama</h3>
              <p className="text-gray-300">
                İşletmenizin ihtiyaçlarını detaylı analiz ederek en uygun AI çözümünü planlıyoruz.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Tasarım & Geliştirme</h3>
              <p className="text-gray-300">
                Özel AI modellerinizi geliştirip markanıza uygun tasarımlarla entegre ediyoruz.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Test & Optimizasyon</h3>
              <p className="text-gray-300">
                Kapsamlı testlerle sistemin mükemmel çalışmasını sağlayıp performansını optimize ediyoruz.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Devreye Alma & Destek</h3>
              <p className="text-gray-300">
                AI çözümünüzü canlıya alıp sürekli destek ve güncellemelerle yanınızda oluyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Müşteri Görüşleri
            </h2>
            <p className="text-xl text-gray-300">
              AIgents ile çalışan müşterilerimizin deneyimleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "AI Call Agent sayesinde müşteri hizmetlerimiz 7/24 kesintisiz hale geldi.
                Müşteri memnuniyetimiz %40 arttı."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AH</span>
                </div>
                <div>
                  <div className="font-semibold">Ahmet Kaya</div>
                  <div className="text-sm text-gray-400">E-ticaret Müdürü</div>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "AI Studio ile ürettiğimiz kampanya görselleri satışlarımızı ikiye katladı.
                Maliyetlerimiz de %60 azaldı."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SY</span>
                </div>
                <div>
                  <div className="font-semibold">Selin Yılmaz</div>
                  <div className="text-sm text-gray-400">Pazarlama Direktörü</div>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Chat Agent entegrasyonu çok kolay oldu. İlk haftada %25 daha fazla lead elde ettik.
                Harika bir çözüm!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MK</span>
                </div>
                <div>
                  <div className="font-semibold">Mehmet Koç</div>
                  <div className="text-sm text-gray-400">CEO</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            İşinizi Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI çözümlerimiz ile müşteri deneyimini geliştirin, operasyonel verimliliği artırın
            ve rekabet avantajı elde edin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full">
              Ücretsiz Konsültasyon Al
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg rounded-full">
              Demo Talep Et
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
                <div>Konsültasyon</div>
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
