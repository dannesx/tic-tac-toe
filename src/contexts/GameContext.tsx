import { ReactNode, createContext, useState } from 'react'

export const GameContext = createContext({})

export function GameProvider({ children }: { children: ReactNode }) {
	const [playerScore, setPlayerScore] = useState(0)
	const [cpuScore, setCpuScore] = useState(0)

	function addPlayer() {
		setPlayerScore(playerScore + 1)
	}

	function addCpu() {
		setCpuScore(cpuScore + 1)
	}

	return (
		<GameContext.Provider value={{ playerScore, cpuScore, addPlayer, addCpu }}>
			{children}
		</GameContext.Provider>
	)
}
