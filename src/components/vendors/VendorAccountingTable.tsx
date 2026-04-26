
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export type TransactionRow = {
  id: string;
  title: string;
  fundRound: string;
  requestedAmount: number;
  fundedAmount: number;
  spentAmount: number;
  transactionHash?: string;
  status: string;
  updatedAt: string;
};

type Props = {
  transactionRows: TransactionRow[];
  totalFunded: number;
};

const VendorAccountingTable = ({ transactionRows, totalFunded }: Props) => {
  const { t } = useLanguage();
  const totalSpent = transactionRows.reduce(
    (acc, curr) => acc + (curr.spentAmount || 0),
    0
  );

  return (
    <div className="bg-yellow-50 dark:bg-yellow-950/10 border border-yellow-200 dark:border-yellow-900/30 rounded-lg p-6">
      <h2 className="font-bold text-xl mb-2 text-yellow-700 flex items-center gap-2">
        {t('accounting.title')}
      </h2>
      <p className="mb-4 text-yellow-900 dark:text-yellow-200/80">
        {t('accounting.desc')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('accounting.total_received')}</p>
          <p className="font-bold text-cardano-blue dark:text-blue-400">
            ₳{totalFunded.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('accounting.total_spent')}</p>
          <p className="font-bold text-orange-600 dark:text-orange-500">₳{totalSpent.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('accounting.remaining')}</p>
          <p className="font-bold text-green-600 dark:text-green-500">
            ₳{(totalFunded - totalSpent).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="overflow-x-auto rounded-md border dark:border-gray-700 mt-4">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">{t('accounting.date')}</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">{t('accounting.title_col')}</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">{t('accounting.fund_round')}</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">{t('accounting.received')}</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">{t('accounting.spent')}</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">{t('accounting.status')}</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">{t('accounting.tx_hash')}</th>
            </tr>
          </thead>
          <tbody>
            {transactionRows.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-6 text-center text-gray-400 dark:text-gray-500 italic">
                  {t('accounting.no_transactions')}
                </td>
              </tr>
            ) : (
              transactionRows.map((trx) => (
                <tr key={trx.id} className="bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="px-3 py-2 whitespace-nowrap text-gray-700 dark:text-gray-300">{new Date(trx.updatedAt).toLocaleDateString()}</td>
                  <td className="px-3 py-2 text-gray-700 dark:text-gray-300">{trx.title}</td>
                  <td className="px-3 py-2 text-gray-700 dark:text-gray-300">{trx.fundRound}</td>
                  <td className="px-3 py-2 text-cardano-blue dark:text-blue-400">₳{trx.fundedAmount.toLocaleString()}</td>
                  <td className="px-3 py-2 text-orange-600 dark:text-orange-500">₳{trx.spentAmount.toLocaleString()}</td>
                  <td className="px-3 py-2 capitalize">
                    <span className={
                      trx.status === "approved" ? "text-green-700 font-medium" :
                      trx.status === "rejected" ? "text-red-600 font-medium" :
                      trx.status === "completed" ? "text-purple-700 font-medium" :
                      trx.status === "active" ? "text-blue-700 font-medium" :
                      "text-gray-700 dark:text-gray-300" }>
                      {t('status.' + trx.status.toLowerCase().replace(' ', '_'))}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    {trx.transactionHash ? (
                      <a
                        href={`https://cexplorer.io/tx/${trx.transactionHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline break-all"
                      >
                        {trx.transactionHash.slice(0, 8)}...
                      </a>
                    ) : (
                      <span className="text-gray-300 dark:text-gray-600">-</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorAccountingTable;
