interface TabSelectorProps {
  activeTab: 'donors' | 'requests';
  donorsCount: number;
  requestsCount: number;
  onTabChange: (tab: 'donors' | 'requests') => void;
}

export default function TabSelector({ 
  activeTab, 
  donorsCount, 
  requestsCount, 
  onTabChange 
}: TabSelectorProps) {
  return (
    <div className="flex space-x-4">
      <button
        className={`px-4 py-2 rounded-lg ${
          activeTab === 'donors'
            ? 'bg-red-600 text-white'
            : 'bg-gray-100 text-gray-700'
        }`}
        onClick={() => onTabChange('donors')}
      >
        Donors ({donorsCount})
      </button>
      <button
        className={`px-4 py-2 rounded-lg ${
          activeTab === 'requests'
            ? 'bg-red-600 text-white'
            : 'bg-gray-100 text-gray-700'
        }`}
        onClick={() => onTabChange('requests')}
      >
        Requests ({requestsCount})
      </button>
    </div>
  );
}