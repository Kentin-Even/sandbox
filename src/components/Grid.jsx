const Grid = () => {
  const grid = [
    ["tour", "cavalier", "fou", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""]
  ]
  const isWhite = (lineIndex, squareIndex) => {
    const isLineEven = lineIndex % 2 === 0
    const isSquareEven = squareIndex % 2 === 0
    console.log(lineIndex)
    
    if (isLineEven && isSquareEven) {
      return "bg-white"
    } else if (!isLineEven && !isSquareEven) {
      return "bg-black"
    }

    return ""
  }

  return (
    <div className="justify-center flex items-center h-screen">
      <div>
        {grid.map((lines, lineIndex) => (
          <div className="flex" key={lineIndex}>
            {lines.map((square, squareIndex) => (
              <div
                className={`w-10 h-10 border ${
                  isWhite(lineIndex + 1, squareIndex + 1) ? "bg-white" : "bg-black"
                }`}
                key={squareIndex}> {square}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
