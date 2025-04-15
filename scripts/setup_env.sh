#!/bin/bash

# === Script to set up environment for both frontend and backend ===

# Backend setup
echo "🚀 Setting up backend environment..."

cd backend || exit

# Copy .env.example to .env if not already present
if [ ! -f ".env" ]; then
  if [ -f ".env.example" ]; then
    echo "📋 Copying .env.example to .env in backend..."
    cp .env.example .env
  else
    echo "❌ .env.example not found in backend!"
    exit 1
  fi
else
  echo "✅ .env already exists in backend, skipping copy."
fi

# Frontend setup
echo "🚀 Setting up frontend environment..."

cd ../frontend || exit

# Copy .env.example to .env if not already present
if [ ! -f ".env" ]; then
  if [ -f ".env.example" ]; then
    echo "📋 Copying .env.example to .env in frontend..."
    cp .env.example .env
  else
    echo "❌ .env.example not found in frontend!"
    exit 1
  fi
else
  echo "✅ .env already exists in frontend, skipping copy."
fi


echo "✅ Environment setup complete for both frontend and backend."
