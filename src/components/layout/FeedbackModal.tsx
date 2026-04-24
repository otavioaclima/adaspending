import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeedbackModal = () => {
  const { t } = useLanguage();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('adaspending-feedback-dismissed');
    if (!dismissed) {
      // Small delay to show after page load
      const timer = setTimeout(() => setShowFeedbackModal(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseFeedback = () => {
    setShowFeedbackModal(false);
    localStorage.setItem('adaspending-feedback-dismissed', 'true');
  };

  if (!showFeedbackModal) return null;

  return (
    /* Floating Feedback Modal */
    <div className="fixed bottom-6 right-6 z-[100] max-w-[320px] bg-cardano-blue text-white p-5 rounded-2xl shadow-2xl border border-white/20 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <button
        onClick={handleCloseFeedback}
        className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
        aria-label="Close feedback"
      >
        <X className="h-4 w-4" />
      </button>
      
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 p-1.5 rounded-lg">
            <Mail className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-sm tracking-tight">Feedback</span>
        </div>
        
        <p className="text-xs leading-relaxed text-white/90">
          {t('banner.feedback_text')}
        </p>
        
        <a
          href="https://forms.gle/abZaMeFyUJHBYTXQA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-2 bg-white text-cardano-blue hover:bg-white/90 px-4 py-2 rounded-xl text-xs font-bold transition-all transform active:scale-95 shadow-sm"
        >
          {t('banner.survey_link')}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default FeedbackModal;
