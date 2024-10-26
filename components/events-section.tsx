import { Flame } from 'lucide-react';
import React from 'react';

interface Event {
  id: string;
  title: string;
  location: string;
  type: 'LAUNCH' | 'GIVEAWAY' | 'COST';
  image: string;
  status: string;
  attendees?: string;
  price?: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'NIKE PENTHOUSE PARTY',
    location: 'MANCHESTER, UNITED KINGDOM',
    type: 'LAUNCH',
    image: '/image3.png',
    status: 'GAIN',
    attendees: '50K'
  },
  {
    id: '2',
    title: 'TWITCH VR PARTY',
    location: 'VIRTUAL',
    type: 'GIVEAWAY',
    image: '/image3.png',
    status: 'REQUIRED',
    attendees: '5K'
  },
  {
    id: '3',
    title: 'RSVP MANSION PARTY',
    location: 'MANCHESTER, UNITED KINGDOM',
    type: 'COST',
    image: '/image3.png',
    status: 'COST',
    price: '100'
  }
];

export const EventsSection = () => {
  return (
    <div className="w-[452px] h-[392px] bg-[#1D1D1D] border border-[#333333] overflow-y-scroll">
      {/* Header */}
      <div className="w-full h-[52px] border-b border-[#333333] flex items-center justify-center">
        <h2 className="font-['SF_Pro_Text'] text-2xl font-medium text-[#E5E5E5] uppercase">
          Events
        </h2>
      </div>

      {/* Event Cards */}
      <div className="w-full">
        {events.map((event) => (
          <div
            key={event.id}
            className={`w-full h-[108px] border border-[#EBCF83] ${
              event.type === 'COST' ? 'bg-[rgba(235,207,131,0.5)]' : ''
            }`}
          >
            <div className="flex p-4">
              {/* Image */}
              <div className="w-[129px] h-[76px] mr-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                {/* Title and Badge */}
                <div className="flex items-center justify-between">
                  <h3 className="font-['SF_Pro_Text'] text-sm font-medium text-[#EBCF83] uppercase">
                    {event.title}
                  </h3>
                  <span className={`
                    px-2 py-0.5 rounded-lg text-xs uppercase
                    ${event.type === 'LAUNCH' ? 'bg-[#EBCF83] text-[#1A1A1A]' : ''}
                    ${event.type === 'GIVEAWAY' ? 'bg-[#EBCF83] text-[#1A1A1A]' : ''}
                    ${event.type === 'COST' ? 'bg-[#EBCF83]/50 text-white' : ''}
                  `}>
                    {event.type}
                  </span>
                </div>

                {/* Location */}
                <p className={`text-sm font-medium uppercase
                  ${event.type === 'COST' ? 'text-white' : 'text-[#E5E5E5]'}`}>
                  {event.location}
                </p>

                {/* Status and Attendees/Price */}
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium uppercase
                    ${event.type === 'COST' ? 'text-white' : 'text-[#E5E5E5]'}`}>
                    {event.status}
                  </span>
                  <div className="flex items-center gap-2">
                    {event.attendees && (
                      <>
                        <Flame className="w-4 h-4 text-[#EBCF83]" />
                        <span className={`text-sm font-medium uppercase
                          ${event.type === 'COST' ? 'text-white' : 'text-[#E5E5E5]'}`}>
                          {event.attendees}
                        </span>
                      </>
                    )}
                    {event.price && (
                      <span className="text-sm font-medium text-white uppercase">
                        £{event.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;