
import React from 'react';
import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4 prose prose-blue dark:prose-invert lg:prose-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b dark:border-gray-800 pb-4">Privacy Policy</h1>
        
        <p className="lead">
          Your privacy is important to us. ADAspending is an open-source project dedicated to transparency, and that includes how we handle information.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">1. Information We Collect</h2>
          <p>
            <strong>Blockchain Data:</strong> All financial information displayed on this site is sourced directly from the public Cardano blockchain. This data is permanent, public, and transparent by nature.
          </p>
          <p>
            <strong>Personal Information:</strong> We do not require registration, login, or any personal information to use ADAspending. We do not collect names, addresses, or any other personally identifiable information (PII).
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">2. Cookies and Tracking</h2>
          <p>
            ADAspending uses minimal technical cookies necessary for the site to function correctly (e.g., to remember your theme preference). We do not use third-party tracking or advertising cookies.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">3. External Links</h2>
          <p>
            Our site contains links to other websites like Intersect, Sundae, and Cexplorer. We are not responsible for the privacy practices of these external sites.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">4. Open Source</h2>
          <p>
            ADAspending is 100% open source. You can audit our code to verify how we handle data at any time.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">5. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@adaspending.com">hello@adaspending.com</a>.
          </p>
        </section>

        <div className="mt-12 text-sm text-gray-500 italic">
          Last updated: April 2024
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
