import React from "react";
import { Layer, StatCard, Title, TitleWrapper } from "../../components/Card";
import { Input } from "../../components/Input";

interface Props {}

const Revenue = (props: Props) => {
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
                <h1 className="text-md text-gray-500 uppercase font-light">
                  TRANSaction Revenue
                </h1>
                <h1 className="text-md text-gray-900 uppercase">0</h1>
              </StatCard>
              <StatCard>
                <h1 className="text-md text-gray-500 font-light uppercase">
                  conversion Revenue
                </h1>
                <h1 className="text-md text-gray-900">0</h1>
              </StatCard>
              <StatCard>
                <h1 className="text-md text-gray-500 font-light uppercase">
                  GIftcards Revenue
                </h1>
                <h1 className="text-md text-gray-900">0</h1>
              </StatCard>
              <StatCard>
                <h1 className="text-md text-gray-500 font-light uppercase">
                  crypto Revenue
                </h1>
                <h1 className="text-md text-gray-900">0</h1>
              </StatCard>
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </Layer>
        <TitleWrapper>
          <Title>Wallet and Funds in Trust</Title>
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
                    WALLET
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SECURITY FUNDS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ESCROW FUNDS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    KOLLET
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                </tr>

                {/* <!-- More people... --> */}
              </tbody>
            </table>
          </div>
        </Layer>
        <TitleWrapper>
          <Title>Recurrent Revenues</Title>
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
                    DATE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AMOUNT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    USD AMOUNT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TYPE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TRADE ITEM
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Jane Cooper
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    0.0000040090
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    20.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    fiat conversion
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    None
                  </td>
                </tr>

                {/* <!-- More people... --> */}
              </tbody>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Jane Cooper
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    0.0000040090
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    20.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    fiat conversion
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    None
                  </td>
                </tr>

                {/* <!-- More people... --> */}
              </tbody>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Jane Cooper
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    0.0000040090
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    20.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    fiat conversion
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    None
                  </td>
                </tr>

                {/* <!-- More people... --> */}
              </tbody>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Jane Cooper
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    0.0000040090
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    20.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    fiat conversion
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    None
                  </td>
                </tr>

                {/* <!-- More people... --> */}
              </tbody>
            </table>
          </div>
        </Layer>

        <TitleWrapper>
          <Title>Filter Revenue by Date</Title>
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
              <button className="bg-color-300 p-2 px-3 text-lg hover:bg-color-700 text-white">
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
                    DATE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AMOUNT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    USD AMOUNT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TYPE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TRADE ITEM
                  </th>

                  <th></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
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

export default Revenue;
