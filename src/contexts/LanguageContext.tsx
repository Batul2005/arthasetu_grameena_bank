import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi" | "kn" | "tu";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Branding
    appName: "Arthasetu",
    tagline: "Banking Made Simple for Everyone",
    
    // Navigation
    login: "Login",
    register: "Register",
    logout: "Logout",
    getStarted: "Get Started",
    
    // Home Page
    empoweringRural: "Empowering Rural India",
    heroDescription: "Experience secure, accessible, and affordable banking services designed specifically for rural communities across India.",
    openFreeAccount: "Open Free Account",
    loginToAccount: "Login to Account",
    whyChoose: "Why Choose Arthasetu?",
    whyDescription: "Modern banking solutions tailored for rural India",
    
    // Features
    secureBanking: "Secure Banking",
    secureBankingDesc: "Bank-grade security with end-to-end encryption for all your transactions",
    mobileFirst: "Mobile First",
    mobileFirstDesc: "Access your account anytime, anywhere from any device",
    access247: "24/7 Access",
    access247Desc: "Round-the-clock banking services at your fingertips",
    localSupport: "Local Support",
    localSupportDesc: "Dedicated customer support in your local language",
    
    // Benefits
    everythingInOne: "Everything You Need in One Place",
    zeroFees: "Zero account opening fees",
    freeTransactions: "Free digital transactions",
    instantTransfers: "Instant money transfers",
    lowCostLoans: "Low-cost loans & credit",
    financialLiteracy: "Financial literacy programs",
    insuranceOptions: "Insurance options",
    joinUsers: "Join 50,000+ Users",
    experienceFuture: "Experience the future of rural banking",
    transactionsProcessed: "Transactions Processed",
    uptimeGuarantee: "Uptime Guarantee",
    customerSupport: "Customer Support",
    
    // CTA
    readyToStart: "Ready to Get Started?",
    readyDescription: "Open your free account today and experience banking that works for you",
    createFreeAccount: "Create Free Account",
    
    // Footer
    allRightsReserved: "All rights reserved.",
    empoweringCommunities: "Empowering rural communities through accessible banking",
    
    // Login Page
    welcomeBack: "Welcome Back",
    loginToAccess: "Login to access your account",
    email: "Email",
    emailPlaceholder: "your@email.com",
    password: "Password",
    passwordPlaceholder: "••••••••",
    loggingIn: "Logging in...",
    dontHaveAccount: "Don't have an account?",
    registerHere: "Register here",
    loginSuccessful: "Login Successful",
    loginSuccessMessage: "Welcome back to Arthasetu!",
    
    // Register Page
    createAccount: "Create Account",
    joinToday: "Join Arthasetu today",
    fullName: "Full Name",
    fullNamePlaceholder: "John Doe",
    phoneNumber: "Phone Number",
    phonePlaceholder: "+91 9876543210",
    confirmPassword: "Confirm Password",
    creatingAccount: "Creating Account...",
    alreadyHaveAccount: "Already have an account?",
    loginHere: "Login here",
    accountCreated: "Account Created",
    accountCreatedMessage: "Your account has been created successfully!",
    passwordMismatch: "Passwords do not match",
    error: "Error",
    
    // Dashboard
    welcomeUser: "Welcome back",
    accountOverview: "Here's your account overview",
    totalBalance: "Total Balance",
    accountNumber: "Account Number",
    accountType: "Account Type",
    savings: "Savings",
    quickActions: "Quick Actions",
    sendMoney: "Send Money",
    requestMoney: "Request Money",
    payBills: "Pay Bills",
    transactionHistory: "Transaction History",
    recentTransactions: "Recent Transactions",
    latestActivities: "Your latest banking activities",
    viewAllTransactions: "View All Transactions",
    today: "Today",
    daysAgo: "days ago",
    groceryStore: "Grocery Store",
    salaryCredit: "Salary Credit",
    electricBill: "Electric Bill",
    atmWithdrawal: "ATM Withdrawal",
    startJourney: "Start Your Journey",
    loggedOut: "Logged Out",
    loggedOutMessage: "You have been logged out successfully",
    user: "User",
    noTransactions: "No transactions yet",
  },
  hi: {
    // Branding
    appName: "अर्थसेतु",
    tagline: "सभी के लिए बैंकिंग आसान बनाई",
    
    // Navigation
    login: "लॉगिन",
    register: "रजिस्टर",
    logout: "लॉगआउट",
    getStarted: "शुरू करें",
    
    // Home Page
    empoweringRural: "ग्रामीण भारत को सशक्त बनाना",
    heroDescription: "भारत भर के ग्रामीण समुदायों के लिए विशेष रूप से डिज़ाइन की गई सुरक्षित, सुलभ और किफायती बैंकिंग सेवाओं का अनुभव करें।",
    openFreeAccount: "मुफ्त खाता खोलें",
    loginToAccount: "खाते में लॉगिन करें",
    whyChoose: "अर्थसेतु क्यों चुनें?",
    whyDescription: "ग्रामीण भारत के लिए आधुनिक बैंकिंग समाधान",
    
    // Features
    secureBanking: "सुरक्षित बैंकिंग",
    secureBankingDesc: "आपके सभी लेनदेन के लिए एंड-टू-एंड एन्क्रिप्शन के साथ बैंक-ग्रेड सुरक्षा",
    mobileFirst: "मोबाइल फर्स्ट",
    mobileFirstDesc: "किसी भी डिवाइस से कभी भी, कहीं भी अपने खाते तक पहुंचें",
    access247: "24/7 पहुंच",
    access247Desc: "चौबीसों घंटे बैंकिंग सेवाएं आपकी उंगलियों पर",
    localSupport: "स्थानीय समर्थन",
    localSupportDesc: "आपकी स्थानीय भाषा में समर्पित ग्राहक सहायता",
    
    // Benefits
    everythingInOne: "एक ही स्थान पर सब कुछ",
    zeroFees: "खाता खोलने के लिए शून्य शुल्क",
    freeTransactions: "मुफ्त डिजिटल लेनदेन",
    instantTransfers: "तत्काल धन हस्तांतरण",
    lowCostLoans: "कम लागत वाले ऋण और क्रेडिट",
    financialLiteracy: "वित्तीय साक्षरता कार्यक्रम",
    insuranceOptions: "बीमा विकल्प",
    joinUsers: "50,000+ उपयोगकर्ताओं से जुड़ें",
    experienceFuture: "ग्रामीण बैंकिंग के भविष्य का अनुभव करें",
    transactionsProcessed: "लेनदेन संसाधित",
    uptimeGuarantee: "अपटाइम गारंटी",
    customerSupport: "ग्राहक सहायता",
    
    // CTA
    readyToStart: "शुरू करने के लिए तैयार हैं?",
    readyDescription: "आज ही अपना मुफ्त खाता खोलें और ऐसी बैंकिंग का अनुभव करें जो आपके लिए काम करे",
    createFreeAccount: "मुफ्त खाता बनाएं",
    
    // Footer
    allRightsReserved: "सर्वाधिकार सुरक्षित।",
    empoweringCommunities: "सुलभ बैंकिंग के माध्यम से ग्रामीण समुदायों को सशक्त बनाना",
    
    // Login Page
    welcomeBack: "वापसी पर स्वागत है",
    loginToAccess: "अपने खाते तक पहुंचने के लिए लॉगिन करें",
    email: "ईमेल",
    emailPlaceholder: "your@email.com",
    password: "पासवर्ड",
    passwordPlaceholder: "••••••••",
    loggingIn: "लॉगिन हो रहा है...",
    dontHaveAccount: "खाता नहीं है?",
    registerHere: "यहां रजिस्टर करें",
    loginSuccessful: "लॉगिन सफल",
    loginSuccessMessage: "अर्थसेतु में आपका स्वागत है!",
    
    // Register Page
    createAccount: "खाता बनाएं",
    joinToday: "आज ही अर्थसेतु से जुड़ें",
    fullName: "पूरा नाम",
    fullNamePlaceholder: "राज कुमार",
    phoneNumber: "फोन नंबर",
    phonePlaceholder: "+91 9876543210",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    creatingAccount: "खाता बनाया जा रहा है...",
    alreadyHaveAccount: "पहले से खाता है?",
    loginHere: "यहां लॉगिन करें",
    accountCreated: "खाता बनाया गया",
    accountCreatedMessage: "आपका खाता सफलतापूर्वक बनाया गया है!",
    passwordMismatch: "पासवर्ड मेल नहीं खाते",
    error: "त्रुटि",
    
    // Dashboard
    welcomeUser: "वापसी पर स्वागत है",
    accountOverview: "यहां आपके खाते का अवलोकन है",
    totalBalance: "कुल शेष",
    accountNumber: "खाता संख्या",
    accountType: "खाता प्रकार",
    savings: "बचत",
    quickActions: "त्वरित क्रियाएं",
    sendMoney: "पैसे भेजें",
    requestMoney: "पैसे का अनुरोध करें",
    payBills: "बिल भुगतान",
    transactionHistory: "लेनदेन इतिहास",
    recentTransactions: "हाल के लेनदेन",
    latestActivities: "आपकी नवीनतम बैंकिंग गतिविधियां",
    viewAllTransactions: "सभी लेनदेन देखें",
    today: "आज",
    daysAgo: "दिन पहले",
    groceryStore: "किराना स्टोर",
    salaryCredit: "वेतन जमा",
    electricBill: "बिजली बिल",
    atmWithdrawal: "एटीएम निकासी",
    startJourney: "अपनी यात्रा शुरू करें",
    loggedOut: "लॉग आउट",
    loggedOutMessage: "आप सफलतापूर्वक लॉग आउट हो गए हैं",
    user: "उपयोगकर्ता",
    noTransactions: "अभी तक कोई लेनदेन नहीं",
  },
  kn: {
    // Branding
    appName: "ಅರ್ಥಸೇತು",
    tagline: "ಎಲ್ಲರಿಗೂ ಬ್ಯಾಂಕಿಂಗ್ ಸರಳವಾಗಿದೆ",
    
    // Navigation
    login: "ಲಾಗಿನ್",
    register: "ನೋಂದಣಿ",
    logout: "ಲಾಗೌಟ್",
    getStarted: "ಪ್ರಾರಂಭಿಸಿ",
    
    // Home Page
    empoweringRural: "ಗ್ರಾಮೀಣ ಭಾರತವನ್ನು ಬಲಪಡಿಸುವುದು",
    heroDescription: "ಭಾರತದಾದ್ಯಂತ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸುರಕ್ಷಿತ, ಪ್ರವೇಶಿಸಬಹುದಾದ ಮತ್ತು ಕೈಗೆಟುಕುವ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ಅನುಭವಿಸಿ.",
    openFreeAccount: "ಉಚಿತ ಖಾತೆ ತೆರೆಯಿರಿ",
    loginToAccount: "ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ",
    whyChoose: "ಅರ್ಥಸೇತು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?",
    whyDescription: "ಗ್ರಾಮೀಣ ಭಾರತಕ್ಕಾಗಿ ಆಧುನಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಪರಿಹಾರಗಳು",
    
    // Features
    secureBanking: "ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕಿಂಗ್",
    secureBankingDesc: "ನಿಮ್ಮ ಎಲ್ಲಾ ವಹಿವಾಟುಗಳಿಗೆ ಎಂಡ್-ಟು-ಎಂಡ್ ಎನ್‌ಕ್ರಿಪ್ಶನ್ ಜೊತೆಗೆ ಬ್ಯಾಂಕ್-ಗ್ರೇಡ್ ಸುರಕ್ಷತೆ",
    mobileFirst: "ಮೊಬೈಲ್ ಫಸ್ಟ್",
    mobileFirstDesc: "ಯಾವುದೇ ಸಾಧನದಿಂದ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ, ಎಲ್ಲಿಯಾದರೂ ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಪ್ರವೇಶಿಸಿ",
    access247: "24/7 ಪ್ರವೇಶ",
    access247Desc: "ನಿಮ್ಮ ಬೆರಳ ತುದಿಯಲ್ಲಿ ಗಡಿಯಾರದ ಸುತ್ತ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು",
    localSupport: "ಸ್ಥಳೀಯ ಬೆಂಬಲ",
    localSupportDesc: "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಭಾಷೆಯಲ್ಲಿ ಸಮರ್ಪಿತ ಗ್ರಾಹಕ ಬೆಂಬಲ",
    
    // Benefits
    everythingInOne: "ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನಿಮಗೆ ಬೇಕಾದ ಎಲ್ಲವೂ",
    zeroFees: "ಖಾತೆ ತೆರೆಯಲು ಶೂನ್ಯ ಶುಲ್ಕ",
    freeTransactions: "ಉಚಿತ ಡಿಜಿಟಲ್ ವಹಿವಾಟುಗಳು",
    instantTransfers: "ತತ್‌ಕ್ಷಣ ಹಣ ವರ್ಗಾವಣೆ",
    lowCostLoans: "ಕಡಿಮೆ-ವೆಚ್ಚದ ಸಾಲಗಳು ಮತ್ತು ಕ್ರೆಡಿಟ್",
    financialLiteracy: "ಆರ್ಥಿಕ ಸಾಕ್ಷರತಾ ಕಾರ್ಯಕ್ರಮಗಳು",
    insuranceOptions: "ವಿಮಾ ಆಯ್ಕೆಗಳು",
    joinUsers: "50,000+ ಬಳಕೆದಾರರೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ",
    experienceFuture: "ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕಿಂಗ್‌ನ ಭವಿಷ್ಯವನ್ನು ಅನುಭವಿಸಿ",
    transactionsProcessed: "ವಹಿವಾಟುಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗಿದೆ",
    uptimeGuarantee: "ಅಪ್‌ಟೈಮ್ ಗ್ಯಾರಂಟಿ",
    customerSupport: "ಗ್ರಾಹಕ ಬೆಂಬಲ",
    
    // CTA
    readyToStart: "ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರಾಗಿದ್ದೀರಾ?",
    readyDescription: "ಇಂದು ನಿಮ್ಮ ಉಚಿತ ಖಾತೆಯನ್ನು ತೆರೆಯಿರಿ ಮತ್ತು ನಿಮಗಾಗಿ ಕೆಲಸ ಮಾಡುವ ಬ್ಯಾಂಕಿಂಗ್ ಅನ್ನು ಅನುಭವಿಸಿ",
    createFreeAccount: "ಉಚಿತ ಖಾತೆ ರಚಿಸಿ",
    
    // Footer
    allRightsReserved: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    empoweringCommunities: "ಪ್ರವೇಶಿಸಬಹುದಾದ ಬ್ಯಾಂಕಿಂಗ್ ಮೂಲಕ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳನ್ನು ಬಲಪಡಿಸುವುದು",
    
    // Login Page
    welcomeBack: "ಮರಳಿ ಸ್ವಾಗತ",
    loginToAccess: "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಪ್ರವೇಶಿಸಲು ಲಾಗಿನ್ ಮಾಡಿ",
    email: "ಇಮೇಲ್",
    emailPlaceholder: "your@email.com",
    password: "ಪಾಸ್‌ವರ್ಡ್",
    passwordPlaceholder: "••••••••",
    loggingIn: "ಲಾಗಿನ್ ಆಗುತ್ತಿದೆ...",
    dontHaveAccount: "ಖಾತೆ ಇಲ್ಲವೇ?",
    registerHere: "ಇಲ್ಲಿ ನೋಂದಣಿ ಮಾಡಿ",
    loginSuccessful: "ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಯಿತು",
    loginSuccessMessage: "ಅರ್ಥಸೇತುಗೆ ಮರಳಿ ಸ್ವಾಗತ!",
    
    // Register Page
    createAccount: "ಖಾತೆ ರಚಿಸಿ",
    joinToday: "ಇಂದು ಅರ್ಥಸೇತು ಸೇರಿಕೊಳ್ಳಿ",
    fullName: "ಪೂರ್ಣ ಹೆಸರು",
    fullNamePlaceholder: "ರಾಜ್ ಕುಮಾರ್",
    phoneNumber: "ಫೋನ್ ಸಂಖ್ಯೆ",
    phonePlaceholder: "+91 9876543210",
    confirmPassword: "ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ",
    creatingAccount: "ಖಾತೆಯನ್ನು ರಚಿಸಲಾಗುತ್ತಿದೆ...",
    alreadyHaveAccount: "ಈಗಾಗಲೇ ಖಾತೆ ಹೊಂದಿದ್ದೀರಾ?",
    loginHere: "ಇಲ್ಲಿ ಲಾಗಿನ್ ಮಾಡಿ",
    accountCreated: "ಖಾತೆಯನ್ನು ರಚಿಸಲಾಗಿದೆ",
    accountCreatedMessage: "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ!",
    passwordMismatch: "ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ",
    error: "ದೋಷ",
    
    // Dashboard
    welcomeUser: "ಮರಳಿ ಸ್ವಾಗತ",
    accountOverview: "ಇಲ್ಲಿ ನಿಮ್ಮ ಖಾತೆಯ ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ",
    totalBalance: "ಒಟ್ಟು ಬಾಕಿ",
    accountNumber: "ಖಾತೆ ಸಂಖ್ಯೆ",
    accountType: "ಖಾತೆ ಪ್ರಕಾರ",
    savings: "ಉಳಿತಾಯ",
    quickActions: "ತ್ವರಿತ ಕ್ರಮಗಳು",
    sendMoney: "ಹಣ ಕಳುಹಿಸಿ",
    requestMoney: "ಹಣ ವಿನಂತಿಸಿ",
    payBills: "ಬಿಲ್‌ಗಳನ್ನು ಪಾವತಿಸಿ",
    transactionHistory: "ವಹಿವಾಟು ಇತಿಹಾಸ",
    recentTransactions: "ಇತ್ತೀಚಿನ ವಹಿವಾಟುಗಳು",
    latestActivities: "ನಿಮ್ಮ ಇತ್ತೀಚಿನ ಬ್ಯಾಂಕಿಂಗ್ ಚಟುವಟಿಕೆಗಳು",
    viewAllTransactions: "ಎಲ್ಲಾ ವಹಿವಾಟುಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    today: "ಇಂದು",
    daysAgo: "ದಿನಗಳ ಹಿಂದೆ",
    groceryStore: "ಕಿರಾಣಿ ಅಂಗಡಿ",
    salaryCredit: "ಸಂಬಳ ಜಮೆ",
    electricBill: "ವಿದ್ಯುತ್ ಬಿಲ್",
    atmWithdrawal: "ಎಟಿಎಂ ಹಿಂಪಡೆಯುವಿಕೆ",
    startJourney: "ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
    loggedOut: "ಲಾಗ್ ಔಟ್",
    loggedOutMessage: "ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಲಾಗ್ ಔಟ್ ಆಗಿದ್ದೀರಿ",
    user: "ಬಳಕೆದಾರ",
    noTransactions: "ಇನ್ನೂ ಯಾವುದೇ ವಹಿವಾಟುಗಳಿಲ್ಲ",
  },
  tu: {
    // Branding (Tulu - using Kannada script)
    appName: "ಅರ್ತಸೇತು",
    tagline: "ಎಲ್ಲರ್ಗು ಬ್ಯಾಂಕಿಂಗ್ ಸುಲಭ",
    
    // Navigation
    login: "ಲಾಗಿನ್",
    register: "ನೋಂದಣಿ",
    logout: "ಲಾಗೌಟ್",
    getStarted: "ಶುರು ಮಲ್ಪುಲೆ",
    
    // Home Page
    empoweringRural: "ಗ್ರಾಮೀಣ ಭಾರತೊಕು ಬಲ ಕೊರ್ಪುನ",
    heroDescription: "ಭಾರತೊತ್ತ ಗ್ರಾಮೀಣ ಸಮುದಾಯೊಕು ವಿಶೇಷವಾಯಿನ ಸುರಕ್ಷಿತ, ಪ್ರವೇಶ ಮಲ್ಪರೆ ಆಪಿನ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಲೆನ್ ಅನುಭವ ಮಲ್ಪುಲೆ.",
    openFreeAccount: "ಉಚಿತ ಖಾತೆ ತೆರೆಲೆ",
    loginToAccount: "ಖಾತೆಗ್ ಲಾಗಿನ್ ಮಲ್ಪುಲೆ",
    whyChoose: "ಅರ್ತಸೇತು ಯಾಕೆ ಆಯ್ಕೆ ಮಲ್ಪುನೊ?",
    whyDescription: "ಗ್ರಾಮೀಣ ಭಾರತೊಕು ಆಧುನಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಪರಿಹಾರೊಲು",
    
    // Features
    secureBanking: "ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕಿಂಗ್",
    secureBankingDesc: "ಎಲ್ಲಾ ವಹಿವಾಟುಲೆಗು ಎಂಡ್-ಟು-ಎಂಡ್ ಎನ್‌ಕ್ರಿಪ್ಶನ್ ದಾಂತಿನ ಬ್ಯಾಂಕ್ ಸುರಕ್ಷತೆ",
    mobileFirst: "ಮೊಬೈಲ್ ಮುಖ್ಯ",
    mobileFirstDesc: "ಯಾವುದೇ ಸಾಧನೊಡ್ದು ಯಾವಾಗಲಾ, ಎಲ್ಲೆಲಾ ನಿಮ್ಮ ಖಾತೆನ್ ಪ್ರವೇಶ ಮಲ್ಪುಲೆ",
    access247: "24/7 ಪ್ರವೇಶ",
    access247Desc: "ನಿಮ್ಮ ಬೆರಲ್ ತುದಿಡ್ ಗಡಿಯಾರೊತ್ತ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಲು",
    localSupport: "ಸ್ಥಳೀಯ ಬೆಂಬಲ",
    localSupportDesc: "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಭಾಷೆಡ್ ಗ್ರಾಹಕ ಬೆಂಬಲ",
    
    // Benefits
    everythingInOne: "ಒಂಜೇ ಜಾಗೆಡ್ ಎಲ್ಲಾ",
    zeroFees: "ಖಾತೆ ತೆರೆಪರೆ ಶೂನ್ಯ ಶುಲ್ಕ",
    freeTransactions: "ಉಚಿತ ಡಿಜಿಟಲ್ ವಹಿವಾಟುಲು",
    instantTransfers: "ತತ್‌ಕ್ಷಣ ದುಡ್ಡು ವರ್ಗಾವಣೆ",
    lowCostLoans: "ಕಮ್ಮಿ ವೆಚ್ಚೊತ್ತ ಸಾಲೊಲು",
    financialLiteracy: "ಆರ್ಥಿಕ ಸಾಕ್ಷರತಾ ಕಾರ್ಯಕ್ರಮೊಲು",
    insuranceOptions: "ವಿಮಾ ಆಯ್ಕೆಲು",
    joinUsers: "50,000+ ಬಳಕೆದಾರೆರ್ನ ಸೇರ್‍ಲೆ",
    experienceFuture: "ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕಿಂಗ್‌ದ ಭವಿಷ್ಯೊನು ಅನುಭವ ಮಲ್ಪುಲೆ",
    transactionsProcessed: "ವಹಿವಾಟುಲೆನ್ ಪ್ರಕ್ರಿಯೆ ಮಲ್ತ್‍ದ್",
    uptimeGuarantee: "ಅಪ್‌ಟೈಮ್ ಖಚಿತ",
    customerSupport: "ಗ್ರಾಹಕ ಬೆಂಬಲ",
    
    // CTA
    readyToStart: "ಶುರು ಮಲ್ಪರೆ ಸಿದ್ಧವಾದೆ?",
    readyDescription: "ಇಂದೆ ನಿಮ್ಮ ಉಚಿತ ಖಾತೆನ್ ತೆರೆಲೆ",
    createFreeAccount: "ಉಚಿತ ಖಾತೆ ಮಲ್ಪುಲೆ",
    
    // Footer
    allRightsReserved: "ಎಲ್ಲಾ ಹಕ್ಕುಲು ಕಾಯ್ದಿರಿಸಿದ್.",
    empoweringCommunities: "ಸುಲಭ ಬ್ಯಾಂಕಿಂಗ್‌ದ ಮೂಲಕ ಗ್ರಾಮೀಣ ಸಮುದಾಯೊಕು ಬಲ ಕೊರ್ಪುನ",
    
    // Login Page
    welcomeBack: "ಪಿರ ಬರ್ಪಿನೊಕು ಸ್ವಾಗತ",
    loginToAccess: "ನಿಮ್ಮ ಖಾತೆನ್ ಪ್ರವೇಶ ಮಲ್ಪರೆ ಲಾಗಿನ್ ಮಲ್ಪುಲೆ",
    email: "ಇಮೇಲ್",
    emailPlaceholder: "your@email.com",
    password: "ಪಾಸ್‌ವರ್ಡ್",
    passwordPlaceholder: "••••••••",
    loggingIn: "ಲಾಗಿನ್ ಆವೊಂದು...",
    dontHaveAccount: "ಖಾತೆ ಇಜ್ಜಿ?",
    registerHere: "ಮುಲಕ್ ನೋಂದಣಿ ಮಲ್ಪುಲೆ",
    loginSuccessful: "ಲಾಗಿನ್ ಸಫಲವಾತ್‍ದ್",
    loginSuccessMessage: "ಅರ್ತಸೇತುಗ್ ಪಿರ ಬರ್ಪಿನೊಕು ಸ್ವಾಗತ!",
    
    // Register Page
    createAccount: "ಖಾತೆ ಮಲ್ಪುಲೆ",
    joinToday: "ಇಂದೆ ಅರ್ತಸೇತು ಸೇರ್‍ಲೆ",
    fullName: "ಪೂರಾ ಪುದರ್",
    fullNamePlaceholder: "ರಾಜ್ ಕುಮಾರ್",
    phoneNumber: "ಫೋನ್ ಸಂಖ್ಯೆ",
    phonePlaceholder: "+91 9876543210",
    confirmPassword: "ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತ ಮಲ್ಪುಲೆ",
    creatingAccount: "ಖಾತೆ ಮಲ್ಪೊಂದು...",
    alreadyHaveAccount: "ಈಗಾಲೆ ಖಾತೆ ಉಂಡೇ?",
    loginHere: "ಮುಲಕ್ ಲಾಗಿನ್ ಮಲ್ಪುಲೆ",
    accountCreated: "ಖಾತೆ ಮಲ್ತಿನೆಡ್",
    accountCreatedMessage: "ನಿಮ್ಮ ಖಾತೆ ಸಫಲವಾಯಿನ ಮಲ್ತ್‍ದ್!",
    passwordMismatch: "ಪಾಸ್‌ವರ್ಡ್‌ಲು ಹೊಂದ್‍ಜ",
    error: "ದೋಷ",
    
    // Dashboard
    welcomeUser: "ಪಿರ ಬರ್ಪಿನೊಕು ಸ್ವಾಗತ",
    accountOverview: "ಮುಲಕ್ ನಿಮ್ಮ ಖಾತೆದ ಸಂಕ್ಷಿಪ್ತ",
    totalBalance: "ಒಟ್ಟು ಬಾಕಿ",
    accountNumber: "ಖಾತೆ ಸಂಖ್ಯೆ",
    accountType: "ಖಾತೆ ಬಗೆ",
    savings: "ಉಳಿತಾಯ",
    quickActions: "ಬೇಗ ಕ್ರಮೊಲು",
    sendMoney: "ದುಡ್ಡು ಕಡಪುಡ್ಲೆ",
    requestMoney: "ದುಡ್ಡು ಕೇನ್‍ಲೆ",
    payBills: "ಬಿಲ್‌ಲೆನ್ ಕೊರ್‍ಲೆ",
    transactionHistory: "ವಹಿವಾಟು ಇತಿಹಾಸ",
    recentTransactions: "ಇತ್ತೀಚಿನ ವಹಿವಾಟುಲು",
    latestActivities: "ನಿಮ್ಮ ಇತ್ತೀಚಿನ ಬ್ಯಾಂಕಿಂಗ್ ಚಟುವಟಿಕೆಲು",
    viewAllTransactions: "ಎಲ್ಲಾ ವಹಿವಾಟುಲೆನ್ ತೂಲೆ",
    today: "ಇಂದೆ",
    daysAgo: "ದಿನೊಲೆಗ್ ದುಂಬು",
    groceryStore: "ಕಿರಾಣಿ ಅಂಗಡಿ",
    salaryCredit: "ಸಂಬಳ ಜಮೆ",
    electricBill: "ವಿದ್ಯುತ್ ಬಿಲ್",
    atmWithdrawal: "ಎಟಿಎಂ ಹಿಂದೆತ್ತುನ",
    startJourney: "ನಿಮ್ಮ ಪ್ರಯಾಣ ಶುರು ಮಲ್ಪುಲೆ",
    loggedOut: "ಲಾಗ್ ಔಟ್",
    loggedOutMessage: "ಈರ್ ಯಶಸ್ವಿಯಾಗಿ ಲಾಗ್ ಔಟ್ ಆಪುಂಡು",
    user: "ಬಳಕೆದಾರ",
    noTransactions: "ಇನ್ನೂ ವಹಿವಾಟು ಇಜ್ಜಿ",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
