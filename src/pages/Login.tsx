import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { authService } from "@/lib/auth";
import { Landmark } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { data, error } = await authService.signIn({ email, password });

    if (error) {
      toast({
        title: t("error"),
        description: error,
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (data) {
      toast({
        title: t("loginSuccessful"),
        description: t("loginSuccessMessage"),
      });
      navigate("/dashboard");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <Landmark className="h-8 w-8" />
            <span className="text-2xl font-bold">{t("appName")}</span>
          </Link>
          <LanguageSelector />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t("welcomeBack")}</CardTitle>
            <CardDescription>{t("loginToAccess")}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t("password")}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t("passwordPlaceholder")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? t("loggingIn") : t("login")}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                {t("dontHaveAccount")}{" "}
                <Link to="/register" className="text-primary hover:underline font-medium">
                  {t("registerHere")}
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
