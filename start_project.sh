#!/bin/bash

cd backend/backend
# Step 1: Install Poetry
echo "Installing Poetry..."
curl -sSL https://install.python-poetry.org | python3 -

# Ensure Poetry is in the PATH
export PATH="$HOME/.local/bin:$PATH"

# Step 2: Change directory to /backend/backend and install dependencies with Poetry
echo "Changing to /backend/backend and installing dependencies with Poetry..."
poetry install

# Step 4: Launch the Uvicorn backend server and store the PID
echo "Starting Uvicorn server..."
poetry run uvicorn main:app --reload &
BACKEND_PID=$!

# Step 5: Change back to the root directory and install pnpm
echo "Changing back to root directory and installing pnpm..."
cd ../../
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Ensure pnpm is in the PATH
export PATH="$HOME/.local/share/pnpm:$PATH"

# Step 6: Install project dependencies and run the development server, then store the PID
echo "Installing project dependencies with pnpm..."
pnpm install

echo "Starting pnpm dev server..."
pnpm next build
pnpm run dev &
FRONTEND_PID=$!

# Wait for user input to terminate the processes
read -p "Press [Enter] key to stop backend and frontend servers..."

# Step 7: Kill the backend and frontend processes
echo "Stopping Uvicorn server with PID $BACKEND_PID..."
kill $BACKEND_PID

echo "Stopping pnpm dev server with PID $FRONTEND_PID..."
kill $FRONTEND_PID

echo "Backend and frontend servers have been stopped."