import React, { useEffect, useState } from 'react';
import { CheckIsMobile } from './utils';
import { AppMobRoutes, AppWebRoutes } from './routes/index';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = CheckIsMobile();
    setIsMobile(mobileCheck);
  }, []);

  return (
    <div>
      {isMobile ? <AppMobRoutes /> : <AppWebRoutes />}
    </div>
  );
};

export default App;