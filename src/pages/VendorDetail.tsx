import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building, Wallet, Info, Globe, Mail, MessageCircle, Github, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import { intersectProjects } from '@/data/intersectData';
import { getVendorProfile } from '@/data/vendorProfiles';
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

  // Get vendor profile (logo, links, description)
  const profile = useMemo(() => getVendorProfile(vendorName), [vendorName]);

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

  const hasLinks = profile && (profile.website || profile.email || profile.discord || profile.github || profile.twitter);

  return (
    <Layout>
      <div className="mb-6">
        <Link to="/vendors" className="inline-flex items-center text-sm text-cardano-blue dark:text-blue-300 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> {t('vendor_detail.back_to_vendors')}
        </Link>

        {/* Vendor Header Card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
          <div className="flex items-center gap-4">
            {/* Logo or fallback icon */}
            {profile?.logo ? (
              <img
                src={profile.logo}
                alt={`${vendorName} logo`}
                className="w-16 h-16 rounded-2xl object-cover border border-gray-100 dark:border-gray-700 shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const next = (e.target as HTMLImageElement).nextElementSibling as HTMLElement | null;
                  if (next) next.style.display = 'flex';
                }}
              />
            ) : null}
            <div className={`bg-cardano-blue/10 dark:bg-cardano-blue/20 p-4 rounded-2xl text-cardano-blue dark:text-blue-300 ${profile?.logo ? 'hidden' : 'flex'}`}>
              <Building className="h-8 w-8" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-900/50">
                  {t('vendor_detail.official_vendor')}
                </Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{vendorName}</h1>
              {profile?.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-lg">{profile.description}</p>
              )}
            </div>
          </div>

          {/* Quick action buttons */}
          <div className="flex flex-wrap gap-2">
            {profile?.website && (
              <a href={profile.website} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" /> Website <ExternalLink className="h-3 w-3 opacity-50" />
                </Button>
              </a>
            )}
            {profile?.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" /> GitHub <ExternalLink className="h-3 w-3 opacity-50" />
                </Button>
              </a>
            )}
            {profile?.twitter && (
              <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Twitter className="h-4 w-4" /> X / Twitter <ExternalLink className="h-3 w-3 opacity-50" />
                </Button>
              </a>
            )}
            {profile?.discord && (
              <a href={profile.discord} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <MessageCircle className="h-4 w-4" /> Discord <ExternalLink className="h-3 w-3 opacity-50" />
                </Button>
              </a>
            )}
            {profile?.email && (
              <a href={`mailto:${profile.email}`}>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" /> {t('vendor_detail.contact_vendor')}
                </Button>
              </a>
            )}
            {!hasLinks && (
              <Button variant="outline" size="sm">{t('vendor_detail.contact_vendor')}</Button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main column */}
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

          <VendorAccountingTable transactionRows={transactionRows} totalFunded={stats.totalFunded} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Info Card */}
          {hasLinks && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-5">
                {t('vendor_detail.contact_info')}
              </h3>
              <ul className="space-y-3">
                {profile.website && (
                  <li>
                    <a href={profile.website} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                        <Globe className="h-4 w-4 text-gray-400 group-hover:text-cardano-blue transition-colors" />
                      </div>
                      <span className="truncate">{profile.website.replace(/^https?:\/\//, '')}</span>
                    </a>
                  </li>
                )}
                {profile.email && (
                  <li>
                    <a href={`mailto:${profile.email}`}
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4 text-gray-400 group-hover:text-cardano-blue transition-colors" />
                      </div>
                      <span className="truncate">{profile.email}</span>
                    </a>
                  </li>
                )}
                {profile.discord && (
                  <li>
                    <a href={profile.discord} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                        <MessageCircle className="h-4 w-4 text-gray-400 group-hover:text-cardano-blue transition-colors" />
                      </div>
                      <span>Discord</span>
                    </a>
                  </li>
                )}
                {profile.github && (
                  <li>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                        <Github className="h-4 w-4 text-gray-400 group-hover:text-cardano-blue transition-colors" />
                      </div>
                      <span className="truncate">{profile.github.replace('https://github.com/', '@')}</span>
                    </a>
                  </li>
                )}
                {profile.twitter && (
                  <li>
                    <a href={profile.twitter} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-cardano-blue dark:hover:text-blue-400 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0">
                        <Twitter className="h-4 w-4 text-gray-400 group-hover:text-cardano-blue transition-colors" />
                      </div>
                      <span className="truncate">{profile.twitter.replace('https://x.com/', '@')}</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Financial Summary Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
            <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-6">
              {t('vendor_detail.financial_summary')}
            </h3>
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
                  <div className="bg-cardano-blue h-full" style={{ width: `${(stats.amountSpent / stats.totalFunded) * 100}%` }} />
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
