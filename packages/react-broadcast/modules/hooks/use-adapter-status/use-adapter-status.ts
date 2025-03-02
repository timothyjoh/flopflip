import React from 'react';
import { AdapterContext } from '@flopflip/react';
import {
  AdapterContext as AdapterContextType,
  AdapterStatus as AdapterStatusType,
} from '@flopflip/types';

export default function useAdapterStatus(): Error | AdapterStatusType {
  if (typeof React.useContext === 'function') {
    const adapterContext: AdapterContextType = React.useContext(AdapterContext);

    React.useDebugValue(adapterContext.status);

    return adapterContext.status;
  }

  throw new Error(
    'React hooks are not available in your currently installed version of React.'
  );
}
