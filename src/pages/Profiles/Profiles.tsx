import { Layer, StatCard, TitleWrapper, Title, Card } from "../../components/Card";
import { Input, Select } from "../../components/Input";
const Profiles = () => {
    return (
        <div>
        <div className="py-6">
          <TitleWrapper>
            <Title>Statistics</Title>
          </TitleWrapper>
          <Layer>
            {/* <!-- Replace with your content --> */}
            <div className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard>
                  <h1 className="text-md text-gray-500 font-light">
                    NEW USERS
                  </h1>
                  <h1 className="text-md text-gray-900">0</h1>
                </StatCard>
                <StatCard>
                  <h1 className="text-md text-gray-500 font-light">
                    ALL USERS
                  </h1>
                  <h1 className="text-md text-gray-900">0</h1>
                </StatCard>
                <StatCard>
                  <h1 className="text-md text-gray-500 font-light">
                    INTERNAL TRANSFERS
                  </h1>
                  <h1 className="text-md text-gray-900">0</h1>
                </StatCard>
                <StatCard>
                  <h1 className="text-md text-gray-500 font-light">
                    INTERNAL TRANSFERS
                  </h1>
                  <h1 className="text-md text-gray-900">0</h1>
                </StatCard>
              </div>
            </div>
            {/* <!-- /End replace --> */}
          </Layer>
          <TitleWrapper>
            <Title>Suspended Users</Title>
          </TitleWrapper>
          <Layer>
            
          </Layer>

  
          <Layer>
            <Card>
              <div className=" overflow-x-scroll border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        BTC
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        USD
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Network Fee
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Platform Fee
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Profile
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Internal/External
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Transfer Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Regional Paradigm Technician
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        jane.cooper@example.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Admin
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Admin
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Admin
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Admin
                      </td>
  
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Admin
                      </td>
                    </tr>
  
                    {/* <!-- More people... --> */}
                  </tbody>
                </table>
              </div>
            </Card>
          </Layer>
          <TitleWrapper>
            <Title>Unverified Profiles</Title>
          </TitleWrapper>
          <Layer>
            <Card>
              <div className=" overflow-x-scroll border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Phone Verified
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email Verified
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID Verified
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID Uploaded
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ACTION
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Jane
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        JCooper@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-green-200 text-blue-700 px-4 rounded p-2">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-green-200 text-blue-700 px-4 rounded p-2">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td>
                        <button className="bg-blue-500 px-2 text-white rounded">
                          OK
                        </button>
                      </td>
                    </tr>
  
                    {/* <!-- More people... --> */}
                  </tbody>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Jane
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        JCooper@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-green-200 text-blue-700 px-4 rounded p-2">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-green-200 text-blue-700 px-4 rounded p-2">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td>
                        <button className="bg-blue-500 px-2 text-white rounded">
                          OK
                        </button>
                      </td>
                    </tr>
  
                    {/* <!-- More people... --> */}
                  </tbody>
                </table>
              </div>
            </Card>
          </Layer>
          <TitleWrapper>
            <Title>Profiles</Title>
          </TitleWrapper>
          <Layer>
            <Card>
              <div className=" overflow-x-scroll border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Phone Verified
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email Verified
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID Verified
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID Uploaded
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ACTION
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Jane
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        JCooper@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-green-200 text-blue-700 px-4 rounded p-2">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="bg-green-200 text-blue-700 px-4 rounded p-2">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td>
                        <button className="bg-blue-500 px-2 text-white rounded">
                          OK
                        </button>
                      </td>
                    </tr>
  
                    {/* <!-- More people... --> */}
                  </tbody>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Jane
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        JCooper@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-green-200 text-blue-700 px-4 rounded p-2">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="bg-red-400 text-white px-4 rounded p-2">Not Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td>
                        <button className="bg-blue-500 px-2 text-white rounded">
                          OK
                        </button>
                      </td>
                    </tr>
  
                    {/* <!-- More people... --> */}
                  </tbody>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Jane
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        JCooper@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-green-200 text-blue-700 px-4 rounded p-2">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="bg-green-200 text-blue-700 px-4 rounded p-2">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td>
                        <button className="bg-blue-500 px-2 text-white rounded">
                          OK
                        </button>
                      </td>
                    </tr>
  
                    {/* <!-- More people... --> */}
                  </tbody>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Jane
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        JCooper@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-green-200 text-blue-700 px-4 rounded p-2">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="bg-red-400 text-white px-4 rounded p-2">Not Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jane Cooper
                      </td>
                      <td>
                        <button className="bg-blue-500 px-2 text-white rounded">
                          OK
                        </button>
                      </td>
                    </tr>
  
                    {/* <!-- More people... --> */}
                  </tbody>
                </table>
              </div>
            </Card>
            
          </Layer>
        </div>
      </div>
    
    )
}

export default Profiles
