#!/bin/bash

# === Script to start React and FastAPI in separate tabs using `ttab` ===

# Ensure ttab is installed
if ! command -v ttab &> /dev/null
then
    echo "❌ 'ttab' is not installed. Install it via 'brew install ttab'."
    exit 1
fi

# Get absolute paths
FRONTEND_DIR="$(cd frontend && pwd)"
BACKEND_DIR="$(cd backend && pwd)"
BACKEND_ENTRY="main:app"

# Launch React server in new tab
ttab -t "React App" bash -c "
  cd '$FRONTEND_DIR'
  echo '📦 Installing frontend dependencies...'
  npm install
  echo '🚀 Starting React server...'
  npm run dev
"

# Launch FastAPI server in new tab with venv
ttab -t "FastAPI Server" bash -c "
  cd '$BACKEND_DIR'
  echo '🐍 Setting up virtual environment...'
  python3 -m venv venv
  source venv/bin/activate
  echo '📦 Installing backend dependencies...'
  pip install -r requirements.txt
  echo '🚀 Starting FastAPI server...'
  uvicorn $BACKEND_ENTRY --reload
"
