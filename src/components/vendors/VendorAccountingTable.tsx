
import React from "react";
import { Award } from "lucide-react";

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
  const totalSpent = transactionRows.reduce(
    (acc, curr) => acc + (curr.spentAmount || 0),
    0
  );

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
      <h2 className="font-bold text-xl mb-2 text-yellow-700 flex items-center gap-2">
        Transparency & Accounting
      </h2>
      <p className="mb-4 text-yellow-900">
        Track resources moved by the vendor, with transparency for auditing and traceability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Total Received</p>
          <p className="font-bold text-cardano-blue">
            {totalFunded.toLocaleString()} ADA
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Spent</p>
          <p className="font-bold text-yellow-700">{totalSpent.toLocaleString()} ADA</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Remaining</p>
          <p className="font-bold text-gray-800">
            {(totalFunded - totalSpent).toLocaleString()} ADA
          </p>
        </div>
      </div>
      <div className="overflow-x-auto rounded-md border mt-4">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-semibold text-gray-700">Date</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700">Title</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700">Fund Round</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700">Received</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700">Spent</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700">Status</th>
              <th className="px-3 py-2 text-left font-semibold text-gray-700">Tx Hash</th>
            </tr>
          </thead>
          <tbody>
            {transactionRows.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-6 text-center text-gray-400 italic">
                  No transactions recorded
                </td>
              </tr>
            ) : (
              transactionRows.map((trx) => (
                <tr key={trx.id} className="bg-white hover:bg-gray-50 transition">
                  <td className="px-3 py-2 whitespace-nowrap">{new Date(trx.updatedAt).toLocaleDateString()}</td>
                  <td className="px-3 py-2">{trx.title}</td>
                  <td className="px-3 py-2">{trx.fundRound}</td>
                  <td className="px-3 py-2 text-cardano-blue">{trx.fundedAmount.toLocaleString()} ADA</td>
                  <td className="px-3 py-2 text-yellow-700">{trx.spentAmount.toLocaleString()} ADA</td>
                  <td className="px-3 py-2 capitalize">
                    <span className={
                      trx.status === "approved" ? "text-green-700 font-medium" :
                      trx.status === "rejected" ? "text-red-600 font-medium" :
                      trx.status === "completed" ? "text-purple-700 font-medium" :
                      trx.status === "active" ? "text-blue-700 font-medium" :
                      "text-gray-700" }>
                      {trx.status}
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
                      <span className="text-gray-300">-</span>
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
