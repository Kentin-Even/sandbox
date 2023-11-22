// eslint-disable-next-line no-unused-vars
import WhitePieces from "./WhitePieces"
import BlackPieces from "./BlackPieces"
const Grid = () => {
  const grid = [
    [{WhitePieces.}, "cavalier", "fou", "dame", "roi", "fou", "cavalier", "tour"],
    ["pion", "pion", "pion", "pion", "pion", "pion", "pion", "pion"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["pion", "pion", "pion", "pion", "pion", "pion", "pion", "pion"],
    ["tour", "cavalier", "fou", "dame", "roi", "fou", "cavalier", "tour"]
  ]
  const isWhite = (lineIndex, squareIndex) => {
    const isLineEven = lineIndex % 2 === 0
    const isSquareEven = squareIndex % 2 === 0

    return isLineEven === isSquareEven ? "bg-white" : "bg-slate-400"
  }

  return (
    <div className="justify-center flex items-center h-screen">
      <div>
        {grid.map((lines, lineIndex) => (
          <div className="flex" key={lineIndex}>
            {lines.map((square, squareIndex) => (
              <div
                className={`w-20 h-20 border ${isWhite(
                  lineIndex + 1,
                  squareIndex + 1
                )}`}
                key={squareIndex}>
                {square}
                {}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
