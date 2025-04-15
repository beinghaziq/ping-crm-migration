cd backend || exit

if [ ! -d "venv" ]; then
  echo "🐍 Creating virtual environment..."
  python3 -m venv venv
fi

echo "🔋 Activating virtual environment..."
source venv/bin/activate

echo "📦 Installing dependencies..."
pip install -r requirements.txt

echo "📜 Running migrations..."
alembic upgrade head

# Run seed script
echo "🌱 Seeding database..."
python -m scripts.seed_users
python -m scripts.seed_organizations
python -m scripts.seed_contacts

echo "✅ Database setup complete."
