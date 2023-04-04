import { Fredericka_the_Great } from "next/font/google"
const font = Fredericka_the_Great({ subsets: ["latin"], weight: ["400"], display: "swap" })

import Drzewo from "./Drzewo"

type dataType = {
  uid: string
  parentUid: null | string
  name: string
}[]

const DATA: dataType = [
  { uid: "1", parentUid: null, name: "Node 1" },
  { uid: "2", parentUid: "1", name: "Node 1.1" },
  { uid: "3", parentUid: "2", name: "Node 1.1.1" },
  { uid: "4", parentUid: "1", name: "Node 1.2" },
  { uid: "5", parentUid: "4", name: "Node 1.2.1" },
  { uid: "6", parentUid: null, name: "Node 2" },
  { uid: "7", parentUid: "6", name: "Node 2.1" },
]

const App = () => {
  return (
    <div className="flex flex-col h-screen items-center bg-gradient-to-br from-sky-900  to-amber-600 text-slate-800 ">
      <div className={font.className}>
        <h1 className="text-6xl text-orange-200 pt-[100px] pb-[30px]">Temida : tree & moveUp</h1>
      </div>
      <div className="flex">
        <div>
          <div className={font.className}>
            <h1 className="text-3xl text-orange-200 text-center">v1</h1>
          </div>
          <Drzewo drzewo={DATA} />
        </div>
      </div>
    </div>
  )
}

export default App
