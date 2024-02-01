import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pl-0">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/background.jpg" // 确保图像位于public文件夹中
          layout="fill"
          objectFit="cover" // 使图像覆盖整个元素，类似于background-size: cover
          quality={100} // 设置图像质量
          alt="Background"
        />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-left border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          幻兽帕鲁图鉴在线查询
        </p>
      </div>
      <div>
        <a
          href="https://oiw8go5x8x7.feishu.cn/share/base/query/shrcn3p9z4SaxVA18jJmLBfzDwf"
          className="hover:scale-150 hover:text-gray-500 transition duration-300 ease-in-out text-3xl text-red-700"
        >
          {"查询入口 👈"}
        </a>
      </div>
      <div className="mb-32 grid place-items-left text-left lg:max-w-5xl lg:w-full lg:mb-0  lg:gap-4 lg:px-4">
        <a
          href="https://oiw8go5x8x7.feishu.cn/share/base/view/shrcnEsCfHOcRPuW8Qil5wMCAY3"
          className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            卡片{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            以卡片画册的形式浏览全部帕鲁
          </p>
        </a>

        <a
          href="https://oiw8go5x8x7.feishu.cn/share/base/view/shrcnygXwREfLgHwYPnpYyO97pb"
          className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            表格{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            以表格记录的形式浏览全部帕鲁
          </p>
        </a>
        <a
          href="https://oiw8go5x8x7.feishu.cn/share/base/dashboard/shrcnBTIpkZbasUTvznVzT0rUIc"
          className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            统计{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            使用仪表盘查看统计数据
          </p>
        </a>
        <a
          href="https://oiw8go5x8x7.feishu.cn/base/NRiGbjaDoaSp1Ksg2OEcctkxnfb?from=from_copylink"
          className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            数据库{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            浏览创建的所有数据
          </p>
        </a>
      </div>
      <a
        href="https://github.com/EanYang7/palworld" // Replace with your GitHub repository URL
        className="absolute bottom-0 left-0 mb-4 mr-4 text-white hover:text-green-300 transition duration-300 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source on GitHub"
      >
        GitHub代码库
      </a>
    </main>
  );
}
