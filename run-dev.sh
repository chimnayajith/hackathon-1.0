#!/bin/bash

# connecting to blockchain
multichaind inventory@192.168.188.111:6741 -daemon &

# Run React app (frontend)
cd frontend
npm i
npm run dev &

# Run Django app (backend)
cd ../backend
source myenv/bin/activate
pip install -r requirements.txt
python3 manage.py runserver &

cd ../electron
electron .
