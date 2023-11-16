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
  const isWhite = (index) => (Math.floor(index / 8) % 2 === index % 2)

  return (
    <div className="p-4 flex flex-col gap-4 h-screen justify-center items-center">
      <div className="flex flex-wrap w-80 h-80 box-content">
        {grid.map((_,index) => (
          <button
          key={index}
          className={`w-10 h-10 border ${isWhite(index) ? "bg-white" : "bg-black"} active:bg-slate-200`} 
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Grid
