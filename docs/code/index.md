#### 1. 读取注册表已安装软件信息

[windows registry info](https://docs.microsoft.com/en-us/windows/win32/sysinfo/registry)

```typescript
import regedit from 'regedit';
import path from 'path';

// copy nodemodules/regedit/vbs
regedit.setExternalVBSLocation(path.join(process.cwd(), './common/vbs'));

const readRegedit = () => {
  return new Promise((resolve, reject) => {
    const uninstallPath = [
      'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall',
      'HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall',
      'HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall',
    ];
    regedit.list(uninstallPath, (err: Error, result: any) => {
      if (err) {
        reject(err);
      } else {
        regedit.list(
          uninstallPath
            .map((p) => {
              return result[p].keys.map((key: string) => `${p}\\${key}`);
            })
            .flat(),
          (e: Error, values: any) => {
            if (e) {
              reject(e);
            } else {
              const softwares = Object.values(values)
                .map((value: any) => {
                  return value.values;
                })
                .filter((v) => v != null);
              resolve(softwares);
            }
          }
        );
      }
    });
  });
};
```

#### 2. GitHub OAuth

[docs](https://docs.github.com/cn/free-pro-team@latest/developers/apps/authorizing-oauth-apps)

```typescript
import { BrowserWindow } from 'electron';
import queryString from 'query-string';

const getGithubToken = async () => {
  const options = {
    client_id: 'd487b78d0dcce3272616',
    client_secret: 'a2c5407b1465f37b02d210b80ea89ca04a8fd40b',
  };
  let githubAuthWindow: null | BrowserWindow = null;
  return new Promise((resolve: (value: string) => void, reject) => {
    try {
      githubAuthWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: true,
      });

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${options.client_id}&scope=gist,user`;

      githubAuthWindow?.loadURL(authUrl, {
        extraHeaders: 'pragma: no-cache\n',
      });

      const getToken = async (url: string) => {
        const code = queryString.parseUrl(url).query.code as string;
        if (code) {
          const token = await Axios.post(
            'https://github.com/login/oauth/access_token',
            {
              ...options,
              code,
            }
          );
          resolve(queryString.parse(token.data).access_token as string);
          githubAuthWindow?.destroy();
          githubAuthWindow = null;
        }
      };

      githubAuthWindow?.webContents.on('will-navigate', (_, url) => {
        getToken(url);
      });
      githubAuthWindow?.webContents.on('will-redirect', (_, url) => {
        getToken(url);
      });

      githubAuthWindow?.on('close', () => {
        githubAuthWindow = null;
      });
    } catch (e) {
      reject(e);
    }
  });
};
```
