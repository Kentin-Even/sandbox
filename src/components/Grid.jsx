const Grid = () => {
  const grid = [
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
  ]

  return (
    <div className="p-4 flex flex-col gap-4 h-screen justify-center items-center">
      <div className="flex flex-wrap w-64 box-content">
        {grid.map(HTMLTableRowElement)}
      </div>
    </div>
  )
}

export default Grid
