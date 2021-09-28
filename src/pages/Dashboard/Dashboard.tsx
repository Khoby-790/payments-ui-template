import React from "react";
import { Card, StatCard, Title, TitleWrapper } from "../../components/Card";

const Dashboard = () => {
  return (
    <div>
      <div className="py-6">
        <TitleWrapper>
          <Title>Dashboard</Title>
        </TitleWrapper>
        <div className=" mx-auto px-4 sm:px-6 md:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
        </div>
        <TitleWrapper>
          <Title>Recent Transfers</Title>
        </TitleWrapper>
        <div className="my-5 mx-auto px-4 sm:px-6 md:px-8">
          <Card>Hello there</Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
