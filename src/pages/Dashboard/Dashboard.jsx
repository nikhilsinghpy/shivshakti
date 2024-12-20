import React from 'react'

export const Dashboard = () => {

  const cards = [
    {
      title: "Speakers",
      online: 27,
      offline: 10,
      bgColor: "bg-blue-400",
      icon: "🔊",
    },
    {
      title: "Announcers",
      online: 27,
      offline: 10,
      bgColor: "bg-green-400",
      icon: "🎤",
    },
    {
      title: "Schedules",
      online: 27,
      offline: 10,
      bgColor: "bg-lime-300",
      icon: "📅",
    },
    {
      title: "Zones",
      online: 27,
      offline: 10,
      bgColor: "bg-sky-200",
      icon: "📡",
    },
  ];
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
      {/* Navigation Bar */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
        {["Home", "Speakers", "Announcers", "Schedule", "Zones"].map((tab, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              index === 0 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} text-white p-6 rounded-lg shadow-md flex flex-col`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <span className="text-2xl">{card.icon}</span>
            </div>
            <div className="mt-4">
              <p className="text-4xl font-bold">{card.online}</p>
              <p className="text-sm">Online</p>
              <p className="text-4xl font-bold mt-2">{card.offline}</p>
              <p className="text-sm">Offline</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
