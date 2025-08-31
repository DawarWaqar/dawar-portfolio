"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  RotateCcw,
  Trophy,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const BOARD_SIZE = 15;
const INITIAL_SNAKE = [
  { x: 7, y: 7 },
  { x: 7, y: 8 },
  { x: 7, y: 9 },
];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const INITIAL_FOOD = { x: 5, y: 5 };

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [gameStatus, setGameStatus] = useState("playing"); // 'playing', 'gameOver'
  const [score, setScore] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(200);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const playEatSound = () => {
    try {
      const audio = new Audio(
        "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYeBzuO0+7NeSsFKILL7+GGRQYU"
      );
      audio.volume = 0.1;
      audio.play();
    } catch (e) {
      console.log("Audio not supported");
    }
  };

  const playGameOverSound = () => {
    try {
      const audio = new Audio("/sound/mixkit-sad-game-over-trombone-471.wav");
      audio.volume = 0.1;
      audio.play();
    } catch (e) {
      console.log("Game over audio not supported");
    }
  };

  const generateFood = useCallback((currentSnake) => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * (BOARD_SIZE - 4)) + 2, // Keep food away from edges
        y: Math.floor(Math.random() * (BOARD_SIZE - 4)) + 2,
      };
    } while (
      currentSnake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  }, []);

  const checkCollision = (head, snake) => {
    // Wall collision
    if (
      head.x < 0 ||
      head.x >= BOARD_SIZE ||
      head.y < 0 ||
      head.y >= BOARD_SIZE
    ) {
      return true;
    }
    // Self collision - only if snake is longer than 9 segments
    if (snake.length > 9) {
      return snake.some(
        (segment) => segment.x === head.x && segment.y === head.y
      );
    }
    return false;
  };

  const moveSnake = useCallback(() => {
    if (gameStatus !== "playing") return;

    setSnake((currentSnake) => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };
      head.x += direction.x;
      head.y += direction.y;

      if (checkCollision(head, newSnake)) {
        setGameStatus("gameOver");
        playGameOverSound();
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 10);
        setFood(generateFood(newSnake));
        setGameSpeed((prev) => Math.max(100, prev - 5)); // Increase speed slightly
        playEatSound();
      } else {
        newSnake.pop(); // Remove tail if no food eaten
      }

      return newSnake;
    });
  }, [direction, food, gameStatus, generateFood]);

  const handleKeyPress = useCallback(
    (e) => {
      if (gameStatus !== "playing") return;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          setDirection((prev) => (prev.y !== 1 ? { x: 0, y: -1 } : prev));
          break;
        case "ArrowDown":
          e.preventDefault();
          setDirection((prev) => (prev.y !== -1 ? { x: 0, y: 1 } : prev));
          break;
        case "ArrowLeft":
          e.preventDefault();
          setDirection((prev) => (prev.x !== 1 ? { x: -1, y: 0 } : prev));
          break;
        case "ArrowRight":
          e.preventDefault();
          setDirection((prev) => (prev.x !== -1 ? { x: 1, y: 0 } : prev));
          break;
      }
    },
    [gameStatus]
  );

  const handleDirectionChange = (newDirection) => {
    if (gameStatus !== "playing") return;

    const { x, y } = newDirection;
    setDirection((prev) => {
      // Prevent moving in opposite direction
      if (prev.x === -x && prev.y === -y) return prev;
      return { x, y };
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, gameSpeed);
    return () => clearInterval(gameInterval);
  }, [moveSnake, gameSpeed]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood(INITIAL_SNAKE));
    setGameStatus("playing");
    setScore(0);
    setGameSpeed(200);
  };

  const renderCell = (x, y) => {
    const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
    const isHead = snake[0]?.x === x && snake[0]?.y === y;
    const isFood = food.x === x && food.y === y;

    let cellClass = "w-4 h-4 sm:w-5 sm:h-5 border border-gray-700 relative";

    if (isFood) {
      return (
        <div
          key={`${x}-${y}`}
          className={cellClass + " bg-red-500 rounded-full"}
        >
          {/* Apple stem */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"></div>
        </div>
      );
    } else if (isSnake) {
      cellClass += isHead ? " bg-teal-400" : " bg-teal-600";

      if (isHead) {
        return (
          <div
            key={`${x}-${y}`}
            className={
              cellClass + " flex flex-col items-center justify-center p-px"
            }
          >
            {/* Eyes row */}
            <div className="flex justify-between w-full px-px pt-px">
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"></div>
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"></div>
            </div>
            {/* Smile row */}
            <div className="w-1/2 h-0.5 mt-px sm:h-1 border-b border-white rounded-b-full"></div>
          </div>
        );
      }
    } else {
      cellClass += " bg-gray-800";
    }

    return <div key={`${x}-${y}`} className={cellClass} />;
  };

  if (!isClient) {
    return (
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Snake Game</h3>
          <div className="text-lg text-gray-300">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Snake Game</h3>
        <div className="flex items-center justify-center gap-4 mb-2">
          <p className="text-lg text-gray-300">Score: {score}</p>
          {gameStatus === "gameOver" && (
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <p className="text-lg font-bold text-red-400">Game Over!</p>
            </div>
          )}
        </div>
      </div>

      <div
        className="grid gap-0 bg-gray-900 p-3 rounded-lg border border-gray-600"
        style={{ gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)` }}
      >
        {Array.from({ length: BOARD_SIZE }, (_, y) =>
          Array.from({ length: BOARD_SIZE }, (_, x) => renderCell(x, y))
        )}
      </div>

      {/* Mobile Controls */}
      <div className="block sm:hidden">
        <div className="grid grid-cols-3 gap-2 w-32 mb-4">
          <div></div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleDirectionChange({ x: 0, y: -1 })}
            className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
          <div></div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleDirectionChange({ x: -1, y: 0 })}
            className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div></div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleDirectionChange({ x: 1, y: 0 })}
            className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
          <div></div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleDirectionChange({ x: 0, y: 1 })}
            className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            <ArrowDown className="w-4 h-4" />
          </Button>
          <div></div>
        </div>
      </div>

      <div className="text-center flex flex-col items-center gap-2">
        <div className="text-xs text-gray-400 hidden sm:block">
          Use arrow keys to control the snake
        </div>
        <div className="text-xs text-gray-400 block sm:hidden">
          Use buttons to control the snake
        </div>

        <Button
          onClick={resetGame}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          New Game
        </Button>
      </div>
    </div>
  );
}
