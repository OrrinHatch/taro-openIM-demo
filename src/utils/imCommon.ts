import { getSDK, SessionType } from '@openim/wasm-client-sdk';

export const IMSDK = getSDK({
  coreWasmPath: '/static/openIM.wasm',
  sqlWasmPath: '/static/sql-wasm.wasm',
});
