import React from 'react'
import { Layer, StatCard, Title, TitleWrapper } from '../../components/Card'
import { Input } from '../../components/Input'

interface Props {

}

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
                                        <button className="bg-color-500 px-2 text-white rounded">
                                            Retry Transfer
                                        </button>
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
    )
}

export default Revenue
