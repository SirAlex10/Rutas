import React from 'react';

const RouteList = ({ title, routes, onRouteClick }) => {
  return (
    <div className="route-column">
      <h3 className='text-black pb-2 font-bold'>{title}</h3>
      <div className="routes-list">
        {routes.map((route) => (
          <button key={route} className="route" onClick={() => onRouteClick(route)}>
            {route}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RouteList;
