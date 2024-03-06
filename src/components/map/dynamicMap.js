// components/Map.js

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./index'), {
  ssr: false, // Sunucu tarafında çalışmasını devre dışı bırak
});

const MapWrapper = ({ location }) => {
  return <DynamicMap location={location} />;
};

export default MapWrapper;
