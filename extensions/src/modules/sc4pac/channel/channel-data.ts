export interface ChannelData {
  scheme: string,
  info: {
    channelLabel: string[]
  },
  stats: {
    totalPackageCount: number,
    categories: {
      category: string,
      count: number
    }[]
  },
  packages: {
    group: string,
    name: string,
    versions: string[],
    checksums: Record<string, object>,
    externalIds: Record<string, string[]>,
    summary: string,
    category: string[],
  }[],
  externalPackages: {
    group: string,
    name: string,
    checksum: Record<string, string>,
  }[]
}