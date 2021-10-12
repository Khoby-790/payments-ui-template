import React from "react";
import {
  ButtonOutline,
  Layer,
  StatCard,
  Title,
  TitleWrapper,
} from "../../components/Card";
import { Input, Select } from "../../components/Input";

interface Props {}

const Disputes = (props: Props) => {
  return (
    <div>
      <div className="py-6">
        <TitleWrapper>
          <Title>Statistics</Title>
        </TitleWrapper>
        <Layer>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard>
                <h1 className="text-lg text-gray-500 font-light">
                  PENDING DISPUTES
                </h1>
                <h1 className="text-lg text-gray-900">0</h1>
              </StatCard>
              <StatCard>
                <h1 className="text-lg text-gray-500 font-light">
                  DISPUTES UNDER REVIEW
                </h1>
                <h1 className="text-lg text-gray-900">0</h1>
              </StatCard>
              <StatCard>
                <h1 className="text-lg text-gray-500 font-light">
                  RESOLVED DISPUTES
                </h1>
                <h1 className="text-lg text-gray-900">0</h1>
              </StatCard>
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </Layer>
        <TitleWrapper>
          <Title>Unresolved Disputes</Title>
        </TitleWrapper>

        <Layer>
          <div className=" overflow-x-scroll border-b border-gray-200 sm:rounded-none">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TRADE ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    BUYER
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SELLER
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    INITIAtor
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TRADE ITEM
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
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
                </tr>

                {/* <!-- More people... --> */}
              </tbody>
            </table>
          </div>
        </Layer>
        <TitleWrapper>
          <Title>Resolved Disputes</Title>
        </TitleWrapper>

        <Layer>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 mb-3">
            <div className="flex flex-col">
              <label htmlFor="">Date from</label>
              <Input type="date" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Date To</label>
              <Input type="date" />
            </div>
            <div className="flex flex-col justify-end">
              <button className="bg-color-500 p-1.5 px-3 text-lg hover:bg-color-700 text-white">
                Search Timelines{" "}
              </button>
            </div>
          </div>
          {/* <Card> */}
          <div className=" overflow-x-scroll border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TRADE ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    BUYER
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SELLER
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    INITIATOR
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TRADE ITEM
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    WINNER
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    MODERATOR
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #7637873637-7363773
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Bernardy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Redboy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Redboy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Google Play Gift Card
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Bernardy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    None
                  </td>
                </tr>

                {/* <!-- More people... --> */}
              </tbody>
            </table>
          </div>
          {/* </Card> */}
        </Layer>
      </div>
    </div>
  );
};

export default Disputes;
