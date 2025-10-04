import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Landmark, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  History, 
  Settings,
  LogOut,
  Eye,
  EyeOff
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const { t } = useLanguage();

  const quickActions = [
    { icon: ArrowUpRight, label: t("sendMoney"), color: "text-primary" },
    { icon: ArrowDownLeft, label: t("requestMoney"), color: "text-secondary" },
    { icon: CreditCard, label: t("payBills"), color: "text-accent" },
    { icon: History, label: t("transactionHistory"), color: "text-muted-foreground" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <Landmark className="h-6 w-6" />
            <span className="text-xl font-bold">{t("appName")}</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t("welcomeUser")}, John!</h1>
          <p className="text-muted-foreground">{t("accountOverview")}</p>
        </div>

        {/* Balance Card */}
        <Card className="mb-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardDescription className="text-primary-foreground/80">{t("totalBalance")}</CardDescription>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </Button>
            </div>
            <CardTitle className="text-4xl font-bold">
              {showBalance ? "₹ 1,24,567.89" : "₹ •••••••"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 text-sm">
              <div>
                <p className="text-primary-foreground/80">{t("accountNumber")}</p>
                <p className="font-semibold">**** **** 4567</p>
              </div>
              <div>
                <p className="text-primary-foreground/80">{t("accountType")}</p>
                <p className="font-semibold">{t("savings")}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{t("quickActions")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 pb-4 text-center">
                  <action.icon className={`h-8 w-8 mx-auto mb-2 ${action.color}`} />
                  <p className="text-sm font-medium">{action.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>{t("recentTransactions")}</CardTitle>
            <CardDescription>{t("latestActivities")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: t("groceryStore"), amount: "-₹ 2,450", date: t("today"), type: "debit" },
                { name: t("salaryCredit"), amount: "+₹ 45,000", date: `2 ${t("daysAgo")}`, type: "credit" },
                { name: t("electricBill"), amount: "-₹ 1,200", date: `3 ${t("daysAgo")}`, type: "debit" },
                { name: t("atmWithdrawal"), amount: "-₹ 5,000", date: `5 ${t("daysAgo")}`, type: "debit" },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                  <p className={`font-semibold ${
                    transaction.type === "credit" ? "text-secondary" : "text-foreground"
                  }`}>
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </div>
            <Button variant="link" className="w-full mt-4">
              {t("viewAllTransactions")}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
