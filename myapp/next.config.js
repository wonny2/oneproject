/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;

// reactStrictMode가 true이면 "개발 모드일 때만" 두 번 렌더링한다.
