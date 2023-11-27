import { blackPieces } from "./blackPieces.js"
import { whitePieces } from "./whitePieces.js"
import React, { useState } from "react"

const activeClass = "border-solid border-2 border-sky-500"
const Grid = () => {
  const [grid, setGridItem] = useState([
    [blackPieces.rook1, blackPieces.knight1, blackPieces.bishop1, blackPieces.queen, blackPieces.king, blackPieces.bishop2, blackPieces.knight2, blackPieces.rook2],
    [blackPieces.pawn1, blackPieces.pawn2, blackPieces.pawn3, blackPieces.pawn4, blackPieces.pawn5, blackPieces.pawn6, blackPieces.pawn7, blackPieces.pawn8],
    Array(8).fill({image: "", name: ""}),
    Array(8).fill({image: "", name: ""}),
    Array(8).fill({image: "", name: ""}),
    Array(8).fill({image: "", name: ""}),
    [whitePieces.pawn1, whitePieces.pawn2, whitePieces.pawn3, whitePieces.pawn4, whitePieces.pawn5, whitePieces.pawn6, whitePieces.pawn7, whitePieces.pawn8],
    [whitePieces.rook1, whitePieces.knight1, whitePieces.bishop1, whitePieces.king, whitePieces.queen, whitePieces.bishop2, whitePieces.knight2, whitePieces.rook2],
  ])
  const [activePiece, setActivePiece] = useState()
  const movePiece = (piece, newPieceLineIndex, newPieceSquareIndex) => {
    if(activePiece?.name === piece.name) {
      setActivePiece(null)

      return
    }

    if (activePiece) {
      console.log(newPieceLineIndex, newPieceSquareIndex)
      setGridItem([...grid].map((line, lindex) => line.map((square, index) => lindex === 5 &&  index === 5 ? piece: square)))
      
      setActivePiece(null)

      return
    }

  
    if (!activePiece) {
      setActivePiece(piece)
    }
  }
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
            {lines.map((piece, squareIndex) => (
              <div onClick={() => movePiece(piece, lineIndex, squareIndex)}
                className={`w-20 h-20 border flex items-center justify-center ${isWhite(
                  lineIndex + 1,
                  squareIndex + 1
                )} ${activePiece?.name === piece?.name ? activeClass : ""}`}
                key={squareIndex}>
                <img src={piece?.image} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
