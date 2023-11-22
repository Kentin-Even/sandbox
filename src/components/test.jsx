const Grid = () => {
  const grid = [
    ["rook", "cavalier", "fou", "dame", "roi", "fou", "cavalier", "tour"],
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
  const Blackpieces = [
    {
      name: "rook1",
      image: <img src="./public/image/black_rook.svg" />
    },
    {
      name: "knight1",
      image: <img src="./public/image/black_knight.svg" />
    },
    {
      name: "bishop1",
      image: <img src="./public/image/black_bishop.svg" />
    },
    {
      name: "queen",
      image: <img src="./public/image/black_queen.svg" />
    },
    {
      name: "king",
      image: <img src="./public/image/black_king.svg" />
    },
    {
      name: "bishop2",
      image: <img src="./public/image/black_bishop.svg" />
    },
    {
      name: "knight2",
      image: <img src="./public/image/black_knight.svg" />
    },
    {
      name: "rook1",
      image: <img src="./public/image/black_rook.svg" />
    },
    {
      name: "pawn1",
      image: <img src="./public/image/black_pawn.svg" />
    },
    {
      name: "pawn2",
      image: <img src="./public/image/black_pawn.svg" />
    },
    {
      name: "pawn3",
      image: <img src="./public/image/black_pawn.svg" />
    },
    {
      name: "pawn4",
      image: <img src="./public/image/black_pawn.svg" />
    },
    {
      name: "pawn5",
      image: <img src="./public/image/black_pawn.svg" />
    },
    {
      name: "pawn6",
      image: <img src="./public/image/black_pawn.svg" />
    },
    {
      name: "pawn7",
      image: <img src="./public/image/black_pawn.svg" />
    },
    {
      name: "pawn8",
      image: <img src="./public/image/black_pawn.svg" />
    }
  ]
const Whitepieces = [
  {
    name: "rook1",
    image: <img src="./public/image/white_rook.svg" />
  },
  {
    name: "knight1",
    image: <img src="./public/image/white_knight.svg" />
  },
  {
    name: "bishop1",
    image: <img src="./public/image/white_bishop.svg" />
  },
  {
    name: "queen",
    image: <img src="./public/image/white_queen.svg" />
  },
  {
    name: "king",
    image: <img src="./public/image/white_king.svg" />
  },
  {
    name: "bishop2",
    image: <img src="./public/image/white_bishop.svg" />
  },
  {
    name: "knight2",
    image: <img src="./public/image/white_knight.svg" />
  },
  {
    name: "rook2",
    image: <img src="./public/image/white_rook.svg" />
  },
  {
    name: "pawn1",
    image: <img src="./public/image/white_pawn.svg" />
  },
  {
    name: "pawn2",
    image: <img src="./public/image/white_pawn.svg" />
  },
  {
    name: "pawn3",
    image: <img src="./public/image/white_pawn.svg" />
  },
  {
    name: "pawn4",
    image: <img src="./public/image/white_pawn.svg" />
  },
  {
    name: "pawn5",
    image: <img src="./public/image/white_pawn.svg" />
  },
  {
    name: "pawn6",
    image: <img src="./public/image/white_pawn.svg" />
  },
  {
    name: "pawn7",
    image: <img src="./public/image/white_pawn.svg" />
  },
  {
    name: "pawn8",
    image: <img src="./public/image/white_pawn.svg" />
  }
]
  
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
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
