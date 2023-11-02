import { ReactNode, createContext, useEffect, useState } from 'react'

export const GameContext = createContext({})

export function GameProvider({ children }: { children: ReactNode }) {
	const [p1Score, setP1Score] = useState(0)
	const [p2Score, setP2Score] = useState(0)
	const [turn, setTurn] = useState('cross')
	const [board, setBoard] = useState(Array(9).fill(''))
	const [result, setResult] = useState('')
	const [line, setLine] = useState(Array(3).fill(-1))

	useEffect(() => {
		// Rows
		if (board[0] === board[1] && board[0] === board[2]) {
			setResult(board[0])
			setLine([0, 1, 2])
		} else if (board[3] === board[4] && board[3] === board[5]) {
			setResult(board[3])
			setLine([3, 4, 5])
		} else if (board[6] === board[7] && board[6] === board[8]) {
			setResult(board[6])
			setLine([6, 7, 8])
		}
		// Columns
		else if (board[0] === board[3] && board[0] === board[6]) {
			setResult(board[0])
			setLine([0, 3, 6])
		} else if (board[1] === board[4] && board[1] === board[7]) {
			setResult(board[1])
			setLine([1, 4, 7])
		} else if (board[2] === board[5] && board[2] === board[8]) {
			setResult(board[2])
			setLine([2, 5, 8])
		}
		// Diagonals
		else if (board[0] === board[4] && board[0] === board[8]) {
			setResult(board[0])
			setLine([0, 4, 8])
		} else if (board[2] === board[4] && board[2] === board[6]) {
			setResult(board[2])
			setLine([2, 4, 6])
		} else if (!board.includes('')) {
			setResult('nobody')
			setLine(Array(3).fill(-1))
		}
	}, [board])

	useEffect(() => {
		if (result === 'cross') setP1Score(prev => prev + 1)
		else if (result === 'circle') setP2Score(prev => prev + 1)
	}, [result])

	function passTurn() {
		setTurn(turn === 'cross' ? 'circle' : 'cross')
	}

	function updateBoard(index: number, value: string) {
		const newBoard = [...board]
		newBoard.splice(index, 1, value)
		setBoard(newBoard)
	}

	function startNewGame() {
		setResult('')
		setBoard(Array(9).fill(''))
	}

	const Value = {
		p1Score,
		p2Score,
		turn,
		board,
		result,
		line,
		passTurn,
		updateBoard,
		startNewGame,
	}

	return (
		<GameContext.Provider value={Value as GameContextInterface}>
			{children}
		</GameContext.Provider>
	)
}

export interface GameContextInterface {
	p1Score: number
	p2Score: number
	turn: string
	board: string[]
	result: string
	line: number[]
	passTurn: () => void
	updateBoard: (index: number, value: string) => void
	startNewGame: () => void
}
