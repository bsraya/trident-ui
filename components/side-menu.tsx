export default function SideMenu() {
  return (
    <nav className="w-[50%] px-5 py-10 text-center hidden lg:block">
      <li className="font-bold text-4xl">白頭翁不吃小米</li>
      <ul className="grid gap-5 mt-20 hover:">
        <li className="text-lg cursor-pointer text-[#AA6666] underline decoration-2">白頭翁不吃小米</li>
        <li className="text-lg hover:text-[#AA6666] hover:underline hover:cursor-pointer hover:decoration-2">白頭翁不吃小米</li>
        <li className="text-lg hover:text-[#AA6666] hover:underline hover:cursor-pointer hover:decoration-2">白頭翁不吃小米</li>
        <li className="text-lg hover:text-[#AA6666] hover:underline hover:cursor-pointer hover:decoration-2">白頭翁不吃小米</li>
      </ul>
    </nav>
  )
}