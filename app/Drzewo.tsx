"use client"
import { useState, FC } from "react"

type wezel = {
  uid: string
  parentUid: null | string
  name: string
}

interface Props {
  drzewo: wezel[]
}

interface Tree {
  nodes: wezel[]
  parentUid: null | string
}

function Drzewo({ drzewo }: Props) {
  const [newData, setNewData] = useState(drzewo)

  const moveUp = (uid: string) => {
    const index1 = newData.findIndex((item: wezel) => item.uid === uid)
    const index2 = findPrevious(index1)
    swapElements(index1, index2)
  }

  function findPrevious(index: number): number {
    const parentUid = newData[index].parentUid
    for (let i: number = index - 1; i >= 0; i--) {
      if (newData[i].parentUid === parentUid) {
        return i
      }
    }
    return -1
  }

  function swapElements(index1: number, index2: number) {
    const newArray = [...newData]
    ;[newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]]
    setNewData(newArray)
  }

  const Tree = ({ nodes, parentUid }: Tree) => {
    const filteredNodes = nodes.filter((node: wezel) => node.parentUid === parentUid)
    return (
      <ul className="">
        {filteredNodes.map((node: wezel, index: number) => (
          <li key={node.uid} className="pl-5 py-1 pr-5">
            <div className={node.parentUid === null ? "flex text-3xl my-3" : "flex"}>
              <div>&#9679; {node.uid}</div>
              <div className="mx-3">{node.name}</div>
              {index > 0 && (
                <div className="hover:text-orange-100 cursor-pointer" onClick={() => moveUp(node.uid)}>
                  &#9650;
                </div>
              )}
            </div>

            <Tree nodes={nodes} parentUid={node.uid} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="p-10">
      <Tree nodes={newData} parentUid={null} />
    </div>
  )
}
export default Drzewo
