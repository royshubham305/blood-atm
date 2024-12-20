import { DonorSubmission, RecipientSubmission } from '../../types/admin';

interface DataTableProps {
  data: DonorSubmission[] | RecipientSubmission[];
  type: 'donors' | 'requests';
}

export default function DataTable({ data, type }: DataTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {type === 'donors' ? (
                <>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Blood Group</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mobile</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                </>
              ) : (
                <>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Blood Group</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mobile</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hospital</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {type === 'donors'
              ? (data as DonorSubmission[]).map((donor) => (
                  <tr key={donor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{donor.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{donor.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{donor.bloodGroup}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{donor.mobile}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{donor.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{donor.ip}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{donor.timestamp}</td>
                  </tr>
                ))
              : (data as RecipientSubmission[]).map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{request.patientName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{request.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{request.bloodGroup}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{request.mobile}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{request.hospitalName}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{request.ip}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{request.timestamp}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}