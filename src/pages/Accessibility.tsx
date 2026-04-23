
import React from 'react';
import Layout from '@/components/layout/Layout';

const Accessibility = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4 prose prose-blue dark:prose-invert lg:prose-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b dark:border-gray-800 pb-4">Accessibility Statement</h1>
        
        <p className="lead">
          ADAspending is committed to providing access to our web content for all visitors, including those with disabilities.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Commitment</h2>
          <p>
            As a community-driven project tracking the Cardano Treasury, transparency and inclusion are at the core of our mission. 
            We strive to ensure that everyone, regardless of technology or ability, can access and understand the financial data of the Cardano ecosystem.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Standards and Compliance</h2>
          <p>
            We aim to adhere to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1</strong> at the AA level. 
            These guidelines explain how to make web content more accessible for people with disabilities, and user-friendly for everyone.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Keyboard Navigation:</strong> Most site features can be accessed using only a keyboard.</li>
            <li><strong>Screen Reader Support:</strong> We use semantic HTML to improve the experience for users of assistive technologies.</li>
            <li><strong>Clear Typography:</strong> We prioritize readability and high contrast in our data visualizations.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Blockchain Data Accessibility</h2>
          <p>
            Providing complex financial data from the blockchain in an accessible format is a challenge we embrace. 
            We are constantly improving our charts and tables to be more intuitive and accessible to screen readers and diverse cognitive needs.
          </p>
        </section>

        <section className="mt-8 bg-cardano-blue/5 dark:bg-cardano-blue/10 p-6 rounded-xl border border-cardano-blue/20 dark:border-cardano-blue/30 transition-colors">
          <h2 className="text-xl font-bold text-cardano-blue mb-2">Need Assistance?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you encounter accessibility barriers or have suggestions on how we can improve, please reach out to us at:
          </p>
          <p className="font-bold text-lg mt-2">
            <a href="mailto:hello@adaspending.com" className="text-cardano-blue hover:underline">hello@adaspending.com</a>
          </p>
        </section>
        
        <div className="mt-12 text-sm text-gray-500 italic">
          Last updated: April 2024
        </div>
      </div>
    </Layout>
  );
};

export default Accessibility;
