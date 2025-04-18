import type {PackageData} from "./package-data";

export class Package {
  readonly id: string;
  readonly channelUrl: string;

  constructor(data: PackageData) {
    const {group, name} = data;
    this.id = `${group}:${name}`;
    this.channelUrl = `${data.channelUrl.replace(/\/^/, '')}/`;
  }

  public getInstallPayload() {
    return {
      package: this.id,
      channelUrl: this.channelUrl
    };
  }

  public getInstallUrl(): string {
    const url = new URL('sc4pac:///package');
    url.searchParams.set('pkg', this.id);
    url.searchParams.set('channel', this.channelUrl);
    return url.href;
  }

  public getViewUrl(): string {
    const url = new URL('https://memo33.github.io/sc4pac/channel');
    url.searchParams.set('pkg', this.id);
    url.searchParams.set('channel', this.channelUrl);
    return url.href;
  }
}