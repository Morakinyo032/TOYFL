import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any custom Next.js config here
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
