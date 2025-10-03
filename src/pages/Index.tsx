import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Landmark, 
  Shield, 
  Smartphone, 
  Clock, 
  Users, 
  TrendingUp,
  CheckCircle2
} from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t("secureBanking"),
      description: t("secureBankingDesc")
    },
    {
      icon: Smartphone,
      title: t("mobileFirst"),
      description: t("mobileFirstDesc")
    },
    {
      icon: Clock,
      title: t("access247"),
      description: t("access247Desc")
    },
    {
      icon: Users,
      title: t("localSupport"),
      description: t("localSupportDesc")
    }
  ];

  const benefits = [
    t("zeroFees"),
    t("freeTransactions"),
    t("instantTransfers"),
    t("lowCostLoans"),
    t("financialLiteracy"),
    t("insuranceOptions")
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <Landmark className="h-6 w-6" />
            <span className="text-xl font-bold">{t("appName")}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button variant="ghost" asChild>
              <Link to="/login">{t("login")}</Link>
            </Button>
            <Button asChild>
              <Link to="/register">{t("getStarted")}</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">{t("empoweringRural")}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("tagline")}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("heroDescription")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <Link to="/register">{t("openFreeAccount")}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg">
              <Link to="/login">{t("loginToAccount")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("whyChoose")}</h2>
            <p className="text-muted-foreground text-lg">
              {t("whyDescription")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("everythingInOne")}</h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link to="/register">{t("startJourney")}</Link>
              </Button>
            </div>
            
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">{t("joinUsers")}</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-base">
                  {t("experienceFuture")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-4xl font-bold mb-1">₹ 500 Cr+</p>
                  <p className="text-primary-foreground/80">{t("transactionsProcessed")}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-1">99.9%</p>
                  <p className="text-primary-foreground/80">{t("uptimeGuarantee")}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-1">24/7</p>
                  <p className="text-primary-foreground/80">{t("customerSupport")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">{t("readyToStart")}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t("readyDescription")}
          </p>
          <Button size="lg" asChild className="text-lg">
            <Link to="/register">{t("createFreeAccount")}</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Landmark className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">{t("appName")}</span>
          </div>
          <p className="text-sm">© 2024 {t("appName")}. {t("allRightsReserved")}</p>
          <p className="text-sm mt-2">{t("empoweringCommunities")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
