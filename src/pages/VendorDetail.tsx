import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building, Wallet, Briefcase, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import { intersectProjects } from '@/data/intersectData';
import { useLanguage } from '@/contexts/LanguageContext';

import VendorAccountingTable from '@/components/vendors/VendorAccountingTable';

const VendorDetail = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const vendorName = decodeURIComponent(id || '');
  
  // Find all projects for this vendor
  const vendorProjects = useMemo(() => {
    return intersectProjects.filter(p => p.vendor === vendorName);
  }, [vendorName]);

  // Aggregate stats
  const stats = useMemo(() => {
    if (vendorProjects.length === 0) return null;
    
    return {
      totalFunded: vendorProjects.reduce((acc, p) => acc + p.totalAmount, 0),
      amountSpent: vendorProjects.reduce((acc, p) => acc + p.amountSpent, 0),
      projectCount: vendorProjects.length,
      completedCount: vendorProjects.filter(p => p.status.toLowerCase() === 'completed').length,
    };
  }, [vendorProjects]);

  if (vendorProjects.length === 0 || !stats) {
    return (
      <Layout>
        <div className="text-center py-20">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
            <Building className="h-8 w-8 text-gray-400 dark:text-gray-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('vendor_detail.not_found')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{t('vendor_detail.not_found_desc').replace('{name}', vendorName)}</p>
          <Button asChild>
            <Link to="/vendors">{t('vendor_detail.back_to_vendors')}</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const transactionRows = vendorProjects.map(project => ({
    id: project.id,
    title: project.projectName,
    fundRound: "Intersect Treasury 1",
    requestedAmount: project.totalAmount,
    fundedAmount: project.totalAmount,
    spentAmount: project.amountSpent,
    status: project.status,
    updatedAt: new Date().toISOString(),
  }));

  return (
    <Layout>
      <div className="mb-6">
        <Link to="/vendors" className="inline-flex items-center text-sm text-cardano-blue dark:text-blue-300 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> {t('vendor_detail.back_to_vendors')}
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
          <div className="flex items-center gap-4">
            <div className="bg-cardano-blue/10 dark:bg-cardano-blue/20 p-4 rounded-2xl text-cardano-blue dark:text-blue-300">
              <Building className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-900/50">{t('vendor_detail.official_vendor')}</Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{vendorName}</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              {t('vendor_detail.contact_vendor')}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-cardano-blue" />
              {t('vendor_detail.vendor_profile')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('vendor_detail.vendor_desc')
                .replace('{name}', vendorName)
                .replace('{count}', stats.projectCount.toString())
                .replace('{total}', stats.totalFunded.toLocaleString())}
            </p>
          </div>

          <VendorAccountingTable
            transactionRows={transactionRows}
            totalFunded={stats.totalFunded}
          />
        </div>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
            <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-6">{t('vendor_detail.financial_summary')}</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('vendor_detail.total_allocated')}</p>
                <p className="text-2xl font-bold text-cardano-blue dark:text-blue-300 flex items-center">
                  <Wallet className="h-5 w-5 mr-2" />
                  ₳{stats.totalFunded.toLocaleString()}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('vendor_detail.total_spent')}</p>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-500">
                  ₳{stats.amountSpent.toLocaleString()}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-50 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{t('vendor_detail.execution_progress')}</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {((stats.amountSpent / stats.totalFunded) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-cardano-blue h-full" 
                    style={{ width: `${(stats.amountSpent / stats.totalFunded) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold mb-1">{t('vendor_detail.projects')}</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{stats.projectCount}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold mb-1">{t('vendor_detail.completed')}</p>
                  <p className="text-lg font-bold text-green-600 dark:text-green-500">{stats.completedCount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorDetail;
