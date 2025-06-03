import { AppsanHTTPClient } from '@appsan-web/mini-web-sdk';
import { firstValueFrom } from 'rxjs';

AppsanHTTPClient.setDefaultOptions({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const http = {
  get: (url: string, options?: any) =>
    firstValueFrom(AppsanHTTPClient.get(url, options)),
};
