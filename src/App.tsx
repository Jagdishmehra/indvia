import { useState } from 'react';
import {
  Menu,
  ChevronLeft,
  Cloud,
  Users,
  Search,
  Plus,
  MoreVertical,
  LayoutGrid,
  Megaphone,
  BarChart3,
  BookOpen,
  Building2,
  Settings,
  ChevronDown,
  Bell,
  Share2,
  ChevronRight,
  Filter,
  Download
} from 'lucide-react';
import SegmentationSettingsModal from './components/SegmentationSettingsModal';
import CreateSegmentModal from './components/CreateSegmentModal';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isCreateSegmentModalOpen, setIsCreateSegmentModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'segments' | 'profile'>('segments');

  const segments = [
    { id: 1, name: 'New Subscribers', type: 'Lifecycle', size: '1,284', updated: 'Today' },
    { id: 2, name: 'Active Customers', type: 'Lifecycle', size: '642', updated: 'Today' },
    { id: 3, name: 'VIP Customers', type: 'Value', size: '121', updated: 'Today' },
    { id: 4, name: 'Flannel Lovers', type: 'Product Affinity', size: '392', updated: 'Today', hasIndicator: true },
    { id: 5, name: 'Dormant (180+ days)', type: 'Lifecycle', size: '988', updated: 'Today' },
  ];

  const avatars = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className={`${sidebarCollapsed ? 'w-16' : 'w-60'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
        <div className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">I</span>
          </div>
          {!sidebarCollapsed && (
            <div>
              <h1 className="text-lg font-bold text-purple-600">Individia AI</h1>
              <p className="text-xs text-gray-500">AI native D2C CRM</p>
            </div>
          )}
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          <div className={`flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <LayoutGrid className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && (
              <div className="flex-1">
                <div className="text-sm font-medium">Dashboard</div>
                <div className="text-xs text-gray-400">Performance overview</div>
              </div>
            )}
          </div>

          <div className={`flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <Megaphone className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && (
              <>
                <span className="text-sm font-medium flex-1">Campaigns</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </div>

          <div className={`flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <BarChart3 className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && (
              <>
                <span className="text-sm font-medium flex-1">Analytics</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </div>

          <div className={`flex items-center gap-3 px-3 py-3 bg-indigo-500 text-white rounded-lg cursor-pointer ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <Users className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && (
              <>
                <span className="text-sm font-medium flex-1">Personas & Audience</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </div>

          <div className={`flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <BookOpen className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && (
              <>
                <div className="flex-1">
                  <div className="text-sm font-medium">Playbooks</div>
                  <div className="text-xs text-gray-400">Automation journeys</div>
                </div>
                <ChevronLeft className="w-4 h-4" />
              </>
            )}
          </div>

          <div className={`flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <Building2 className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && (
              <>
                <span className="text-sm font-medium flex-1">Brand Management</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </div>
        </nav>

        <div className="border-t border-gray-200 p-2">
          <div className={`flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <Settings className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && (
              <>
                <span className="text-sm font-medium flex-1">Settings</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </div>

          {!sidebarCollapsed && (
            <div className="mt-2 p-3 flex items-center gap-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">Naman P.</span>
            </div>
          )}
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-indigo-500 text-white px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-indigo-600 rounded-lg">
              <Menu className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-indigo-600 rounded-lg">
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>
            <div className="flex items-center gap-2 px-3 py-2 bg-indigo-600 rounded-lg">
              <Cloud className="w-4 h-4" />
              <span className="text-sm">Last Saved 8:10PM</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
              <span className="text-sm font-medium">Jake & Sage</span>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center -space-x-2">
              {avatars.map((avatar, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-indigo-500 overflow-hidden bg-white">
                  <img src={avatar} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-indigo-500 bg-white flex items-center justify-center">
                <span className="text-xs font-medium text-gray-700">+9</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-indigo-600 rounded-lg">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </button>
            <button className="p-2 hover:bg-indigo-600 rounded-lg">
              <Bell className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentPage(currentPage === 'segments' ? 'profile' : 'segments')}
              className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100"
            >
              <span className="text-sm">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto bg-gray-50">
          {currentPage === 'segments' ? (
            <div className="max-w-7xl mx-auto p-8">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <Users className="w-5 h-5" />
                  <h1 className="text-2xl font-semibold text-gray-900">Audience Segments</h1>
                </div>
                <p className="text-sm text-gray-500">Automatically Updated Customer Groups For Targeting And Messaging.</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between gap-4">
                  <div className="flex-1 relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <button
                    onClick={() => setIsSettingsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-medium">Create Segmentation settings</span>
                  </button>
                  <button
                    onClick={() => setIsCreateSegmentModalOpen(true)}
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600"
                  >
                    Create Segment
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="w-12 px-6 py-3"></th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Segment Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Size
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Updated
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {segments.map((segment) => (
                        <tr key={segment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-medium text-indigo-600 hover:text-indigo-700 cursor-pointer">
                              {segment.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-700">{segment.type}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-900">{segment.size}</span>
                              {segment.hasIndicator && (
                                <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {segment.updated}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button className="text-gray-400 hover:text-gray-600">
                              <MoreVertical className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Customer Profile</h1>
                  <p className="text-sm text-gray-500 mt-1">View and analyze detailed customer information across all attributes</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">last synced with shopify</span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600">
                    <Plus className="w-4 h-4" />
                    Add Contact
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-600 mt-2">Total Customer</div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900">1</div>
                  <div className="text-sm text-gray-600 mt-2">Avg CLV</div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900">1</div>
                  <div className="text-sm text-gray-600 mt-2">Active Customers</div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900">1</div>
                  <div className="text-sm text-gray-600 mt-2">Avg. Order Value</div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <div className="grid grid-cols-5 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>All City</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Any</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Total Orders</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Any</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Total Sprint</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Any</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Avg Discount %</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Any</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lifecycle Stage</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>All City</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Persona</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Any</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Marketing</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Any</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex-1 relative max-w-md">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      <span className="text-sm">Filter</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Export</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="w-12 px-6 py-3"></th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-medium text-indigo-600 hover:text-indigo-700 cursor-pointer">#123456</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-700">Lifecycle</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-700">abc@gmail.com</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-700">+91 12345 68791</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-700">Ahemdabad</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <SegmentationSettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
      />

      <CreateSegmentModal
        isOpen={isCreateSegmentModalOpen}
        onClose={() => setIsCreateSegmentModalOpen(false)}
      />
    </div>
  );
}

export default App;
