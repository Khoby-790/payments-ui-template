import React from "react";
import { Card, Layer, StatCard, Title, TitleWrapper } from "../../components/Card";
import { Input, Select } from "../../components/Input";

const Dashboard = () => {
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
                <h1 className="text-lg text-gray-500 font-light">
                  INTERNAL TRANSFERS
                </h1>
                <h1 className="text-3xl text-gray-900">0</h1>
              </StatCard>
              <StatCard>
                <h1 className="text-lg text-gray-500 font-light">
                  INTERNAL TRANSFERS
                </h1>
                <h1 className="text-3xl text-gray-900">0</h1>
              </StatCard>
              <StatCard>
                <h1 className="text-lg text-gray-500 font-light">
                  INTERNAL TRANSFERS
                </h1>
                <h1 className="text-3xl text-gray-900">0</h1>
              </StatCard>
              <StatCard>
                <h1 className="text-lg text-gray-500 font-light">
                  INTERNAL TRANSFERS
                </h1>
                <h1 className="text-3xl text-gray-900">0</h1>
              </StatCard>
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </Layer>
        <TitleWrapper>
          <Title>Recent Transfers</Title>
        </TitleWrapper>
        <Layer>
          <Card>
            
          </Card>
        </Layer>
        <Layer>
          <Card>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-col">
                <label htmlFor="">Date from</label>
                <Input type="date" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Date To</label>
                <Input type="date" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Transfer Type</label>
                <Select>
                  <option value="">Select one</option>
                </Select>
              </div>
            </div>
            <div className=" my-3">
              <button className="bg-blue-500 p-2 px-3 hover:bg-blue-700 text-white font-medium">
                Search transfers{" "}
              </button>
            </div>
          </Card>
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
          <Title>Failed Flutterwave Transfer</Title>
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
                      Reference
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
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
                      Profile
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date time
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #7637873637-7363773
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0274488676
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      GHS 12,300
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      GHS 1.2
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Kwame
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-blue-200 text-blue-700 px-4 rounded p-2">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date().toDateString()}
                    </td>
                    <td>
                      <button className="bg-blue-500 px-2 text-white rounded">
                        Retry Transfer
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
  );
};

export default Dashboard;
